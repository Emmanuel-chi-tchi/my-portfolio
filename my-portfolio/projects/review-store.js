import { isSupabaseConfigured, supabase } from './supabase-client.js';

const REVIEW_FIELDS = 'id, name, work_type, rating, comment, created_at, status';

export async function getLatestApprovedReview() {
  if (!isSupabaseConfigured) throw new Error('Supabase is not configured.');

  const { data, error } = await supabase
    .from('reviews')
    .select(REVIEW_FIELDS)
    .eq('status', 'approved')
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) throw error;
  return data;
}

export async function getApprovedReviews() {
  if (!isSupabaseConfigured) throw new Error('Supabase is not configured.');

  const { data, error } = await supabase
    .from('reviews')
    .select(REVIEW_FIELDS)
    .eq('status', 'approved')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
}

export async function submitReview(review) {
  if (!isSupabaseConfigured) throw new Error('Supabase is not configured.');

  const { error } = await supabase.from('reviews').insert({
    name: review.name,
    work_type: review.workType,
    rating: review.rating,
    comment: review.comment
  });

  if (error) throw error;
}
