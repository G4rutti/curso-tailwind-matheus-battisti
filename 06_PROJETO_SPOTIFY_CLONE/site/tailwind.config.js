/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        spacing: {
            '14': '3.5rem',
            '125px': '125px'
        },
        colors: {
            'hoverspt': "#18D760",
            'purple-main': "#2D46B9",
            'green-main': "#1ED760"
        },
        backgroundImage: theme => ({
            'spotify-theme': "url('/src/img/bursts.svg')",
            'spotify-mobile': "url('/src/img/bursts-mobile.svg')",
        }),
        backgroundSize: {
            '175%': "175%",
            "195%": "195%"
        },
        backgroundPosition:{
            'banner': '45% 4%',
            'banner-mobile': 'top 25% center'
        },
        fontSize: {
            '9xl': '9rem'
        }
      },
  },
  plugins: [],
  "tailwindCSS.includeLanguages": { 
  "plaintext": "javascript" ,
  "html": "HTML"},
  "tailwindCSS.emmetCompletions": true, // remove this line if you don't use Emmet
  "editor.inlineSuggest.enabled": true,
  "editor.quickSuggestions": {
      "strings": true
  },
  "css.validate": false,
  "editor.quickSuggestions": { "strings": "on" },
  "emmet.includeLanguages": {
      "javascript": "javascriptreact"
  }
}