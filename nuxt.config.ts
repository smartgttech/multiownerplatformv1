import { defineNuxtConfig } from 'nuxt/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  compatibilityDate: '2025-01-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts'],

  googleFonts: {
    families: {
      // Pour le corps de texte
      Inter: [400, 500, 600, 700],
      Manrope: [400, 500, 600, 700],
      'DM Sans': [400, 500, 700],

      // Pour les titres
      'Playfair Display': [400, 600, 700],
      'Space Grotesk': [400, 500, 600, 700],
      Sora: [400, 600, 700]
    },
    display: 'swap',
    download: true, // Télécharge localement pour de meilleures performances
    inject: true,
    preload: true
  },
  
  css: ['./main.css'],
  
  vite: {
    plugins: [tsconfigPaths()]
  },
  
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {}
    }
  }
})