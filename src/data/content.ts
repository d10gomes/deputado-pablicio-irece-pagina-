// Conteúdo central da página — edite aqui sem mexer nos componentes.

export const candidato = {
  nome: "Dr. Pablício Medeiros",
  numero: "2201",
  cargo: "Deputado Federal",
  uf: "Bahia",
  partido: "Partido Liberal",
  partidoSigla: "PL",
  slogan: "A voz da renovação.",
  bandeira: "Liberdade, Família e Agro",
  idade: 40,
  cidadeBase: "Irecê",
};

// Cole aqui o link do vídeo (YouTube, Vimeo ou um .mp4 direto). Deixe vazio para
// mostrar o placeholder "vídeo em breve".
export const videoUrl = "";

export const contato = {
  whatsapp: "5571987822591",
  whatsappExibicao: "(71) 98782-2591",
  email: "pablicioae@hotmail.com",
  cnpjResponsavel: "68.237.185/0001-96",
  instagram: "#",
  facebook: "#",
};

export const cores = {
  azulEscuro: "#022873",
  azul: "#0339a6",
  verdeEscuro: "#02732a",
  verde: "#03a63c",
  amarelo: "#f2cb05",
};

export const cidadesRegiao = [
  "Irecê",
  "Lapão",
  "João Dourado",
  "Ibititá",
  "Central",
  "Canarana",
  "Jussara",
  "América Dourada",
  "São Gabriel",
  "Presidente Dutra",
  "Cafarnaum",
  "Ibipeba",
  "Uibaí",
  "Barro Alto",
  "Mulungu do Morro",
  "Barra do Mendes",
  "Itaguaçu da Bahia",
  "Xique-Xique",
  "Gentio do Ouro",
  "Outra cidade",
];

export const valores = [
  {
    icone: "handshake",
    titulo: "Compromisso",
    texto:
      "Representa responsabilidade com a população e com o desenvolvimento coletivo.",
  },
  {
    icone: "dove",
    titulo: "Fé cristã",
    texto:
      "Valorização da fé e dos princípios judaico-cristãos como base moral da sociedade — respeito, paz e união.",
  },
  {
    icone: "sprout",
    titulo: "Crescimento econômico",
    texto:
      "Desenvolvimento econômico e social da população, com oportunidades e mais qualidade de vida para as famílias.",
  },
  {
    icone: "family",
    titulo: "Família",
    texto:
      "Uma das bases mais importantes da sociedade — união, proteção, respeito e desenvolvimento das futuras gerações.",
  },
  {
    icone: "cap",
    titulo: "Educação",
    texto:
      "Fortalecer a qualidade da aprendizagem e superar estatísticas que não refletem a realidade dos estudantes.",
  },
  {
    icone: "scale",
    titulo: "Justiça",
    texto:
      "Compromisso com decisões responsáveis, honestas e alinhadas às necessidades da população.",
  },
];

export const stats = [
  { numero: "70+", label: "municípios no centro-norte da Bahia" },
  { numero: "2 mil", label: "hectares irrigáveis já em operação no Mirorós" },
  { numero: "48 mil", label: "hectares de potencial no Baixio de Irecê" },
  {
    numero: "R$ 1,3 bi",
    label: "por ano em produção, quando o Baixio for plenamente desenvolvido",
  },
];

export type Proposta = {
  titulo: string;
  texto: string;
  ferramenta: string;
};

export type Eixo = {
  numero: string;
  titulo: string;
  contexto: string;
  propostas: Proposta[];
};

