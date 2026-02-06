import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { VitePWA } from 'vite-plugin-pwa'
import { version } from './package.json'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    VitePWA({
      injectRegister: 'script',
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'bg.png'],
      manifest: {
        name: '翻翻看',
        short_name: 'MemoryGame',
        description: `以水果为主题的经典记忆配对游戏 (v${version})`,
        theme_color: '#1a1a2e',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true
      }
    })
  ],
  define: {
    __APP_VERSION__: JSON.stringify(version)
  }
})
