import {
  getApprovedReviews,
  getLatestApprovedReview,
  submitReview
} from './review-store.js';
import { isSupabaseConfigured } from './supabase-client.js';

const summaryView = document.querySelector('[data-summary-view]');
const featuredReview = document.querySelector('[data-featured-review]');
const openReviewsButton = document.querySelector('[data-open-reviews]');
const allReviewsView = document.querySelector('[data-reviews-view]');
const backButton = document.querySelector('[data-back-to-projects]');
const reviewList = document.querySelector('[data-review-list]');
const reviewForm = document.querySelector('[data-review-form]');
const ratingPicker = reviewForm.querySelector('[data-rating-picker]');
const ratingInput = reviewForm.elements.namedItem('rating');
const ratingError = reviewForm.querySelector('[data-rating-error]');
let selectedRating = 0;

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Date unavailable';
  return new Intl.DateTimeFormat(undefined, { year: 'numeric', month: 'short', day: 'numeric' }).format(date);
}

function makeReviewCard(review, className = 'review-item') {
  const card = document.createElement('article');
  card.className = className;

  const heading = document.createElement('h3');
  heading.textContent = review.name;

  const metadata = document.createElement('div');
  metadata.className = 'review-item-meta';
  const stars = document.createElement('span');
  stars.className = 'review-stars-display';
  stars.setAttribute('aria-label', `${review.rating} out of 5 stars`);
  stars.textContent = `${'\u2605'.repeat(review.rating)}${'\u2606'.repeat(5 - review.rating)}`;
  const date = document.createElement('span');
  date.textContent = formatDate(review.created_at);
  const workType = document.createElement('span');
  workType.textContent = review.work_type;
  metadata.append(stars, date, workType);

  const comment = document.createElement('p');
  comment.className = 'review-item-comment';
  comment.textContent = review.comment;
  card.append(heading, metadata, comment);
  return card;
}

function setReviewError(target, message) {
  target.textContent = message;
}

async function refreshLatestReview() {
  featuredReview.textContent = 'Loading reviews...';
  try {
    const review = await getLatestApprovedReview();
    featuredReview.replaceChildren();
    if (review) featuredReview.append(makeReviewCard(review, 'review-featured-card'));
    else featuredReview.textContent = 'No approved reviews yet. Be the first to leave a review.';
  } catch (error) {
    console.error('Could not load the newest approved review.', error);
    setReviewError(featuredReview, isSupabaseConfigured
      ? 'Reviews could not be loaded. Please try again later.'
      : 'Add your Supabase URL and publishable key in .env to enable reviews.');
  }
}

async function refreshApprovedReviews() {
  reviewList.textContent = 'Loading reviews...';
  try {
    const reviews = await getApprovedReviews();
    reviewList.replaceChildren();
    if (!reviews.length) {
      reviewList.textContent = 'No approved reviews yet. Be the first to leave a review.';
      return;
    }
    reviews.forEach((review) => reviewList.append(makeReviewCard(review)));
  } catch (error) {
    console.error('Could not load approved reviews.', error);
    setReviewError(reviewList, isSupabaseConfigured
      ? 'Reviews could not be loaded. Please try again later.'
      : 'Add your Supabase URL and publishable key in .env to enable reviews.');
  }
}

function chooseRating(rating) {
  selectedRating = rating;
  ratingInput.value = rating ? String(rating) : '';
  ratingError.hidden = true;
  ratingPicker.querySelectorAll('[data-rating]').forEach((star) => {
    const starRating = Number(star.dataset.rating);
    star.classList.toggle('is-selected', starRating <= rating);
    star.setAttribute('aria-checked', String(starRating === rating));
  });
}

openReviewsButton.addEventListener('click', async () => {
  summaryView.hidden = true;
  allReviewsView.hidden = false;
  await refreshApprovedReviews();
  allReviewsView.scrollIntoView({ behavior: 'smooth', block: 'start' });
  backButton.focus();
});

backButton.addEventListener('click', async () => {
  await refreshLatestReview();
  allReviewsView.hidden = true;
  summaryView.hidden = false;
  summaryView.scrollIntoView({ behavior: 'smooth', block: 'start' });
  openReviewsButton.focus();
});

ratingPicker.addEventListener('click', (event) => {
  const star = event.target.closest('[data-rating]');
  if (star) chooseRating(Number(star.dataset.rating));
});

ratingPicker.addEventListener('keydown', (event) => {
  if (!['ArrowRight', 'ArrowUp', 'ArrowLeft', 'ArrowDown'].includes(event.key)) return;
  event.preventDefault();
  const direction = ['ArrowRight', 'ArrowUp'].includes(event.key) ? 1 : -1;
  chooseRating(Math.min(5, Math.max(1, (selectedRating || (direction > 0 ? 0 : 2)) + direction)));
  ratingPicker.querySelector(`[data-rating="${selectedRating}"]`).focus();
});

reviewForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const status = reviewForm.querySelector('[data-review-status]');
  const nameField = reviewForm.elements.namedItem('name');
  const workTypeField = reviewForm.elements.namedItem('workType');
  const commentField = reviewForm.elements.namedItem('comment');

  nameField.setCustomValidity(nameField.value.trim() ? '' : 'Please enter your name.');
  commentField.setCustomValidity(commentField.value.trim() ? '' : 'Please enter a review comment.');
  if (!reviewForm.reportValidity()) {
    nameField.setCustomValidity('');
    commentField.setCustomValidity('');
    return;
  }
  if (!selectedRating) {
    ratingError.hidden = false;
    ratingPicker.querySelector('[data-rating="1"]').focus();
    return;
  }

  const sendButton = reviewForm.querySelector('[type="submit"]');
  sendButton.disabled = true;
  status.className = 'review-form-status';
  status.textContent = 'Sending your review...';
  try {
    await submitReview({
      name: nameField.value.trim(),
      workType: workTypeField.value,
      rating: selectedRating,
      comment: commentField.value.trim()
    });
    reviewForm.reset();
    chooseRating(0);
    status.textContent = 'Thank you! Your review has been posted.';
    status.classList.add('is-success');
    await Promise.all([refreshApprovedReviews(), refreshLatestReview()]);
  } catch (error) {
    console.error('The review could not be submitted.', error);
    status.textContent = isSupabaseConfigured
      ? 'Your review could not be submitted. Please try again.'
      : 'Add your Supabase URL and publishable key in .env before submitting reviews.';
    status.classList.add('is-error');
  } finally {
    sendButton.disabled = false;
  }
});

if (isSupabaseConfigured) refreshLatestReview();
else setReviewError(featuredReview, 'Add your Supabase URL and publishable key in .env to enable reviews.');
