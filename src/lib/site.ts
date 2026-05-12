export const site = {
  name: 'Brisa Azul Viagens',
  shortName: 'Brisa Azul',
  tagline: 'Circuitos exclusivos nos Lençóis Maranhenses saindo de Santo Amaro',
  url: 'https://brisaazulviagens.com.br',
  whatsapp: '5598991234567',
  whatsappDisplay: '(98) 99123-4567',
  email: 'contato@brisaazulviagens.com.br',
  instagram: 'brisaazul.viagens',
  address: {
    street: 'Rua da Beira Rio, 142',
    city: 'Santo Amaro do Maranhão',
    state: 'MA',
    zip: '65195-000',
  },
  nav: [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Circuitos', href: '#circuitos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Dúvidas', href: '#faq' },
    { label: 'Reservar', href: '#reservar' },
  ],
};

export const whatsappLink = (msg = 'Olá! Vim pelo site e gostaria de saber mais sobre os circuitos da Brisa Azul.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
