/**
 * Resolve o caminho de uma imagem local considerando o basePath
 * do GitHub Pages (/landingpage). Use sempre que referenciar
 * imagens da pasta /public.
 */
const BASE = '/landingpage';

export const img = (path: string) => `${BASE}${path}`;

// Atalhos prontos para cada imagem do projeto
export const images = {
  hero:  img('/images/hero.jpg'),
  about: img('/images/about.jpg'),
  galeria: (n: number) => img(`/images/galeria/${String(n).padStart(2, '0')}.jpg`),
};
