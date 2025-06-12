import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Mon_PortFolio/', // 👈 très important !
  plugins: [react()],
});