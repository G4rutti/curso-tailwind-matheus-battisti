# Módulo 04 - Grid com tailwind

## Aula 01 - Colunas com grid:
* Com o grid, podemos criar uma estrutura muito fácil de página;
* A classe `grid-cols-x` define o numero de colunas em um grid;
* Onde x é o numero de coulnas desejadas;
* Obs: a classe pai precisa conter a classe `grid`

## Exercício 7:
* Crie um container de grid;
* Este container deve ter 3 colunas;
* E ao total 9 itens;
* As colunas devem alternar entre duas cores;

```
    <div className="container grid grid-cols-3">
        <div className='grid grid-cols-3 bg-slate-500 p-6'> 
          <div className='bg-teal-500 m-4'>1</div>
          <div className='bg-teal-500 m-4'>2</div>
          <div className='bg-teal-500 m-4'>3</div>
        </div>
        <div className='grid grid-cols-3 bg-teal-500 p-6'>
        <div className='bg-fuchsia-500 m-4'>1</div>
          <div className='bg-fuchsia-500 m-4'>2</div>
          <div className='bg-fuchsia-500 m-4'>3</div>
        </div>
        <div className='grid grid-cols-3 bg-fuchsia-500 p-6'>
        <div className='bg-slate-500 m-4'>1</div>
          <div className='bg-slate-500 m-4'>2</div>
          <div className='bg-slate-500 m-4'>3</div>
        </div>
    </div>
```

## Aula 02 - Largura das colunas:
* Com a `col-span-x` podemos controlar o tamanho da coluna;
* Onde x é o tamanho, baseado no número de colunas definido na classe pai;
* Lembrando que a classe vai nos elemento filhos do container grid;


## Desafio 08:
* Crie uma estrutura grid semelhante a um site;
* Separado em duas colunas;
* Onde a primeira é uma barra de navefação lateral e a segunda é o conteudo;
* O grid deve ter 4 colunas, e a segunda representar 3;
* Crie também uma barra de navegação superior com o tamanho de todas as colunas.

```
    <div className="grid grid-cols-4">
        <div className="col-span-5 bg-slate-300">Menu de pesquisa</div>
        <div className="col-span-1 bg-slate-400">
            <ul>
            <li>Home</li>
            <li>Produtos</li>
            <li>contatos</li>
            </ul>
        </div>
        <div className="col-span-3 bg-slate-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque maiores omnis odit, porro quidem voluptatem? Est quibusdam in porro nam fugiat animi, quaerat officia voluptas perspiciatis eligendi, iste corporis iusto!
        </div>
    </div>
```

## Aula 03 - Grid Linear:
* Podemos também especificar a quantidade de rows que um grid possui;
* A classe para este fim é: `gris-rows-x`;

## Aula 04 - Controlando o espaçamento entre itens:
* Podemos controlar o espaçamento das colunas e linhas com gap;
* Inserimos a classe `gap-x` no container principal;
* É possível mudar o espaçamento pelo eixo x ou y;
