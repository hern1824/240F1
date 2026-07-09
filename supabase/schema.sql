-- 24-0 F1 — optional Supabase schema (leaderboards later)
-- Run in Supabase SQL Editor when you are ready. Not required for v1.

-- Public results board (no auth required to insert; tighten with RLS later)
create table if not exists public.season_results (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  nickname text,
  era_id text not null,
  team text not null,
  era_label text not null,
  tier text not null check (tier in ('god', 'strong', 'underdog')),
  wins int not null check (wins >= 0 and wins <= 24),
  losses int not null check (losses >= 0 and losses <= 24),
  redos_used int not null default 0,
  primary_driver text,
  is_perfect boolean generated always as (wins = 24 and losses = 0) stored,
  user_agent text,
  country text
);

create index if not exists season_results_perfect_idx
  on public.season_results (is_perfect, created_at desc);

create index if not exists season_results_wins_idx
  on public.season_results (wins desc, created_at desc);

alter table public.season_results enable row level security;

-- Open read for leaderboard; open insert for anonymous submits (tighten later)
create policy "Public read results"
  on public.season_results for select
  using (true);

create policy "Public insert results"
  on public.season_results for insert
  with check (
    wins + losses = 24
    and char_length(coalesce(nickname, '')) <= 24
  );

-- Example: fetch recent perfect seasons
-- select team, era_label, primary_driver, created_at
-- from public.season_results
-- where is_perfect
-- order by created_at desc
-- limit 20;
