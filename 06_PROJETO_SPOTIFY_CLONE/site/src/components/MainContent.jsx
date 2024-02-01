import React from 'react'

const MainContent = () => {
  return (
    <main>
        <div className='flex flex-col justify-center text-center bg-spotify-mobile py-40 px-4 bg-195% bg-banner-mobile bg-purple-main text-green-main
        md:bg-spotify-theme md:bg-banner md:bg-175%'>
            <h1 className='text-5xl md:text-9xl mb-10 font-bold max-w-4xl mx-auto leading-none'>Escutar muda tudo</h1>
            <p className='text-md md:text-lg mb-10'>Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito</p>
            <a href="#" className='bg-green-main hover:bg-white text-purple-main text-sm rounded-full px-10 py-3 uppercase font-bold max-w-xl mx-auto tracking-widest
            transition duration-1000'>Obtenha o Spotify free</a>
        </div>
    </main>
  )
}

export default MainContent