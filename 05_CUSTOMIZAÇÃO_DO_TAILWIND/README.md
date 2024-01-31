# Módulo 05 - Customização com TailWind:

## Aula 01 - Entendendo a customização:
* Vamos adicionar as customizações no arquivo tailwind.config.js;
* Lá temos algumas seções;
* `theme`: estilos para o nosso projeto;
* `extend`: extensão das nossas classes do projeto;
* `plugins`: adicionar plugins de Tailwind externos;
* `prefix`: adiciona um prefixo as classe do Tailwind;

## Aula 02 - Trocando os valores default:
* A chave que iremos alterar é a theme;
* Aqui vamos inserir regras que são parecidas com as do tailwind, gereando o efeito de estender o framework;
* Se colocarmos regras com o mesmo nome, iremos gerar um override, ou seja, substituição;
```
theme: {
      colors: {
        blackPiano: "#010101",
      },
      extend: {},
  },
```

## Aula 03 - Criando Breakpoints:
* Na chave `screens` de theme, podemos customizar o breakpoint;
* Podemos adicionar novos, apenas criando nomenclaturas diferentes, como por exemplo: `tablet: 640px`;
* Ou também colocar breakpoints para max-width, que é o contrário do que o Tailwind nos dá;

## Aula 04 - Adicionando cores e estendendo:
* Na chave colors de theme, podemos adicionar novas cores, o que é muito normal para projetos com design mais avançados;
* O padrao é `nome da cor: 'hexadecimal'`;
* Assim, apos o build, teremos acesso a nova cor;
* Podemos também criar uma estrutura de objeto, para simular uma paleta de cores.
