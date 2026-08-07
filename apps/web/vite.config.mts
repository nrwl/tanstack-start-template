import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import tailwindcss from '@tailwindcss/vite';
import viteReact from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    tailwindcss(),
    // tanstackStart bundles the TanStack Router plugin (route generation + HMR)
    tanstackStart({
      target: 'server',
    }),
    // React Refresh runtime - required by TanStack Start dev mode
    viteReact(),
  ],
});
