// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { imagetools } from 'vite-imagetools';

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), imagetools()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  plugins: [react(), imagetools()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    sourcemap:false,
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'UNRESOLVED_IMPORT') {
          console.error('Unresolved import:', warning.source);
        }
        warn(warning);
      },
    },
  },
})