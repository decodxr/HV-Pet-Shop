# HV Pet Shop

Site institucional, catálogo e painel administrativo da HV Pet Shop, desenvolvido para conversão local via WhatsApp. A interface combina uma direção editorial acolhedora com ótima experiência mobile, SEO local e conteúdo administrável no Supabase.

## Stack

Next.js (App Router), React, TypeScript, Tailwind CSS, Supabase (PostgreSQL, Auth e Storage), React Hook Form, Zod, Framer Motion e Lucide.

## Instalação e desenvolvimento

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abra `http://localhost:3000`. Outros comandos: `npm run lint`, `npm run build` e `npm run start`.

## Supabase

1. Crie um projeto no Supabase.
2. Execute `supabase/migrations/001_initial.sql` pelo SQL Editor ou Supabase CLI.
3. Preencha as variáveis de `.env.local`.
4. Crie um usuário no Auth e um registro correspondente em `profiles` com `role = 'admin'`.
5. A migration cria tabelas, RLS e os buckets `products`, `services`, `gallery` e `site`. Uploads aceitam JPEG, PNG e WebP até 5 MB.

Nunca exponha `SUPABASE_SERVICE_ROLE_KEY` no navegador. Ela é reservada a operações seguras no servidor.

## Conteúdo e administração

O painel fica em `/admin`. Serviços, produtos, avaliações, galeria, dados empresariais, horários e seções estão modelados no banco. Sem variáveis Supabase, o projeto opera em modo de demonstração com os dados claramente identificados em `lib/data.ts`.

Para trocar imagens provisórias, publique os arquivos no bucket apropriado e atualize o registro correspondente. Recomendações: hero 1920×1280, serviços 1200×900, sobre 1200×1500 e produtos/galeria 1200×1200. Para atualizar telefone, endereço ou textos de fallback, edite `lib/data.ts`.

## Deploy na Vercel

Importe o repositório, cadastre as quatro variáveis do `.env.example`, defina `NEXT_PUBLIC_SITE_URL` com o domínio final e faça o deploy. Rode `npm run build` antes de publicar.

## SEO, Analytics e conteúdo comercial

A aplicação gera metadata, Open Graph, Twitter Cards, sitemap, robots, dados estruturados de negócio local, breadcrumbs e FAQ. Configure `NEXT_PUBLIC_GA_ID` somente quando a HV optar pelo Google Analytics 4; sem a variável, nenhum script de analytics é carregado. Eventos de WhatsApp, rota, telefone, Instagram e consultas ficam preparados automaticamente.

FAQ e Momentos HV possuem tabelas próprias na migration `002_marketing_content.sql`. Momentos permanecem ocultos até existirem registros reais ativos. A foto da responsável também fica oculta até o upload de uma imagem oficial no painel, em **Configurações**.