export const eixos: Eixo[] = [
  {
    numero: "01",
    titulo: "Educação que prepara",
    contexto:
      "Não basta manter o jovem na escola. Precisamos prepará-lo para o futuro, para o trabalho e para a vida.",
    propostas: [
      {
        titulo:
          "Ensino médio conectado à vocação regional",
        texto:
          "Formação complementar em agricultura, tecnologia, administração, comércio, indústria, logística e empreendedorismo.",
        ferramenta: "PROJETO DE LEI",
      },
      {
        titulo: "Ampliação da educação técnica e profissionalizante",
        texto:
          "Especialmente nas áreas ligadas ao agro, à indústria e aos serviços da região.",
        ferramenta: "EMENDA AO ORÇAMENTO",
      },
      {
        titulo: "Centros regionais de pesquisa, tecnologia e inovação",
        texto:
          "Articulando universidades, institutos federais, produtores, empresas e poder público.",
        ferramenta: "ARTICULAÇÃO",
      },
      {
        titulo:
          "Pesquisa aplicada em irrigação e convivência com o Semiárido",
        texto:
          "Manejo do solo, sementes, produtividade, tecnologia agrícola e processamento de alimentos.",
        ferramenta: "EMENDA AO ORÇAMENTO",
      },
    ],
  },
  {
    numero: "02",
    titulo: "Agro que produz",
    contexto:
      "A agricultura já é uma das grandes forças econômicas do centro-norte da Bahia. O desafio é transformar essa força em cadeia produtiva organizada e competitiva.",
    propostas: [
      {
        titulo: "Fortalecimento do Mirorós e do Baixio de Irecê",
        texto:
          "Apoio à ampliação e modernização da infraestrutura de irrigação e à segurança hídrica dos dois projetos públicos.",
        ferramenta: "FISCALIZAÇÃO",
      },
      {
        titulo: "Crédito, seguro rural e assistência técnica",
        texto:
          "Ampliação do acesso para os milhares de produtores da irrigação independente e da agricultura familiar.",
        ferramenta: "PROJETO DE LEI",
      },
      {
        titulo: "Organização de cooperativas e centrais de comercialização",
        texto:
          "Incentivo à organização dos produtores para vender melhor, com armazenamento, classificação e embalagem próprios.",
        ferramenta: "PROJETO DE LEI",
      },
      {
        titulo: "Logística de escoamento da produção",
        texto:
          "Melhoria da infraestrutura que liga a fazenda ao mercado — hortifruticultura, fruticultura e grãos.",
        ferramenta: "EMENDA AO ORÇAMENTO",
      },
    ],
  },
  {
    numero: "03",
    titulo: "Indústria que transforma",
    contexto:
      "Produzir é importante. Mas desenvolvimento acontece quando transformamos produção em riqueza — beneficiada e industrializada aqui.",
    propostas: [
      {
        titulo:
          "Distrito de Desenvolvimento Industrial e Agroindustrial do Centro-Norte",
        texto:
          "Com Irecê como polo estratégico, atraindo agroindústrias, beneficiadoras e unidades de processamento de grãos.",
        ferramenta: "PROJETO DE LEI",
      },
      {
        titulo: "Ambiente de negócios mais competitivo",
        texto:
          "Mecanismos de incentivo fiscal, regulatório e de infraestrutura, dentro das competências federais e em articulação com Estado e municípios.",
        ferramenta: "ARTICULAÇÃO",
      },
      {
        titulo: "Estruturas de armazenagem e logística industrial",
        texto:
          "Para que a região deixe de exportar apenas matéria-prima e passe a agregar valor localmente.",
        ferramenta: "EMENDA AO ORÇAMENTO",
      },
    ],
  },
  {
    numero: "04",
    titulo: "Liberdade para trabalhar, empreender e viver a fé",
    contexto:
      "Quem trabalha, empreende e produz precisa de menos burocracia e mais segurança jurídica. Quem tem fé precisa de liberdade para vivê-la.",
    propostas: [
      {
        titulo: "Redução de burocracias para o empreendedorismo",
        texto:
          "Simplificação de procedimentos e licenças, respeitadas as competências legais, e segurança jurídica para investimentos.",
        ferramenta: "PROJETO DE LEI",
      },
      {
        titulo: "Fortalecimento da livre iniciativa e do pequeno negócio",
        texto:
          "Estímulo ao pequeno empreendedor, respeito à propriedade e aos contratos.",
        ferramenta: "PROJETO DE LEI",
      },
      {
        titulo: "Proteção à liberdade de consciência e de crença",
        texto:
          "Segurança jurídica para igrejas e instituições confessionais, e respeito à atuação social e educacional das organizações religiosas.",
        ferramenta: "PROJETO DE LEI",
      },
    ],
  },
];

export const bio = {
  fraseAbertura:
    "Você conhece uma família que só quer trabalhar, criar seus filhos com segurança, viver com fé e ter liberdade?",
  aberturaTexto:
    "Eu conheço muitas. E foi por elas que decidi entrar na política. Aos 40 anos, minha história é feita de fé, trabalho e serviço. Na escola, na universidade, na igreja e na profissão, sempre busquei construir soluções, defender o que é justo e servir ao bem comum.",
  memoriaTitulo: "Terra rachada, chuva como esperança, água como conquista.",
  memoriaTexto:
    "Minha família veio de retirantes que chegaram à Bahia, trazendo coragem, trabalho e esperança. Chegamos a Irecê por necessidade — e eu escolhi ficar e me tornar filho desta terra. Aqui construí minha família, minha profissão, minha fé e minha história.",
  memoriaDestaque:
    "Porque quem conhece a dificuldade de perto não pode se conformar com ela.",
  quemE: [
    "Dr. Pablício nasceu no Hospital Regional de Irecê, filho desta terra e de uma família que ajudou a construir sua história.",
    "Neto de Pedro Carolina e Sabino Machante, filho de Experdião, do primeiro matadouro de Irecê, e sobrinho de famílias conhecidas pelo trabalho no comércio da cidade.",
    "Cresceu ouvindo histórias de quem enfrentou a seca, trabalhou cedo e ajudou a construir Irecê com as próprias mãos.",
    "Em 2015, tornou-se advogado. Em 2019, iniciou a Bolaria Shalom, empreendendo e conhecendo de perto os desafios de quem trabalha, gera oportunidades e sustenta uma família.",
    "Em 2024, tornou-se professor universitário, ampliando sua atuação na formação de novas gerações.",
    "Agora, aos 40 anos, coloca sua história, sua experiência e sua disposição de servir à disposição do povo baiano.",
  ],
  citacao: "Porque sua história não começou na política. Começou aqui.",
  autenticidadeTitulo: "Ele já faz, antes de prometer.",
  autenticidadeTexto:
    "Advogado, empreendedor e professor — Dr. Pablício já gera trabalho, defende direitos e forma gente na própria região onde nasceu. Agora quer levar essa mesma disposição de servir para a Câmara dos Deputados: não para fazer discurso, mas para trazer recurso, apresentar lei e cobrar o que é da nossa região.",
};

export const rodapeLegal = {
  nomeCivil: "Dr. Pablício Medeiros",
  disclaimer: `Propaganda eleitoral. ${candidato.nome.toUpperCase()} ${candidato.numero} — Candidato a ${candidato.cargo} — ${candidato.partido} (${candidato.partidoSigla}).`,
  responsavel: `Responsável pela contratação: CNPJ ${contato.cnpjResponsavel}.`,
};
