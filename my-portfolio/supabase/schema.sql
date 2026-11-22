create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) between 1 and 80),
  work_type text not null check (work_type in ('Logo', 'Flyer', 'Logo + Flyer', 'Other')),
  rating smallint not null check (rating between 1 and 5),
  comment text not null check (char_length(trim(comment)) between 1 and 2000),
  created_at timestamptz not null default now(),
  status text not null default 'approved' check (status in ('pending', 'approved', 'rejected'))
);

alter table public.reviews
  alter column status set default 'approved';

create index if not exists reviews_approved_created_at_idx
  on public.reviews (created_at desc)
  where status = 'approved';

alter table public.reviews enable row level security;

grant usage on schema public to anon, authenticated;
revoke create on schema public from anon, authenticated;
revoke all on table public.reviews from public, anon, authenticated;
grant select on table public.reviews to anon, authenticated;
grant insert (name, work_type, rating, comment) on table public.reviews to anon, authenticated;

drop policy if exists "Anyone can read approved reviews" on public.reviews;
create policy "Anyone can read approved reviews"
  on public.reviews
  for select
  to anon, authenticated
  using (status = 'approved');

drop policy if exists "Anyone can submit pending reviews" on public.reviews;
drop policy if exists "Anyone can submit approved reviews" on public.reviews;
create policy "Anyone can submit approved reviews"
  on public.reviews
  for insert
  to anon, authenticated
  with check (status = 'approved');
