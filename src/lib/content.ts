export const hero = {
  eyebrow: 'Lençóis Maranhenses · Santo Amaro do Maranhão',
  title: 'Você não atravessa os Lençóis.',
  titleEm: 'Você vive eles com quem nasceu lá.',
  sub:
    'Há 14 anos a gente guia gente de toda parte por trilhas que mapa nenhum registra. Lagoas escondidas, oásis no meio da areia, e o silêncio do parque antes do nascer do sol.',
  primaryCta: 'Ver travessias',
  secondaryCta: 'Falar com o Galego',
};

export const stats = [
  { value: '14', label: 'anos guiando' },
  { value: '+2.500', label: 'viajantes recebidos' },
  { value: '4.9', label: 'estrelas no Google' },
  { value: '12', label: 'guias nativos' },
];

export const features = [
  'Lagoas azuis',
  'Pôr do sol na duna',
  'Guias nativos',
  'Cultura maranhense',
  '4×4 · Quadriciclo · Caiaque',
  'Travessias completas',
  'Oásis preservados',
  'Café da roça',
  'Noite de céu estrelado',
];

export const about = {
  eyebrow: 'A história do Galego',
  title: 'Nascido entre as dunas, criado pelo vento.',
  body: [
    'O Galego cresceu em Santo Amaro do Maranhão, dentro do parque. Aprendeu a ler o vento antes de aprender a ler livro. A travessia que ele guia hoje é a mesma que fazia menino, atrás de jumento perdido.',
    'Em 2010, virou guia oficial. De lá pra cá já levou gente de 27 países diferentes — e nenhum deles voltou pra casa sem o pé queimado e a memória cheia.',
    'Aqui não tem aplicativo, não tem GPS, não tem roteiro de revista. Tem 12 guias da região, cada um nascido no meio do parque, e uma forma de mostrar os Lençóis que nenhuma agência de fora consegue copiar.',
  ],
};

export const whyUs = [
  {
    n: '01',
    title: 'Guias nativos',
    desc: 'Os 12 guias da equipe nasceram e cresceram dentro do parque. Conhecem o terreno como quintal de casa.',
  },
  {
    n: '02',
    title: '14 anos de estrada',
    desc: 'Desde 2010 levando viajante por aí. Já vimos cheia, seca, vento norte e dia de sol vertical.',
  },
  {
    n: '03',
    title: 'Roteiros próprios',
    desc: 'Lagoas que o turista comum não chega. A travessia é desenhada pra fugir da multidão da Lagoa Bonita.',
  },
  {
    n: '04',
    title: 'Cultura local',
    desc: 'Almoço na casa de dona Edite, café no terreiro do seu Raimundo. A viagem vira encontro.',
  },
  {
    n: '05',
    title: 'Equipamento próprio',
    desc: 'Frota 4×4 revisada toda semana, quadriciclos novos e caiaques inflados na hora do passeio.',
  },
];

export const modalities = [
  { key: '4x4', label: '4×4', desc: 'Travessia clássica em Toyota Bandeirante adaptada para a areia.' },
  { key: 'quadriciclo', label: 'Quadriciclo', desc: 'Pra quem quer pilotar o próprio caminho — orientado por guia.' },
  { key: 'caiaque', label: 'Caiaque', desc: 'Pelo rio Preguiças até o encontro com o mar, em Caburé.' },
  { key: 'acampamento', label: 'Acampamento', desc: 'Pernoite no oásis. Rede armada, fogueira e céu estrelado.' },
  { key: 'mini-trek', label: 'Mini trekking', desc: 'Versão curta para quem tem só 2 dias na região.' },
];

export const inclusions = {
  title: 'Tudo pensado pra você viver o momento.',
  items: [
    'Água mineral durante todo o passeio',
    'Sombreiro montado nas paradas das lagoas',
    'Cadeiras de praia e canga',
    '12 guias especializados, todos credenciados',
    'Café da manhã regional nos pernoites',
    'Almoço caseiro nas casas de comunidade',
    'Resgate 4×4 incluso (vento forte ou chuva)',
    'Seguro viagem para todos os participantes',
  ],
  notIncluded: [
    'Transporte rodoviário até Santo Amaro',
    'Bebidas alcoólicas',
    'Refeições fora do roteiro do dia',
    'Gorjetas e despesas pessoais',
  ],
  bring: [
    'Mochila pequena (até 25L)',
    'Garrafa d\'água reutilizável',
    'Protetor solar fator 50+',
    'Roupa leve, de secagem rápida',
    'Óculos de sol e chapéu',
    'Meia cano longo (para o quadriciclo)',
    'Repelente de insetos',
    'Sandália + tênis fechado',
  ],
};

