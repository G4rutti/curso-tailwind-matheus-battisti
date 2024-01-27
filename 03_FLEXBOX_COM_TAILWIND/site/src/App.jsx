import './App.css'

function App() {
  return (
    <>
      {/* 01 - Flex Direction row | row-reverse | col | col-reverse */}
      <div className="container flex flex-row bg-red-300">
        <div className="bg-red-600 p-6 m-2">1</div>
        <div className="bg-red-700 p-6 m-2">2</div>
        <div className="bg-red-800 p-6 m-2">3</div>
      </div>
      <div className="container flex flex-col bg-violet-500">
        <div className="bg-violet-600 p-6 m-2">1</div>
        <div className="bg-violet-700 p-6 m-2">1</div>
        <div className="bg-violet-800 p-6 m-2">3</div>
      </div>
      {/* 02 - Desafio 05 */}
      <div className="container flex flex-col">
        <div className="bg-slate-400 text-slate-900">1</div>
        <div className="bg-slate-500 text-slate-800">2</div>
        <div className="bg-slate-600 text-slate-700">3</div>
        <div className="bg-slate-700 text-slate-600">4</div>
        <div className="bg-slate-800 text-slate-500">5</div>
        <div className="bg-slate-900 text-slate-400">6</div>
      </div>
      {/* 03 - Flex wrap */}
      <div className="container flex flex-wrap bg-red-300">
        <div className="bg-red-600 p-6 m-2">1</div>
        <div className="bg-red-700 p-6 m-2">2</div>
        <div className="bg-red-800 p-6 m-2">3</div>
        <div className="bg-red-600 p-6 m-2">4</div>
        <div className="bg-red-700 p-6 m-2">5</div>
        <div className="bg-red-800 p-6 m-2">6</div>
      </div>
      <div className="container flex flex-no-wrap bg-violet-300">
        <div className="bg-violet-600 p-6 m-2">1</div>
        <div className="bg-violet-700 p-6 m-2">2</div>
        <div className="bg-violet-800 p-6 m-2">3</div>
        <div className="bg-violet-600 p-6 m-2">4</div>
        <div className="bg-violet-700 p-6 m-2">5</div>
        <div className="bg-violet-800 p-6 m-2">6</div>
      </div>
      {/* 04 - Flex no elemento container */}
      <div className="flex container bg-green-400 p-8">
        <div className="flex-1 bg-green-800">
          1
        </div>
        <div className="flex-1 bg-green-700">
          2
        </div>
        <div className="flex-none bg-green-600">
          3
        </div>
      </div>
      {/* 05 - Flex Order */}
      <div className="container flex flex-wrap bg-amber-300">
        <div className="bg-amber-600 p-6 m-2 order-last">1</div>
        <div className="bg-amber-700 p-6 m-2 order-3">2</div>
        <div className="bg-amber-800 p-6 m-2 order-4">3</div>
        <div className="bg-amber-600 p-6 m-2 order-2">4</div>
        <div className="bg-amber-700 p-6 m-2 order-5">5</div>
        <div className="bg-amber-800 p-6 m-2 order-first">6</div>
      </div>
      {/* 06 - Desafio 06 */}
      <div className="container flex flex-wrap bg-violet-300">
        <div className="bg-violet-600 p-6 m-2 lg:order-last">1</div>
        <div className="bg-violet-700 p-6 m-2 lg:order-5">2</div>
        <div className="bg-violet-800 p-6 m-2 lg:order-4">3</div>
        <div className="bg-violet-600 p-6 m-2 lg:order-3">4</div>
        <div className="bg-violet-700 p-6 m-2 lg:order-2">5</div>
        <div className="bg-violet-800 p-6 m-2 lg:order-first">6</div>
      </div>
    </>
  )
}

export default App
