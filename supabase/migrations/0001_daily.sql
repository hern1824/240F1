-- 24-0: Perfect Season — add daily-challenge columns to the leaderboard.
-- Safe to run repeatedly.
alter table if exists public.season_results
  add column if not exists mode text not null default 'free',
  add column if not exists seed text;

create index if not exists season_results_daily_idx
  on public.season_results (mode, seed, wins desc, redos_used asc);
