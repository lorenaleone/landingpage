export const site = {
  name: 'Galego Trekking',
  tagline: 'Aventura real, nativa e autêntica nos Lençóis Maranhenses',
  url: 'https://galegotrekking.com.br',
  whatsapp: '5598988588396',
  whatsappDisplay: '(98) 98858-8396',
  email: 'contato@galegotrekking.com.br',
  instagram: 'agencia_galegotrekking',
  address: {
    street: 'Rua Nova Brasília, s/n',
    city: 'Santo Amaro do Maranhão',
    state: 'MA',
    zip: '65195-000',
  },
  nav: [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Travessias', href: '#travessias' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Dúvidas', href: '#faq' },
    { label: 'Contato', href: '#reservar' },
  ],
};

export const whatsappLink = (msg = 'Olá Galego! Vim pelo site e queria saber sobre as travessias.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
