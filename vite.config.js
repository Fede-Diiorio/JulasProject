import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;700&display=swap');
          $primaryFont: "Work Sans", sans-serif;
          $primary: #E7F1EF;
          $darkPrimary: #1E4150;
          $secondary: #EEFAE6;
          $darkSecondary: #324e0c;
          $assistant: #096757;
          $background: #FDFBF9;
          $white: #ffffff;
          $black: #000000;
          $grey: #b1adad;
          $darkGrey: #3d3d3d;
          $delete: #ebc2c2;
          $darkDelete: #8b0a0a;
        `,
      },
    },
  },
});
