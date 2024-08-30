import React from 'react'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Blogdetails from '../components/blogdetails'
import Comments from '../components/comments'
import Footer from '../components/footer'
function BlogDetail() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Blogdetails/>
      <Comments/>
      <Footer/>
    </div>
  )
}

export default BlogDetail
