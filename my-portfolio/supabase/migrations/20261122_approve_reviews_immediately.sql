begin;

alter table public.reviews
  alter column status set default 'approved';
alter table public.reviews enable row level security;

grant usage on schema public to anon, authenticated;
revoke create on schema public from anon, authenticated;
revoke all on table public.reviews from public, anon, authenticated;
grant select on table public.reviews to anon, authenticated;
grant insert (name, work_type, rating, comment)
  on table public.reviews to anon, authenticated;

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

commit;
