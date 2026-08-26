# Landing Page — Dr. Pablício Medeiros 2201

## O que é

Landing page de campanha para **Dr. Pablício Medeiros**, pré-candidato a **Deputado Federal
pela Bahia** (número 2201, Partido Liberal - PL). Baseada no formato/estrutura da página
militaodourado.com.br (storytelling + biografia + plano de governo + captação de leads via
popup conectado ao Supabase + WhatsApp).

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`, sem arquivo de config — usa arbitrary values)
- lucide-react (ícones)
- Supabase (`@supabase/supabase-js`) — salva os leads do formulário na tabela `leads`
- Ao enviar o formulário: insere no Supabase **e** abre o WhatsApp da campanha com a
  mensagem pronta (as duas coisas acontecem, não é uma ou outra)

## Supabase

Projeto dedicado: **pablicio-medeiros-leads** (`rhnoakehzvbdebhskngh`, região sa-east-1),
criado especificamente pra esse candidato — não é compartilhado com outros projetos da conta.

- Tabela `leads`: `id, created_at, nome, whatsapp, cidade, bairro, participacao, temas[],
  autoriza_whatsapp`
- RLS habilitado, com policy de `insert` liberada pro público (`anon`) — sem `select`/`update`/
  `delete` públicos, então só quem tem acesso ao painel do Supabase lê os leads
- Credenciais em `.env` (não commitado — está no `.gitignore`): `VITE_SUPABASE_URL` e
  `VITE_SUPABASE_ANON_KEY`
- Client em `src/lib/supabase.ts`

Pra ver os leads: painel do Supabase → projeto `pablicio-medeiros-leads` → Table Editor →
`leads`.

## Como rodar

```bash
npm install
npm run dev
```

Precisa do arquivo `.env` com as credenciais do Supabase (peça pra quem criou o projeto, ou
recrie apontando pra outro projeto Supabase).

## Estrutura

- `src/data/content.ts` — **edite aqui** para trocar textos, propostas, cores, contato,
  cidades do dropdown, link do vídeo, etc. Os componentes só consomem esse arquivo.
- `src/components/` — uma seção da página por arquivo (Hero, Bio, Stats, Plan, VideoVsl...)
- `src/components/Modal.tsx` + `src/context/LeadModalContext.tsx` — o popup de captação de
  leads. Qualquer botão pode abrir com `const { openModal } = useLeadModal()`.
- `src/lib/video.ts` — detecta se o link colado em `content.ts > videoUrl` é YouTube, Vimeo
  ou um arquivo de vídeo direto (.mp4/.webm) e monta o embed certo.
- `src/assets/pablicio-foto.jpg` — foto oficial do candidato
- `src/assets/ideias-centrais.png` — infográfico de referência (não usado diretamente na
  página, os textos foram extraídos para `content.ts`)

## Mobile-first

A maior parte do tráfego chega pelo celular, então o layout foi feito mobile-first e revisado
em 375px (iPhone SE/mini) pra cima:

- `src/components/StickyMobileCta.tsx` — barra fixa no rodapé, só no mobile (`md:hidden`),
  com atalho direto pro WhatsApp e botão "Vote · Quero fazer parte" sempre visível durante o
  scroll. Por causa dela, o `<div>` raiz do `App.tsx` tem `pb-[72px] md:pb-0` pra o rodapé da
  página não ficar escondido atrás da barra.
- `src/components/Modal.tsx` — no mobile abre como bottom-sheet (desliza de baixo pra cima,
  cantos arredondados só em cima, alça de arrastar); no desktop (`sm:` pra cima) é o modal
  centralizado tradicional.
- `src/components/Reveal.tsx` — fade-in suave (Intersection Observer) ao rolar até cada
  seção; respeita `prefers-reduced-motion`.
- `src/components/CookieBanner.tsx` fica `bottom-[64px]` no mobile pra não tampar a
  `StickyMobileCta`.

## Vídeo (VSL)

Seção "A história dele" (`src/components/VideoVsl.tsx`) — **logo depois do Hero**, antes de
qualquer outro conteúdo, pra quem chegar pelo link já ver o vídeo sem quase rolar a tela (pedido
específico pra melhorar conversão em quem acessa pelo celular). Pra ativar, cole o link em
`src/data/content.ts > videoUrl` — aceita:
- Link do YouTube (qualquer formato: `watch?v=`, `youtu.be/`, `/shorts/`)
- Link do Vimeo
- Link direto de um arquivo `.mp4`/`.webm`/`.ogg`
- Qualquer outro link cai num `<iframe>` genérico (funciona pra a maioria das plataformas de
  hospedagem de vídeo)

Sem link, mostra um placeholder "Vídeo em breve".

## Pendências / dados a confirmar

- **Redes sociais**: Instagram e Facebook em `content.ts > contato` estão como `"#"`
  (placeholder). Trocar pelos links reais.
- **Time/apoiadores**: seção não incluída por falta de dados (nomes/fotos de lideranças
  apoiadoras). Adicionar se o candidato quiser.

## Dados legais (rodapé)

- CNPJ do responsável pela contratação: 68.237.185/0001-96
- Contato: (74) 98782-2591 · pablicioae@hotmail.com

## Próximos passos sugeridos

- `/conectar-github` — subir o projeto pro GitHub
- Deploy: Netlify (conforme o restante do template PAIN) — lembrar de configurar
  `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` nas variáveis de ambiente do Netlify
