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