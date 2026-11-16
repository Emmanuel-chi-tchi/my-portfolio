const imageTrack = document.querySelector('.image-track');

if (imageTrack) {
  let currentImage = 0;
  const imageCount = imageTrack.querySelectorAll('.image-slide').length;

  window.setInterval(() => {
    currentImage = (currentImage + 1) % imageCount;
    imageTrack.style.transform = `translateX(-${currentImage * 50}%)`;
  }, 4000);
}
