# Landing Page — Dr. Pablício Medeiros 2201

## O que é

Landing page de campanha para **Dr. Pablício Medeiros**, pré-candidato a **Deputado Federal
pela Bahia** (número 2201, Partido Liberal - PL). Baseada no formato/estrutura da página
militaodourado.com.br (storytelling + biografia + plano de governo + captação de leads via
WhatsApp).

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`, sem arquivo de config — usa arbitrary values)
- lucide-react (ícones)
- Sem backend/banco: o formulário de contato monta uma mensagem e abre o WhatsApp da
  campanha (`wa.me`) — não salva em nenhum banco de dados ainda.

## Como rodar

```bash
npm install
npm run dev
```

## Estrutura

- `src/data/content.ts` — **edite aqui** para trocar textos, propostas, cores, contato,
  cidades do dropdown, etc. Os componentes só consomem esse arquivo.
- `src/components/` — uma seção da página por arquivo (Hero, Bio, Stats, Plan, LeadForm...)
- `src/assets/pablicio-foto.jpg` — foto oficial do candidato
- `src/assets/ideias-centrais.png` — infográfico de referência das ideias centrais (não usado
  diretamente na página, os textos foram extraídos para `content.ts`)

## Pendências / dados a confirmar

- **Redes sociais**: Instagram e Facebook em `content.ts > contato` estão como `"#"`
  (placeholder). Trocar pelos links reais.
- **Vídeo institucional**: a página não tem seção de vídeo (o modelo original tinha um vídeo
  de 3 min contando a história do candidato). Se houver vídeo, pedir para adicionar uma seção
  nova.
- **Time/apoiadores**: seção não incluída por falta de dados (nomes/fotos de lideranças
  apoiadoras). Adicionar se o candidato quiser.
- **Formulário sem banco de dados**: hoje só abre o WhatsApp com os dados preenchidos. Para
  guardar os leads numa lista de verdade, rodar `/conectar-supabase` e trocar o `handleSubmit`
  de `src/components/LeadForm.tsx` para salvar no banco além de (ou em vez de) abrir o
  WhatsApp.

## Dados legais (rodapé)

- CNPJ do responsável pela contratação: 68.237.185/0001-96
- Contato: (74) 98782-2591 · pablicioae@hotmail.com

## Próximos passos sugeridos

- `/conectar-github` — subir o projeto pro GitHub
- `/conectar-supabase` — se quiser guardar os leads do formulário num banco
- Deploy: Netlify (conforme o restante do template PAIN)
