# Módulo 02 - Construção de Layout:

## Aula 01 - Criando Containers:
* Um elemento que possui uma determinada largura, e que serve para incluir elementos dentro;
* O container com as classes de responsividade (sm, md, lg, xl), pode setar uma `max-width` no elemento;
* Podemos aplicar com a classe container.

## Exercício 01:
* Crie um container com cor de background verde:
* Quando atingir md, deve ficar azul:
```
<div className="container bg-green-700 md:bg-blue-500 mx-auto">
    <p>Olá</p>
</div>
```

## Aula 02 - Entendendo o Box sizing:
* Com as classes `border-box` e `border-content`, podemos declarar como o elemento calcula o seu tamanho total;
* Com `border-box` teremos uma largura total somada com padding e borders;
* Com `box-content` teremos uma largura respeitando a medida e com padding e border passando a largura determinada;

## Aula 03 - Controlando o display:
* Colocando classes com valores da propriedade `display`, como `block`, podemos controlar este comportamento do elemento;
* Então um elemento com classe `inline-block` se comporta igual a um elemento com estilo de `display: inline-block`;
* As outras propriedades seguem a mesma lógica;

## Exercício 02:
* Crie um container com três divs no HTML:
* Deixe as divs internar inline utilizando display:
* Todas devem ter backgorunds diferentes:
```
    <div className="container">
        <div className='bg-slate-600 inline-block'>Teste</div>
        <div className='bg-green-600 inline-block'>Teste</div>
        <div className='bg-violet-600 inline-block'>Teste</div>
    </div>
```

## Aula 04 - Utilizando Floats e Clear:
* Podemos controlar a propriedade `float` do elemento com classes `float-*`;
* Onde * é o tipo de float que desejamos, por exemplo: `rigth ou left`;
* O `clear` segue o mesmo padrão, as classes tem o início de `clear-*`;
* Onde * pode ser `both`, por exemplo;
* Obs: após o grid e flexbox, o float vem sendo pouco utilizado nos layouts.

## Aula 05 - Aplicando o overflow:
* O overflow é como controlamos quando o conteúdo de um elemento é muito grande para o mesmo;
* Podemos criar ou eliminar o scroll, por exemplo;
* Inserimos a classe `overflow-*`, como o * sendo none ou auto;
* Podemos controlar os eixos também com: `overflow-y-*`

## Aula 06 - Posições e direções:
* Podemos controlar as posições dos elementos por classes também;
* Neste caso o próprio nome da classe já é o da posição;
* Exemplos: `static, absolute, relative e etc`;
* Estes valores seriam relativos a: `position: absolute`;
* As direções também podem ser adicionadas via classe, exemplo: `top-2`;
* OBS: No Tailwind os números sempre são transferidos para rem, podemos converter para pixels com: `1rem = 16px`

## Exercício 03:
* Crie um container com uma altura determinada:
* Posicione a div dentro deste container no canto inferior direito:
```
    <div className="container relative h-20 bg-amber-700 mx-auto my-4">
        <div className="absolute bottom-0 right-0 bg-amber-500">
          <p>Teste</p>
        </div>
    </div>
```

## Aula 07 - Visibilidade:
* Podemos alterar a propriedade `visibility` com duas classes;
* `visible` = visibility: visible;
* `invisible` = visibility: hidden;
* Utilizamos para exibir ou esconder elementos;
* OBS: Porém, é diferente do display: none, pois mesmo invisivel, está sendo carregado ainda.

## Aula 08 - Z-Index:
* Podemos controlar o `z-index` pelo Tailwind também;
* Esta propriedade controla a sobreposição de elementos na página;
* O valor a ser colocado na classe é `z-*`;
* Onde * é o número de indexação, como 10, 20 ou 30.

## Exercício 04:
* Crie 3 elementos:
* Cada um deve sobrepor o outro no HTML, por meio do z-index:
* Inclua cores diferentes
```
    <div className="container relative mx-auto">
        <div className="bg-sky-600 h-20 w-20 z-30 absolute"><p>Frente</p></div>
        <div className="bg-sky-700 h-20 w-20 z-20 absolute ml-4 mt-4"><p>Frente</p></div>
        <div className="bg-sky-800 h-20 w-20 x-10 absolute ml-8 mt-8"><p>Frente</p></div>
      </div>
```