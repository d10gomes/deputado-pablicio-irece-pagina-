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
futuras dessa seção. Confirmado com a campanha (27/08/2026): todas as fotos foram tiradas em
encontros e eventos do próprio partido — não em prédio público —, então o risco do Art. 73
(uso de bem público para fins eleitorais) não se aplica aqui. Autorização individual de cada
pessoa retratada pra aparecer no material da campanha ainda é um ponto em aberto — aguardando
confirmação da campanha antes de divulgar essas fotos em peça paga.

**Revisão geral de conformidade (27/08/2026):** a pedido do responsável pela campanha, foram
feitos 3 ajustes preventivos de LGPD/TSE:
1. Removidas as opções "Igreja e fé" e "Liberdade religiosa" do campo "O que mais te toca" do
   formulário (`LeadForm.tsx`) — convicção religiosa é dado pessoal **sensível** pela LGPD
   (Art. 5º, II), e coletar isso sem uma base legal/aviso específico é um risco desnecessário.
   As posições do candidato sobre liberdade religiosa continuam normalmente no plano de
   governo (`content.ts > eixos`) — o que foi removido foi só a pergunta feita ao visitante.
2. Criada a Política de Privacidade (`public/privacidade.html`), linkada no rodapé e dentro do
   formulário. Cobre: dados coletados, finalidade, base legal (consentimento), onde ficam
   guardados, prazo de retenção, direitos do titular e como exercê-los. Nota honesta sobre
   cookies: hoje o site não tem nenhum rastreamento real instalado, então a política registra
   isso em vez de fingir uma política de cookies que não existe ainda.
3. Adicionada citação de fonte ("Fonte: Codevasf") embaixo dos números de impacto regional em
   `Stats.tsx` — os números (hectares do Mirorós/Baixio de Irecê, R$ 1,3 bi) vêm de projeções
   da Codevasf mencionadas no material original do candidato; citar a fonte reduz o risco de
   alegação de "informação inverídica" por terceiros.

**Deixado pra depois, por decisão do responsável pela campanha:** trocar o domínio placeholder
no Open Graph, e revisar o banner/política de cookies (só vira necessário de verdade se
instalarem alguma ferramenta de analytics ou pixel de anúncio pago).

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
- **Melhorias de conversão no popup (`LeadForm.tsx`):**
  - Foto do candidato (avatar circular) no topo do formulário — passa confiança de que é
    ele mesmo pedindo.
  - Máscara automática no campo de WhatsApp (`formatarWhatsapp`) — sempre assume formato de
    celular (DDD + 9 dígitos), que é o padrão hoje no Brasil; evita o hífen "pulando de
    posição" enquanto a pessoa digita.
  - Selo "Seus dados estão protegidos" com ícone, logo acima do botão de enviar — reforça
    confiança no momento exato da decisão de enviar.
  - Depois de enviar, convite pra compartilhar com 3 amigos (`compartilhar()` em
    `LeadForm.tsx`) — usa a Web Share API nativa no celular (abre o menu de compartilhar do
    sistema) e cai pra um link `wa.me` no desktop. A URL compartilhada usa
    `window.location.origin`, então já sai correta assim que o site for publicado num
    domínio de verdade (não precisa hardcodar).
- `src/components/RetentionPopupTrigger.tsx` — abre o mesmo popup de leads automaticamente
  quando o visitante dá sinal de que vai sair sem converter: 40s na página, OU rolou 70% dela,
  OU (bônus desktop) tirou o mouse pelo topo da janela — o que vier primeiro. **Não é
  "exit intent" clássico** (técnica de mouse, quase inútil no celular, que é a maioria do
  tráfego aqui) — por isso o gatilho principal é tempo/scroll, que funciona igual em qualquer
  aparelho. Regras de bom comportamento, todas via `sessionStorage`:
  - Nunca antes de 8s na página (não interrompe quem acabou de chegar);
  - No máximo uma vez por sessão (`popupRetencaoMostrado`);
  - Nunca se a pessoa já abriu o formulário manualmente por qualquer botão nesse meio tempo
    (o próprio `open` do `LeadModalContext` já marca a flag);
  - Nunca se ela já enviou os dados com sucesso (`leadEnviado`, setado em
    `LeadForm.tsx > handleSubmit`).
  - Sem duplicar lógica de formulário: só decide *quando* chamar `openModal()` do contexto
    existente, reaproveitando o mesmo popup/formulário de sempre.
- `src/lib/video.ts` — detecta se o link colado em `content.ts > videoUrl` é YouTube, Vimeo
  ou um arquivo de vídeo direto (.mp4/.webm) e monta o embed certo.
- `src/data/galeria.ts` + `src/components/Articulacao.tsx` — seção "Diálogo e Articulação"
  (fotos com outras lideranças políticas). Pra adicionar uma foto nova: importe o arquivo em
  `galeria.ts` e adicione `{ src, legenda }` no array — o card aparece sozinho, distribuído
  automaticamente numa das duas fileiras. Legenda é só identificação factual (nomes +
  cargo/candidatura), nunca "apoio de fulano" — ver nota de TSE abaixo. Fotos usadas aqui
  **não** levam `loading="lazy"` de propósito (não carregavam nesse ambiente de dev com scroll
  programático; carregamento direto é mais robusto pra uma galeria pequena).
- **Carrossel rotativo em anel:** a galeria fica numa fileira só, girando sozinha e sem
  parar — pensado pro tráfego majoritariamente mobile (mais dinâmico, ocupa pouca altura de
  tela). **Nenhuma foto é duplicada no DOM**: a cada frame (`requestAnimationFrame`) o track
  desliza pra esquerda; quando o primeiro card sai totalmente de vista, o próprio nó é movido
  pro final com `track.appendChild(first)` (manipulação direta do DOM, sem passar pelo
  `setState`/render do React, pra não ter nenhum salto de sincronização) e o offset acumulado
  é compensado no mesmo instante. Pausa ao passar o mouse (`onMouseEnter/Leave`) e não gira se
  o visitante tiver "reduzir movimento" ativado no sistema. Pra adicionar mais fotos, só editar
  `galeria.ts` — a fileira e a rotação são automáticas pra qualquer quantidade.
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
- **Domínio no Open Graph**: ainda com o placeholder `SEU-DOMINIO-AQUI` — deixado pra depois
  por decisão do responsável pela campanha, trocar quando o domínio final for definido.
- **Autorização das pessoas na galeria "Diálogo e Articulação"**: confirmar que cada pessoa
  fotografada está de acordo em aparecer no material de campanha (mais importante se algum
  dia essas fotos forem usadas em peça paga/impulsionada).

## Dados legais (rodapé)

- CNPJ do responsável pela contratação: 68.237.185/0001-96
- Contato: (71) 98782-2591 · contato@drpablicíomedeiros.com.br

## Próximos passos sugeridos

- `/conectar-github` — subir o projeto pro GitHub
- Deploy: Netlify (conforme o restante do template PAIN) — lembrar de configurar
  `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` nas variáveis de ambiente do Netlify
