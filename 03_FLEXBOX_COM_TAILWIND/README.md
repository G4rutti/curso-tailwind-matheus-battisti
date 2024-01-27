# Módulo 03 - Flexbox:

## Aula 01 - Direções do Flex:
* Podemos inserir o flexbox em um elemento com a classe `flex`;
* E controlar a direção dele com: `flex-row` e `flex-col`
* Onde `flex-row` é para linhas;
* E `flex-col` para colunas
* Lembrando que o container de elementos deve receber a classe flex

## Desafio 05:
* Crie um container com flex;
* Layout colunar;
* Seis itens com cores diferentes:
```
    <div className="container flex flex-col">
        <div className="bg-slate-400 text-slate-900">1</div>
        <div className="bg-slate-500 text-slate-800">2</div>
        <div className="bg-slate-600 text-slate-700">3</div>
        <div className="bg-slate-700 text-slate-600">4</div>
        <div className="bg-slate-800 text-slate-500">5</div>
        <div className="bg-slate-900 text-slate-400">6</div>
    </div>
```

## Aula 02 - Propriedade Wrap:
* O wrap é a propriedade que controla como os itens se adaptarão ao container;
* Com `flex-no-wrap` os itens tendem a ficar na mesma linha;
* Com `flex-wrap` os itens vão se encaixando em linhas abaixo, conforme o tamanho do container; 

## Aula 03 - Flex no elemento container:
* Esta é a regra flex para o elemento, onde podemos controlar seu tamanho máximo e mínimo;
* Podemos inserir valores como flex-1 para flex: 1 1 0%;
* Ou flex-none para flex: none;

## Aula 04 - Mudando a ordem dos elementos:
* Com order podemos controlar a ordem dos elementos;
* Inserimos a classe `order-x`;
* Onde x é igual ao valor da prorpiedade order;
* Exemplo: `order-1 = order:1`

## Desafio 06:
* Crie um container com flex;
* O container deve inverter a ordem depois da resolução lg;
```
    <div className="container flex flex-wrap bg-violet-300">
        <div className="bg-violet-600 p-6 m-2 lg:order-last">1</div>
        <div className="bg-violet-700 p-6 m-2 lg:order-5">2</div>
        <div className="bg-violet-800 p-6 m-2 lg:order-4">3</div>
        <div className="bg-violet-600 p-6 m-2 lg:order-3">4</div>
        <div className="bg-violet-700 p-6 m-2 lg:order-2">5</div>
        <div className="bg-violet-800 p-6 m-2 lg:order-first">6</div>
    </div>
```