export const travessias = [
  {
    name: 'Mini Trekking',
    duration: '2 dias / 1 noite',
    summary: 'A versão enxuta. Pra quem só tem fim de semana e não quer perder o pôr do sol na duna.',
    highlights: [
      'Travessia de balsa no Rio Preguiças',
      'Banho em 3 lagoas (Esperança, Andorinha, Gaivota)',
      'Pernoite em pousada simples no oásis Baixa Grande',
      'Pôr do sol na Lagoa da Gaivota',
    ],
    featured: false,
  },
  {
    name: 'Travessia Clássica',
    duration: '3 dias / 2 noites',
    summary: 'O roteiro mais pedido. Atravessa Santo Amaro até Atins, dormindo em dois oásis diferentes.',
    highlights: [
      '12 guias rodando a equipe (1 guia para cada 6 viajantes)',
      'Alimentação regional completa (5 refeições)',
      'Pernoites no oásis Queimada dos Britos e em Atins',
      'Banho em 8 lagoas diferentes ao longo do caminho',
    ],
    featured: true,
  },
  {
    name: 'Travessia Profunda',
    duration: '4 dias / 3 noites',
    summary: 'Pra quem quer ver o parque inteiro. Inclui a região do Caburé e a foz do Preguiças.',
    highlights: [
      'Tudo do roteiro clássico + 1 dia em Caburé',
      'Travessia de caiaque pelo Preguiças',
      '3 pernoites em pousadas dos oásis',
      'Noite de observação de estrelas com mapa do céu',
    ],
    featured: false,
  },
  {
    name: 'Imersão Cultural',
    duration: '5 dias / 4 noites',
    summary: 'A travessia mais lenta. Foco no encontro com as comunidades dentro e ao redor do parque.',
    highlights: [
      'Almoço na casa de moradores do Baixa Grande',
      'Roda de tambor de crioula em Santo Amaro',
      'Visita a apicultor da Queimada dos Britos',
      '4 pernoites em pousadas familiares',
    ],
    featured: false,
  },
];

export const gallery = [
  { src: 'https://images.unsplash.com/photo-1601224335112-b86c2226bd34?w=1200&q=80', alt: 'Lagoa azul entre as dunas dos Lençóis Maranhenses' },
  { src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80', alt: 'Dunas brancas ao entardecer' },
  { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80', alt: 'Vista aérea do parque' },
  { src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&q=80', alt: 'Vento moldando a areia' },
  { src: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&q=80', alt: 'Caminhada na trilha das lagoas' },
  { src: 'https://images.unsplash.com/photo-1455218873509-8097305ee378?w=1200&q=80', alt: 'Pôr do sol nas dunas' },
  { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80', alt: 'Noite de céu estrelado' },
  { src: 'https://images.unsplash.com/photo-1542367592-8849eb950fd8?w=1200&q=80', alt: 'Cardume na lagoa cristalina' },
  { src: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=1200&q=80', alt: 'Viajantes contemplando o parque' },
];

export const faq = [
  {
    q: 'Qual a melhor época para ir aos Lençóis?',
    a: 'De junho a setembro as lagoas estão cheias — é o cartão postal. Em outubro e novembro o nível baixa mas o passeio segue bonito e bem mais vazio. De janeiro a maio é época de chuva forte: a paisagem fica verde, mas algumas estradas dentro do parque ficam difíceis.',
  },
  {
    q: 'Preciso de preparo físico?',
    a: 'Para os passeios de 4×4 e quadriciclo, não. Já as travessias a pé exigem condicionamento moderado: a gente caminha entre 4 e 12 km por dia em areia, com calor. Se você anda 5 km no plano sem dificuldade, dá conta.',
  },
  {
    q: 'Onde começa a travessia?',
    a: 'A maioria dos roteiros começa em Santo Amaro do Maranhão. A gente busca você na pousada às 8h30. Saindo de Barreirinhas, combinamos o transfer separado.',
  },
  {
    q: 'O que está incluso no preço?',
    a: 'Guiamento de ponta a ponta, transporte 4×4 dentro do parque, alimentação do roteiro, pernoites em pousadas de oásis, e seguro viagem. Bebidas alcoólicas e transfer rodoviário até Santo Amaro ficam por sua conta.',
  },
  {
    q: 'Como faço para reservar?',
    a: 'Preenche o formulário aqui embaixo ou chama direto no WhatsApp. Trabalhamos com sinal de 30% (Pix ou cartão em até 2×) e o restante até 7 dias antes da viagem.',
  },
  {
    q: 'Posso cancelar?',
    a: 'Pode. Até 30 dias antes do passeio: devolvemos 50% do valor pago. Entre 15 e 29 dias: 30%. Menos de 15 dias: sem reembolso, mas a gente remarca por até 12 meses sem custo.',
  },
  {
    q: 'Tem passeio para criança e idoso?',
    a: 'Sim. Criança a partir de 6 anos vai bem no roteiro de 4×4. Idoso ativo também — temos guia que adapta o ritmo. Para travessias longas a pé, o ideal é a partir de 14 anos.',
  },
];

export const payments = ['Pix', 'Cartão (até 2×)', 'Boleto', 'Dinheiro'];
