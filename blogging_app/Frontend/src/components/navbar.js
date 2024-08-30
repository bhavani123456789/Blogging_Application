import React from 'react'

function Navbar() {
  return (
    <div className="container">
            <div className="row">
                <div className="col-12">
                    

                    <nav className="site-navigation">
                        <div className="hamburger-menu d-lg-none">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <ul className="flex-lg flex-lg-row justify-content-lg-center align-content-lg-center">
                            <li className="current-menu-item"><a href="/home">Home</a></li>
                            <li><a href="#">Category</a></li>
                            
                            <li><a href="/blog">blog</a></li>
                            
                            <li><a href="/write">write</a></li>
                            <li><a href="/login">Get Started</a></li>
                            
                        </ul>

                        <div className="header-bar-social d-md-none">
                            <ul className="flex justify-content-center align-items-center">
                                <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                <li><a href="#"><i className="fa fa-behance"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>

                        <div className="header-bar-search d-md-none">
                            <form>
                                <input type="search" placeholder="Search"/>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
  )
}

export default Navbar
