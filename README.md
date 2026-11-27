# FOSS-RD — Sitio Web Oficial (Pre-diseño)

Sitio web de la comunidad **FOSS-RD (Free Open Source Software RD)**, construido con **Astro** y **Tailwind CSS v4** para dar visibilidad a la comunidad en **Telegram** ([t.me/foss_rd](https://t.me/foss_rd)) y a sus proyectos en **GitHub** ([github.com/FOSSRD](https://github.com/FOSSRD)).

## Estructura principal

```text
├── public/
│   ├── CNAME              # Dominio personalizado (fossrd.com)
│   ├── favicon.svg
│   └── img/fossrd-logo.png
├── src/
│   ├── components/        # Componentes de la landing (Hero, Telegram, Pilares, Repos, Reglas, Blog, Footer)
│   ├── data/community.ts  # Enlaces, repositorios, reglas y datos centralizados
│   ├── layouts/           # Layout base y estilos globales
│   └── pages/
│       ├── index.astro    # Landing principal
│       └── blog.astro     # Pre-diseño de /blog
└── .github/workflows/
    └── deploy.yml         # Despliegue automático a GitHub Pages
```

## Comandos locales

```bash
npm install
npm run dev      # Servidor de desarrollo en http://localhost:4321
npm run check    # Verificación de tipos y plantillas Astro
npm run build    # Genera la salida estática en dist/
npm run preview  # Previsualiza el build de producción
```

## Cómo actualizar contenido

La mayoría de enlaces, repositorios, reglas y tarjetas de adelanto del blog se editan directamente en `src/data/community.ts`.
