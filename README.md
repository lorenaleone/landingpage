# Brisa Azul Viagens — Landing Page

Landing page fictícia de agência de turismo nos Lençóis Maranhenses.

🌐 **Acesse online:** [lorenaleone.github.io/landingpage](https://lorenaleone.github.io/template_landingpage/)

---

## Stack

Página 100% estática — **sem build, sem dependências, sem Node.js**.

| Tecnologia | Uso |
|---|---|
| HTML + CSS + JavaScript puro | Toda a página em um único `index.html` |
| [Tailwind CSS CDN](https://tailwindcss.com/docs/installation/play-cdn) | Estilização via Play CDN |
| [Google Fonts](https://fonts.google.com) | Fraunces (títulos) + Inter (texto) |
| [GitHub Pages](https://pages.github.com) | Hospedagem direta da branch `main` |

---

## Estrutura do projeto

```
landingpage/
│
├── index.html          # ← toda a página aqui
│
├── images/
│   ├── hero.jpg        # foto de fundo da capa
│   ├── about.jpg       # foto do fundador / equipe
│   └── galeria/
│       ├── 01.jpg      # Circuito Emendadas
│       ├── 02.jpg      # Circuito Américas
│       ├── 03.jpg      # Circuito Andorinhas
│       ├── 04.jpg      # Circuito Betânia
│       ├── 05.jpg      # Circuito Ponta Verde
│       ├── 06.jpg      # Circuito Rancharia
│       ├── 07.jpg      # Foto extra (opcional)
│       └── 08.jpg      # Foto extra (opcional)
│
└── README.md
```

---

## Como adicionar as fotos

> Upload direto pelo GitHub — sem precisar clonar o repositório.

1. Acesse **[github.com/lorenaleone/landingpage](https://github.com/lorenaleone/landingpage)**
2. Navegue até a pasta `images/` (ou `images/galeria/`)
3. Clique em **Add file → Upload files**
4. Suba os arquivos respeitando os nomes abaixo
5. Commit na `main` → a página atualiza em segundos

| Arquivo | Onde aparece | Tamanho ideal |
|---|---|---|
| `images/hero.jpg` | Foto de fundo da capa | 2000 × 1300 px |
| `images/about.jpg` | Foto do fundador / equipe | 900 × 1200 px |
| `images/galeria/01.jpg` | Galeria — Circuito Emendadas | 1200 × 900 px |
| `images/galeria/02.jpg` | Galeria — Circuito Américas | 1200 × 900 px |
| `images/galeria/03.jpg` | Galeria — Circuito Andorinhas | 1200 × 900 px |
| `images/galeria/04.jpg` | Galeria — Circuito Betânia | 1200 × 900 px |
| `images/galeria/05.jpg` | Galeria — Circuito Ponta Verde | 1200 × 900 px |
| `images/galeria/06.jpg` | Galeria — Circuito Rancharia | 1200 × 900 px |
| `images/galeria/07.jpg` | Galeria — foto extra (opcional) | 1200 × 900 px |
| `images/galeria/08.jpg` | Galeria — foto extra (opcional) | 1200 × 900 px |

> **Formato:** JPG ou JPEG · **Peso máximo:** 800 KB por foto

---

## Como editar o conteúdo

Tudo está no `index.html`. Para editar textos, circuitos, telefone etc.:

1. Abra `index.html` no GitHub (clique no arquivo → ícone de lápis ✏️)
2. Use **Ctrl+F** para localizar o trecho que quer alterar
3. Edite e faça commit — pronto

### Dados de contato (WhatsApp, e-mail, Instagram)

Procure por `5598991234567` no arquivo para encontrar o número do WhatsApp.  
Procure por `contato@brisaazul.tur.br` para encontrar o e-mail.

---

## Ativar o GitHub Pages (primeira vez)

1. Vá em **Settings → Pages** no repositório
2. Em **Source**, selecione **Deploy from a branch**
3. Branch: **main** · Pasta: **/ (root)**
4. Clique **Save**
5. Aguarde ~1 minuto e acesse `https://lorenaleone.github.io/landingpage/`

---

## Seções da página

| # | Seção | Descrição |
|---|---|---|
| 1 | Header | Nav fixa, transparente no topo, sólida ao rolar |
| 2 | Hero | Capa com foto de fundo, stats e CTAs |
| 3 | Faixa animada | Diferenciais em loop infinito |
| 4 | Sobre | História do fundador |
| 5 | Por que a Brisa Azul | 5 motivos com fundo escuro |
| 6 | Circuitos | 6 cards de circuito com highlights |
| 7 | Galeria | Carrossel coverflow 3D |
| 8 | FAQ | Perguntas frequentes em acordeão |
| 9 | Reserva | Formulário → abre WhatsApp com dados preenchidos |
| 10 | Rodapé | Links, contatos, copyright |

---

## Licença

Projeto fictício para fins de portfólio. Todos os textos, nomes e dados de contato são inventados.
