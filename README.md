# Stile & Co. — Salone di Bellezza

Sito vetrina in italiano per il salone di bellezza **Stile & Co.**, situato nel cuore di Roma. Il progetto presenta un'identità visiva moderna ed elegante, ispirata all'universo dell'estetica di alta moda italiana.

Anteprima online: https://stileco-web-design.lovable.app

---

## Design

- **Palette**: tonalità crema, blush e oro, con supporto al tema scuro
- **Tipografia**: *Cormorant Garamond* (titoli) + *Inter* (corpo del testo)
- **Stile**: minimalismo sofisticato, con spaziature ampie e una gerarchia tipografica chiara

---

## Sezioni del Sito

1. **Hero** — immagine d'apertura con overlay sfumato, tagline e pulsanti di azione
2. **Servizi** — 8 card di servizi (taglio, colorazione, mèches, idratazione, extension, parrucche, manicure/pedicure, ciglia & sopracciglia)
3. **Chi Siamo** — presentazione del salone, del team e della filosofia
4. **Contatti** — informazioni di contatto fittizie (indirizzo a Roma, telefono, e-mail, orari) e modulo messaggi
5. **Footer** — copyright e branding

---

## Tecnologie

- [TanStack Start](https://tanstack.com/start) — framework full-stack React con SSR
- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) — stilizzazione utility-first
- [shadcn/ui](https://ui.shadcn.com/) — componenti di base (Sonner, ecc.)
- [Lucide React](https://lucide.dev/) — icone
- [Zod](https://zod.dev/) — validazione dei dati

---

## Script Disponibili

| Comando | Descrizione |
|---------|-------------|
| `bun dev` | Avvia il server di sviluppo |
| `bun run build` | Genera la build di produzione |
| `bun run build:dev` | Build in modalità sviluppo |
| `bun run preview` | Anteprima locale della build |
| `bun run lint` | Esegue ESLint |
| `bun run format` | Formatta il codice con Prettier |

---

## Struttura delle Cartelle

```
src/
├── assets/              # Immagini (hero-salon.jpg, portrait.jpg)
├── components/
│   ├── SalonSite.tsx    # Componente principale (single-page)
│   └── ui/              # Componenti shadcn/ui
├── routes/
│   ├── index.tsx        # Pagina iniziale ("/")
│   ├── __root.tsx       # Layout radice
│   └── ...              # Altre rotte
├── styles.css           # Token di design e tema
└── router.tsx           # Configurazione del router
```

---

## Dati di Contatto (Fittizi)

> Utilizzati esclusivamente a scopo dimostrativo all'interno del sito.

- **Indirizzo**: Via dei Coronari 142, 00186 Roma, Italia
- **Telefono**: +39 06 6821 4475
- **E-mail**: info@stileandco.it
- **Orari**: Mar–Ven 09:00–20:00 | Sab 09:00–19:00 | Dom & Lun chiuso

---

## Licenza

Progetto dimostrativo. Tutti i diritti riservati — Stile & Co.
