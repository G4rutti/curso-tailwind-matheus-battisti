import './index.css'

function App() {

  return (
    <>
      <h1 className='bg-green-500 text-red-800 hover:bg-red-800 hover:text-green-500'>Hello World!</h1>
      <button className='btn-blue'>Botão</button>
      <div className='w-4/5 md:w-3/5 lg:w-1/2 min-h-10 md:h-3/5 lg:h-1/2 m-4  bg-green-400'>
        <p className=''>Olá</p>
      </div>
      <input type="text" placeholder='Clica ni mim bebe' className='bg-sky-300 text-gray-500 focus:bg-sky-700 focus:text-gray-900 outline-none'/>
    </>
  )
}

export default App
