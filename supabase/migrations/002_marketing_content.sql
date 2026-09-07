create table if not exists public.faqs (
  id uuid primary key default gen_random_uuid(), question text not null, answer text not null,
  active boolean not null default true, sort_order integer not null default 0,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.care_moments (
  id uuid primary key default gen_random_uuid(), title text not null, description text,
  image_url text not null, before_image_url text, after_image_url text, pet_name text, service text,
  featured boolean not null default false, active boolean not null default true, sort_order integer not null default 0,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
alter table public.business_settings add column if not exists response_promise text default 'Responderemos assim que possível durante nosso horário de atendimento.';
alter table public.business_settings add column if not exists team_photo_url text;
alter table public.business_settings add column if not exists default_og_image_url text;
alter table public.business_settings add column if not exists seo jsonb not null default '{}';
alter table public.faqs enable row level security;
alter table public.care_moments enable row level security;
create policy "public active faqs" on public.faqs for select using (active);
create policy "admin faqs" on public.faqs for all using (public.is_admin()) with check (public.is_admin());
create policy "public active care moments" on public.care_moments for select using (active);
create policy "admin care moments" on public.care_moments for all using (public.is_admin()) with check (public.is_admin());
