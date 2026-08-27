# Landing Page — Dr. Pablício Medeiros 2201

## O que é

Landing page de campanha para **Dr. Pablício Medeiros**, candidato a **Deputado Federal
pela Bahia** (número 2201, Partido Liberal - PL). Baseada no formato/estrutura da página
militaodourado.com.br (storytelling + biografia + plano de governo + captação de leads via
popup conectado ao Supabase + WhatsApp).

## TSE — status confirmado

Registro de candidatura **já protocolado/deferido na Justiça Eleitoral** (confirmado com o
responsável pela campanha em 26/08/2026). Por isso a página usa linguagem de campanha oficial
("Vote 2201", pedido direto de voto) sem problema de propaganda antecipada. Se algum dia a
situação mudar (ex: reaproveitar esse template pra outro candidato ainda em pré-candidatura),
trocar "Vote 2201" e pedidos diretos de voto por linguagem de pré-campanha (só biografia e
atuação, sem pedir voto/número) até o registro ser protocolado.

**Fotos com outras lideranças (seção "Diálogo e Articulação"):** legendas identificam apenas
quem está na foto e o cargo/candidatura de cada um, sem afirmar "apoio de fulano" — isso evitaria
a necessidade de autorização formal dessas pessoas, já que não é uma alegação de endosso
político, só uma identificação factual de um encontro. Ideal manter esse padrão em fotos
futuras dessa seção.

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
- Função `public.get_leads_count()` (SQL, `security definer`) — retorna só a **contagem** de
  leads, sem expor nome/whatsapp/cidade de ninguém. É nela que o contador social
  (`SupportersCounter.tsx`) se baseia. Liberada via `grant execute` pro role `anon` — de
  propósito não dei `select` público na tabela `leads` inteira, pra não vazar dados pessoais
  pela API REST do Supabase.

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
- `src/data/galeria.ts` + `src/components/Articulacao.tsx` — seção "Diálogo e Articulação"
  (fotos com outras lideranças políticas). Pra adicionar uma foto nova: importe o arquivo em
  `galeria.ts` e adicione `{ src, legenda }` no array — o card aparece sozinho. Legenda é só
  identificação factual (nomes + cargo/candidatura), nunca "apoio de fulano" — ver nota de TSE
  abaixo. Fotos usadas aqui **não** levam `loading="lazy"` de propósito (não carregavam nesse
  ambiente de dev com scroll programático; carregamento direto é mais robusto pra uma galeria
  pequena).
- `src/hooks/useLeadsCount.ts` + `src/components/SupportersCounter.tsx` — contador social real
  ("X pessoas já confirmaram presença"), busca a contagem no Supabase. Usado no `ParticiparCta`
  (fundo escuro, `variant="dark"`) e dentro do modal (`LeadForm`, fundo claro,
  `variant="light"`). Com 0 cadastros mostra "Seja um dos primeiros" em vez de "0 pessoas" —
  de propósito, pra não expor um número que passe impressão ruim.
- `src/assets/pablicio-foto.jpg` — foto original do candidato (fundo branco de estúdio)
- `src/assets/pablicio-cutout.webp` — a mesma foto **sem fundo** (recortada com IA, rembg
  modelo `u2net_human_seg`, depois convertida de PNG pra WebP: 612KB → 60KB), usada no Hero.
  Se precisar recortar outra foto, veja o processo abaixo.
- `src/assets/ideias-centrais.png` — infográfico de referência (não usado diretamente na
  página, os textos foram extraídos para `content.ts`)

### Como recortar uma nova foto (remover fundo)

```bash
pip install rembg onnxruntime pillow
python -c "
from rembg import remove, new_session
from PIL import Image
session = new_session('u2net_human_seg')  # modelo leve, ~176MB, roda bem em CPU
img = remove(Image.open('foto-original.jpg'), session=session, alpha_matting=True,
             alpha_matting_foreground_threshold=240, alpha_matting_background_threshold=10,
             alpha_matting_erode_size=5)
cutout = img.crop(img.getbbox())
cutout.save('foto-cutout.png')
cutout.save('foto-cutout.webp', 'WEBP', quality=90, method=6)  # bem mais leve, use este no código
"
```

Evite o modelo padrão do rembg (`birefnet`/`bria-rmbg`, ~1GB) — ele estourou memória nesta
máquina. `u2net_human_seg` é bem mais leve e já dá conta de recorte de retrato/corpo inteiro.

## Compartilhamento (Open Graph) e favicon

- `index.html` tem as meta tags `og:*` e `twitter:*` pra gerar prévia bonita quando o link é
  compartilhado no WhatsApp/Instagram/Facebook — usa `public/og-image.jpg` (1200x630, gerado a
  partir da foto sem fundo + identidade visual).
- **IMPORTANTE:** antes de divulgar o link, troque `https://SEU-DOMINIO-AQUI` nessas tags pelo
  domínio real (ex: `https://pabliciomedeiros.com.br`) — sem isso o WhatsApp não busca a
  imagem, porque exige URL absoluta.
- `public/favicon.svg` — ícone customizado com "2201" e as cores da campanha.
- Pra gerar uma nova `og-image.jpg` (se trocar a foto do candidato), o script que a criou está
  documentado no histórico do projeto — usa Pillow com a foto recortada
  (`pablicio-cutout.png`) + texto renderizado por cima.

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
