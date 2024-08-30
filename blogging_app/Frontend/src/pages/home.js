import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Bloglisting from '../components/bloglisting'
import Swiper from '../components/swiper'

function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Swiper/>
      <Bloglisting/>
      <Footer/>
    </div>
  )
}

export default Home
