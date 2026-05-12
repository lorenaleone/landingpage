# Brisa Azul Viagens — Landing Page

Landing page fictícia de agência de turismo nos Lençóis Maranhenses, desenvolvida como projeto de portfólio.

🌐 **Acesse online:** [lorenaleone.github.io/landingpage](https://lorenaleone.github.io/landingpage/)

---

## Stack

| Tecnologia | Uso |
|---|---|
| [Next.js 14](https://nextjs.org) | Framework React (App Router) |
| [TypeScript](https://www.typescriptlang.org) | Tipagem estática |
| [Tailwind CSS](https://tailwindcss.com) | Estilização |
| [GitHub Pages](https://pages.github.com) | Hospedagem (export estático) |
| [GitHub Actions](https://github.com/features/actions) | Deploy automático a cada push |

---

## Estrutura do projeto

```
landingpage/
│
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD → GitHub Pages (automático)
│
├── public/
│   └── images/
│       ├── README.md           # ← guia de upload de fotos
│       ├── hero.jpg            # foto de fundo da capa
│       ├── about.jpg           # foto do fundador / equipe
│       └── galeria/
│           ├── 01.jpg          # Circuito Emendadas
│           ├── 02.jpg          # Circuito Américas
│           ├── 03.jpg          # Circuito Andorinhas
│           ├── 04.jpg          # Circuito Betânia
│           ├── 05.jpg          # Circuito Ponta Verde
│           ├── 06.jpg          # Circuito Rancharia
│           ├── 07.jpg          # Foto extra (opcional)
│           └── 08.jpg          # Foto extra (opcional)
│
├── src/
│   ├── app/
│   │   ├── layout.tsx          # metadata, fontes, SEO global
│   │   ├── page.tsx            # home — monta todos os blocos
│   │   ├── globals.css         # design tokens e classes utilitárias
│   │   ├── robots.ts           # robots.txt gerado pelo Next.js
│   │   └── sitemap.ts          # sitemap.xml gerado pelo Next.js
│   │
│   ├── components/
│   │   ├── Header.tsx          # nav fixa, transparente no topo, sólida ao rolar
│   │   ├── Hero.tsx            # capa com foto de fundo, stats e CTAs
│   │   ├── Marquee.tsx         # faixa animada de diferenciais
│   │   ├── About.tsx           # história do fundador
│   │   ├── WhyUs.tsx           # 5 motivos (fundo escuro)
│   │   ├── Circuitos.tsx       # 6 cards de circuito com highlights
│   │   ├── Gallery.tsx         # carrossel coverflow 3D (sem biblioteca)
│   │   ├── FAQ.tsx             # perguntas frequentes em acordeão
│   │   ├── Booking.tsx         # formulário → abre WhatsApp com dados preenchidos
│   │   ├── Footer.tsx          # links, contatos, copyright
│   │   ├── FloatingWhatsApp.tsx# botão flutuante WhatsApp
│   │   ├── Logo.tsx            # logo SVG inline (palmeira + onda)
│   │   └── JsonLd.tsx          # structured data (schema.org)
│   │
│   └── lib/
│       ├── content.ts          # ← EDITE AQUI: todos os textos da página
│       ├── site.ts             # ← EDITE AQUI: nome, telefone, e-mail, redes
│       └── img.ts              # helper de caminhos de imagem
│
├── tailwind.config.ts          # paleta de cores e tipografia customizada
├── next.config.mjs             # export estático + basePath GitHub Pages
├── tsconfig.json
├── package.json
└── README.md                   # este arquivo
```

---

## Como editar o conteúdo

Todo o texto da página está centralizado em dois arquivos — **não precisa tocar nos componentes**.

### Textos, circuitos e FAQ → `src/lib/content.ts`

```ts
// Hero
export const hero = { title: '...', sub: '...' }

// 6 circuitos
export const circuitos = [{ name: 'Circuito Emendadas', ... }]

// Perguntas frequentes
export const faq = [{ q: '...', a: '...' }]
```

### Nome, telefone, e-mail, Instagram → `src/lib/site.ts`

```ts
export const site = {
  name: 'Brisa Azul Viagens',
  whatsapp: '5598991234567',   // sem + nem espaço
  email: 'contato@...',
  instagram: 'brisaazul.viagens',
  address: { ... },
}
```

---

## Como adicionar as fotos

> Faça o upload direto pelo GitHub — sem precisar clonar o repositório.

1. Acesse **[github.com/lorenaleone/landingpage](https://github.com/lorenaleone/landingpage)**
2. Navegue até `public/images/`
3. Clique em **Add file → Upload files**
4. Suba os arquivos respeitando os nomes da tabela abaixo
5. Commit na `main` → deploy automático em ~2 min

| Caminho no repo | Onde aparece na página | Tamanho ideal |
|---|---|---|
| `public/images/hero.jpg` | Foto de fundo da capa | 2000 × 1300 px |
| `public/images/about.jpg` | Foto do fundador / equipe | 900 × 1200 px |
| `public/images/galeria/01.jpg` | Galeria — Circuito Emendadas | 1200 × 900 px |
| `public/images/galeria/02.jpg` | Galeria — Circuito Américas | 1200 × 900 px |
| `public/images/galeria/03.jpg` | Galeria — Circuito Andorinhas | 1200 × 900 px |
| `public/images/galeria/04.jpg` | Galeria — Circuito Betânia | 1200 × 900 px |
| `public/images/galeria/05.jpg` | Galeria — Circuito Ponta Verde | 1200 × 900 px |
| `public/images/galeria/06.jpg` | Galeria — Circuito Rancharia | 1200 × 900 px |
| `public/images/galeria/07.jpg` | Galeria — foto extra (opcional) | 1200 × 900 px |
| `public/images/galeria/08.jpg` | Galeria — foto extra (opcional) | 1200 × 900 px |

> **Formato:** JPG ou JPEG · **Peso máximo:** 800 KB por foto

---

## Rodando localmente

```bash
# 1. Clone
git clone https://github.com/lorenaleone/landingpage.git
cd landingpage

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
# → http://localhost:3000
```

> No dev local o `basePath` é ignorado, então as imagens aparecem
> em `localhost:3000/images/hero.jpg` (sem o `/landingpage`).

---

## Deploy

O deploy é **automático**: qualquer push na branch `main` dispara o
workflow `.github/workflows/deploy.yml`, que:

1. Faz o build estático (`npm run build` → pasta `out/`)
2. Publica na branch `gh-pages` via GitHub Actions

Para ativar pela primeira vez:
1. Vá em **Settings → Pages** no repositório
2. Em **Source**, selecione **GitHub Actions**
3. Salve — pronto

---

## Seções da página

| # | Seção | Componente |
|---|---|---|
| 1 | Header fixo com nav | `Header.tsx` |
| 2 | Hero com foto e stats | `Hero.tsx` |
| 3 | Faixa animada de diferenciais | `Marquee.tsx` |
| 4 | Sobre / história do fundador | `About.tsx` |
| 5 | Por que a Brisa Azul (5 motivos) | `WhyUs.tsx` |
| 6 | 6 Circuitos com detalhes | `Circuitos.tsx` |
| 7 | Galeria coverflow | `Gallery.tsx` |
| 8 | Perguntas frequentes | `FAQ.tsx` |
| 9 | Formulário → WhatsApp | `Booking.tsx` |
| 10 | Rodapé | `Footer.tsx` |

---

## Licença

Projeto fictício para fins de portfólio. Todos os textos, nomes e dados de contato são inventados.
