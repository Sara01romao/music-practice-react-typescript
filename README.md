<h2 align="center"> 💻 Música - Acordes </h2> 
<img width="1381" height="628" alt="image" src="https://github.com/user-attachments/assets/840b5803-4672-476b-83d2-1b2272feed8b" />
<img width="1392" height="503" alt="image" src="https://github.com/user-attachments/assets/9671b0e2-6fb2-4256-accc-ce2436185da4" />


## Sobre o Projeto
Este projeto foi desenvolvido com o objetivo de facilitar a prática de violão, principalmente para quem deseja melhorar a troca de acordes, manter o tempo e evoluir na velocidade ao tocar.
A aplicação reúne ferramentas essenciais para o estudo, como um metrônomo para controle de ritmo, listas de acordes maiores e menores com diagramas visuais, e exercícios de progressão que ajudam no treino contínuo.



<a href="https://music-practice-tool.pages.dev/" target="_blank"><strong>Acessar »</strong></a>

## Etapas
- Home: visão geral do projeto e acesso às funcionalidades
- Acordes Maiores: lista de acordes maiores com diagramas
- Acordes Menores: lista de acordes menores com diagramas
- Exercícios: prática de progressões de acordes
- Metrônomo: controle de tempo para acompanhar os exercícios

<br>


## 💻 Tecnologias Usadas

 Front-end
```
React 
Typescript 
Vite 
Figma 
```
## 🚀 Deploy  
```
 Cloudflare Pages — hospedagem e deploy contínuo
```






# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
