import './App.css'

function App() {

  return (
    <>
      <div className="container bg-red-300 mx-auto p-4 my-10 text-red-900 border-red-600 border-2">
        <p>O texto do container</p>
      </div>
      <div className="container bg-green-700 md:bg-blue-500">
        <p>Olá</p>
      </div>
      <div className="container bg-purple-700 border-2 border-teal-700 m-4 border-box p-10">
        <p>Border box</p>
      </div>
      <div className="container bg-teal-700 border-2 border-purple-700 m-4 box-content p-10">
        <p>Box content</p>
      </div>
      {/* Container */}
      <div className="container">
        <span className='block bg-red-300'>Não são elementos de bloco</span>
        <span className='block bg-red-300'>Não são elementos de bloco</span>
        <div className="bg-blue-500 inline-block">Block</div>
        <div className="bg-blue-500 inline-block">Block</div>
        <div className="bg-green-900 hidden">Estou aparecendo</div>
      </div>
      {/* Desafio 02*/}
      <div className="container">
        <div className='bg-slate-600 inline-block'>Teste</div>
        <div className='bg-green-600 inline-block'>Teste</div>
        <div className='bg-violet-600 inline-block'>Teste</div>
      </div>
      {/* Utilizando Floats e Clear */}
      <div className='bg-gray-500 float-right'>Float Right</div>
      <div className='bg-gray-800 float-left'>Float Left</div>
      <div className="clearfix"></div>
      <div className='bg-gray-500 float-right'>Float Right</div>
      <div className='bg-gray-800 float-left'>Float Left</div>
      {/* Aplicando o overflow */}
      <div className="overflow-hidden h-16 m-6 bg-red-400">
        <p>Testando o overflow</p>
        <p>Testando o overflow</p>
        <p>Testando o overflow</p>
        <p>Testando o overflow</p>
        <p>Testando o overflow</p>
      </div>
      <div className="overflow-auto h-16 m-6 bg-blue-400">
        <p>Testando o overflow</p>
        <p>Testando o overflow</p>
        <p>Testando o overflow</p>
        <p>Testando o overflow</p>
        <p>Testando o overflow</p>
      </div>
      <div className="overflow-x-auto h-16 m-6 bg-green-400">
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
      {/* Posições e direções */}
      <div className="relative bg-pink-300">
        <p>Teste</p>
        <div className="absolute top-0 right-0 bg-pink-900">
          absolute
        </div>
      </div>
      {/* Desafio 03 */}
      <div className="container relative h-20 bg-amber-700 mx-auto my-4">
        <div className="absolute bottom-0 right-0 bg-amber-500">
          <p>Teste</p>
        </div>
      </div>
      {/* Visibilidade */}
      <div className="container bg-red-400 invisible">
        <p>Estou Oculto</p>
      </div>
      <div className="container bg-red-400 visible">
        <p>Estou Oculto</p>
      </div>

      {/* Z-Index */}
      <div className="container relative">
        <div className="bg-red-300 h-10 w-20 absolute z-10"><p>Frente</p></div>
        <div className="bg-green-300 h-10 w-20 absolute z-20"><p>Trás</p></div>
      </div>

      {/* Desafio 4 */}
      <div className="container relative mx-auto">
        <div className="bg-sky-600 h-20 w-20 z-30 absolute"><p>Frente</p></div>
        <div className="bg-sky-700 h-20 w-20 z-20 absolute ml-4 mt-4"><p>Frente</p></div>
        <div className="bg-sky-800 h-20 w-20 x-10 absolute ml-8 mt-8"><p>Frente</p></div>
      </div>
    </>
  )
}

export default App
