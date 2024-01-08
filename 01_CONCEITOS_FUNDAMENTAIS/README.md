# Módulo 01 - Conceitos fundamentais:

## Aula 01 - Tudo é classe:

* Estilizamos nosso projeto todo por meio de classes;
* Temos classes desde cor de fonte até pseudo seletores: `hover`;
* Podemos adicionar classe para determinados break points: `responsivo`;
* Podemos também criar as nossas classes com base em classes;
* Obs: veremos mais detalhadamente cada parte do framework durante o curso, porém alguns exemplos apresentam classes antes de conhecermos elas a fundo.

## Aula 02 - Utility First:

* A premissa do Tailwind é construir componentes complexos com um conjunto de utilitários;
* Ou seja, em vez de pegar um componente pronto ou codar muitas linhas de CSS, utilizamos um conjunto de classes;
* E desta maneira podemos criar diversas variações de componentes, de forma simples;
* Ou componentes únicos para o projeto.

## Aula 04 - Mobile First:
* Todas as classes podem ser aplicadas a um determinado breakpoint;
* Os que vem com o framework são: `sm`, `md`, `lg` e `xl`; 
* Lembrando que é mobile first, ou seja, as classes são aplicadas para resoluções acima destes breakpoints;
* Então, não utilizamos nenhum breakpoint para atingir o mobile.

## Aula 05 - Pseudo classes:
* Podemos atingir as pseudo classes com Tailwind também;
* Um exemplo seria se o hover, quando passamos o ponteiro do mouse em cima de um elemento;
* Desta maneira, basta adicionar: `hover:classe`;
* E então ela só será executada quando preencher os requisitos.

## Aula 06 - Componentes:
* Em tailwind, somos encorajados a não utilizar componentes prontos;
* Primeiramentes desenvolvemos o que precisamos, e depois podemos transformar em um componente, via `apply`;
* Essa abordagem é interessante, pois nem sempre tudo é definido no css, talvez precisamos de uma estrutura html diferenciada.

### Código no index.css:
```
@layer components{
    .btn-blue{
        @apply bg-sky-600  text-white font-bold py-2 px-4 rounded
    }
    .btn-blue:hover{
        @apply hover:bg-sky-800
    }
}
```
**Terá que fazer o rebuild, com o `npx tailwindcss init -p`**