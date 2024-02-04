# Instalando Tailwind CSS pelo React.js:

1. `npm install -D tailwindcss postcss autoprefixer`
2. `npx tailwindcss init -p`
3. Crie seu template paths:
    ```
        /** @type {import('tailwindcss').Config} */
        export default {
        content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
            extend: {},
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
    ```
4. Adicione código do tailwindo no index.css:
```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```
5. Inicie seu build process:
`npm run dev`
