// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Fonts are served from this site rather than Google Fonts. The files come
// straight from the @fontsource-variable packages in node_modules, so neither
// the build nor a visitor's browser makes a third-party request.
//
// Only the Latin subset is shipped, one file per family. It covers English and
// Danish (æ ø å). A character outside it (ć, ł, ő …) falls back to the system
// font; add the matching `-latin-ext-` file as a second variant, with its
// unicodeRange, if that is ever needed.
const fontFile = (/** @type {string} */ pkg, /** @type {string} */ slug) =>
  `@fontsource-variable/${pkg}/files/${slug}-latin-wght-normal.woff2`;

export default defineConfig({
  site: 'https://lottebjerreknudsen.com',
  integrations: [sitemap()],
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Epilogue',
      cssVariable: '--font-display',
      fallbacks: ['system-ui', '-apple-system', 'sans-serif'],
      options: {
        variants: [
          { src: [fontFile('epilogue', 'epilogue')], weight: '100 900', style: 'normal' },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Work Sans',
      cssVariable: '--font-body',
      fallbacks: ['system-ui', '-apple-system', 'sans-serif'],
      options: {
        variants: [
          { src: [fontFile('work-sans', 'work-sans')], weight: '100 900', style: 'normal' },
        ],
      },
    },
  ],
});
