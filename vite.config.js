import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap')
          $primaryFont: "Fredoka", sans-serif;
          $primary: #E7F1EF;
          $darkPrimary: #1E4150;
          $secondary: #EEFAE6;
          $darkSecondary: #688145;
          $assistant: #096757;
          $white: #ffffff;
          $black: #000000;
          $grey: #b1adad;
          $darkGrey: #3d3d3d;
          $delete: #d61d16;
          $darkDelete: #8a130f;
        `,
      },
    },
  },
});
