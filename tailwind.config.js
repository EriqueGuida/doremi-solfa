/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1F563E',         // Verde-Floresta do Sofá (Navbar / Botões Principais)
          'primary-hover': '#16402E',
          highlight: '#B34229',       // Terracota da Tipografia (Preços / Badges / Destaques)
          'highlight-hover': '#96351F',
          accent: '#DFA034',          // Mostarda da Almofada (Acentos / Novidades)
          'accent-hover': '#C58B28',
          bg: '#FAF8F5',              // Fundo Principal (Off-White / Creme Suave)
          surface: '#FFFFFF',         // Superfície de Cards e Modais (Branco Puro)
          muted: '#F3EFEA',           // Fundo Areia Secundário
          border: '#E8E4DC',          // Borda Areia Suave
          dark: '#1C2521',            // Texto Principal (Carvão Escuro)
          textMuted: '#64746D',       // Texto Secundário (Cinza Médio Natural)
        }
      },
      fontFamily: {
        serif: ['"Marcellus"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
