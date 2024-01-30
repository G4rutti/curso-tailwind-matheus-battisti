import './App.css'

function App() {

  return (
    <>
      {/* 01 - Grid de colunas */}
      <div className="grid bg-red-300 grid-cols-4 p-8">
        <div className='bg-purple-400 m-5'>1</div>
        <div className='bg-purple-400 m-5'>2</div>
        <div className='bg-purple-400 m-5'>3</div>
        <div className="grid grid-cols-2">
          <div className='bg-green-400 m-5'>2</div>
          <div className='bg-green-400 m-5'>3</div>
        </div>
      </div>
      {/* 02 - Exercício 07 */}
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
      {/* 03 - Tamanho das colunas */}
      <div className="container grid grid-cols-6 m-2">
        <div className="col-span-1 bg-red-700">
          <ul>
            <li>Home</li>
            <li>Produtos</li>
            <li>contatos</li>
          </ul>
        </div>
        <div className="col-span-5 bg-rose-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero recusandae adipisci eius architecto deserunt illum tenetur vel, repellendus maxime enim optio voluptates! Quos nobis repudiandae dolorem quis commodi illo atque.
          Modi at ipsum repellat vel facere sed, eos eaque, tempora nihil cumque, earum optio inventore expedita ipsa dignissimos odio. Laboriosam maxime non molestiae recusandae reprehenderit quo et fugiat consectetur repellat.
          Quod, ullam adipisci. Unde explicabo libero atque iste iure, autem voluptatem repellat suscipit voluptates consequuntur repellendus quis reprehenderit, illum aliquid corporis alias. Quisquam a aliquid tempore vel quidem quos quis!
        </div>
      </div>
      {/* 04 - Desafio 08 */}
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
      {/* 05 - Grid Linear */}
      <div className="grid grid-rows-2 grid-flow-col">
        <div className='bg-green-400'>1</div>
        <div className='bg-green-600'>2</div>
        <div className='bg-green-400'>3</div>
        <div className='bg-green-600'>4</div>
        <div className='bg-green-400'>5</div>
        <div className='bg-green-600'>6</div>
        <div className='bg-green-400'>7</div>
        <div className='bg-green-600'>8</div>
      </div>
      {/* 06 - Controlar o espaçamento */}
      <div className="grid grid-cols-3 m-4 gap-x-5 gap-y-10">
        <div className="bg-purple-300">1</div>
        <div className="bg-purple-600">2</div>
        <div className="bg-purple-300">3</div>
        <div className="bg-purple-600">4</div>
        <div className="bg-purple-300">5</div>
        <div className="bg-purple-600">6</div>
        <div className="bg-purple-300">7</div>
        <div className="bg-purple-600">8</div>
        <div className="bg-purple-300">9</div>
      </div>
    </>
  )
}

export default App
