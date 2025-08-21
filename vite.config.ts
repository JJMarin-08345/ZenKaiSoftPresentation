import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0', // Permite acceder desde la red
    port: 5173,      // O el puerto que quieras
  },
  resolve: {
    alias: {
      '@': '/src',
      '@public': '/public',
      '@home': '/src/home',
      '@proyects': '/src/proyects',
    },
  },
})
