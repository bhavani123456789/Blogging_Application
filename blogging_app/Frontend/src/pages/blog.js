import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Bloglisting from '../components/bloglisting'
function Blog() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Bloglisting/>
      <Footer/>
    </div>
  )
}

export default Blog
