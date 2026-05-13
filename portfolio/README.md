# Deepak Portfolio

This is a React + Vite portfolio website. The design styles are in `src/styles/global.css`, and the page content is split into small components inside `src/components`.

## Run The Project

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://127.0.0.1:5173/
```

## Build The Project

```bash
npm run build
```

## Where To Edit

`src/components/Hero.jsx`

Edit the homepage headline, hero image, buttons, scrolling words, and hero footer metrics.

`src/components/Navbar.jsx`

Edit the navbar menu labels and page links.

`src/components/About.jsx`

Edit the about section text.

`src/components/Skills.jsx`

Edit the `skills` array to add or remove skill cards.

`src/components/Projects.jsx`

Edit the `projects` array to add or remove project cards.

`src/components/Contact.jsx`

Edit your email, LinkedIn link, and contact text.

`src/App.jsx`

Edit page routes such as `/about`, `/skills`, `/projects`, and `/contact`.

`src/styles/global.css`

Edit colors, spacing, layout, animation, and responsive design styles.

## Assets

Images are stored in:

```text
src/assets
```

The homepage image is imported in `src/components/Hero.jsx`:

```jsx
import heroImage from "../assets/Deepak.png.png";
```

To change the image, add a new image to `src/assets` and update that import path.

## Current Pages

- Home: `/`
- About: `/about`
- Skills: `/skills`
- Projects: `/projects`
- Contact: `/contact`
