-- Apply this migration after activating the Supabase project.
create table if not exists public.player_rankings (
  player_id text primary key,
  player_name text not null,
  company_name text not null,
  country_code text not null default 'BR',
  total_money numeric not null default 0,
  play_seconds bigint not null default 0,
  updated_at timestamptz not null default now()
);

create index if not exists player_rankings_money_idx on public.player_rankings (total_money desc, updated_at asc);
create index if not exists player_rankings_time_idx on public.player_rankings (play_seconds desc, updated_at asc);
create index if not exists player_rankings_country_money_idx on public.player_rankings (country_code, total_money desc, updated_at asc);
create index if not exists player_rankings_country_time_idx on public.player_rankings (country_code, play_seconds desc, updated_at asc);

alter table public.player_rankings enable row level security;
create policy "public leaderboard read" on public.player_rankings for select using (true);
create policy "player leaderboard upsert" on public.player_rankings for insert with check (true);
create policy "player leaderboard update" on public.player_rankings for update using (true) with check (true);

create or replace function public.upsert_player_ranking(
  p_player_id text, p_player_name text, p_company_name text,
  p_country_code text, p_total_money numeric, p_play_seconds bigint
) returns void language sql security definer as $$
  insert into public.player_rankings(player_id, player_name, company_name, country_code, total_money, play_seconds)
  values(p_player_id,p_player_name,p_company_name,coalesce(p_country_code,'BR'),greatest(p_total_money,0),greatest(p_play_seconds,0))
  on conflict(player_id) do update set
    player_name=excluded.player_name, company_name=excluded.company_name,
    country_code=excluded.country_code, total_money=excluded.total_money,
    play_seconds=excluded.play_seconds, updated_at=now();
$$;
