import React from 'react'
import Search from './components/Search'
import Navbar from './components/Navbar'
import Header from './components/Header'
import FooterCarousel from './components/FooterCarousel'

const hello = () => {
  return (
    <div>
      <Header/>
      
      <Navbar />
      <main className="   ">
        <Search />
      </main>
      <FooterCarousel/>
      </div>      
  )
}

export default hello