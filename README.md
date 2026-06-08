# Stile & Co. — Salone di Bellezza
- Sito per visualizzare https://stileco-web-design.lovable.app

Site institucional em italiano para o salão de beleza **Stile & Co.**, localizado no centro de Roma, Itália. O projeto apresenta uma identidade visual moderna e elegante, inspirada no universo da estética de alta costura italiana.

---

## Design

- **Paleta**: tons creme, blush e dourado (gold), com suporte a tema escuro
- **Tipografia**: *Cormorant Garamond* (títulos) + *Inter* (corpo)
- **Estilo**: minimalista sofisticado, com espaçamento generoso e hierarquia tipográfica clara

---

## Seções do Site

1. **Hero** — imagem de destaque com gradiente overlay, tagline e botões de ação
2. **Servizi (Serviços)** — 8 cards de serviços (taglio, colorazione, mèches, idratazione, extension, parrucche, manicure/pedicure, ciglia & sopracciglia)
3. **Chi Siamo** — apresentação do salão, equipe e filosofia
4. **Contatti** — informações de contato fictícias (endereço em Roma, telefone, e-mail, horários) + formulário de mensagens
5. **Footer** — copyright e branding

---

## Tecnologias

- [TanStack Start](https://tanstack.com/start) — framework full-stack React com SSR
- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) — estilização utilitária
- [shadcn/ui](https://ui.shadcn.com/) — componentes base (Sonner, etc.)
- [Lucide React](https://lucide.dev/) — ícones
- [Zod](https://zod.dev/) — validação de dados

---

## Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `bun dev` | Inicia o servidor de desenvolvimento |
| `bun run build` | Gera a build de produção |
| `bun run build:dev` | Build em modo desenvolvimento |
| `bun run preview` | Pré-visualiza a build localmente |
| `bun run lint` | Executa o ESLint |
| `bun run format` | Formata o código com Prettier |

---

## Estrutura de Pastas

```
src/
├── assets/              # Imagens (hero-salon.jpg, portrait.jpg)
├── components/
│   ├── SalonSite.tsx    # Componente principal (single-page)
│   └── ui/              # Componentes shadcn/ui
├── routes/
│   ├── index.tsx        # Página inicial ("/")
│   ├── __root.tsx       # Layout raiz
│   └── ...              # Outras rotas
├── styles.css           # Tokens de design e tema
└── router.tsx           # Configuração do roteador
```

---

## Dados de Contato (Fictícios)

> Usados apenas para demonstração no site.

- **Endereço**: Via dei Coronari 142, 00186 Roma, Italia
- **Telefone**: +39 06 6821 4475
- **E-mail**: info@stileandco.it
- **Horário**: Mar–Ven 09:00–20:00 | Sab 09:00–19:00 | Dom & Lun chiuso

---

## Licença

Projeto de demonstração. Todos os direitos reservados — Stile & Co.
