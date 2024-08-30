import React from 'react'

function Header() {
  return (
    <div className="top-header-bar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 flex align-items-center">
                        <div className="header-bar-text d-none d-lg-block">
                            <p>Hello world, My name is Blanca</p>
                        </div>

                        <div className="header-bar-email d-none d-lg-block">
                            <a href="#">Contactme@email.com</a>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 flex justify-content-between justify-content-lg-end align-items-center">
                        <div className="header-bar-social d-none d-md-block">
                            <ul className="flex align-items-center">
                                <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                <li><a href="#"><i className="fa fa-behance"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>

                        <div className="header-bar-search d-none d-md-block">
                            <form>
                                <input type="search" placeholder="Search"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-branding flex flex-column align-items-center">
                        <h1 className="site-title"><a href="index.html" rel="home">Blanca</a></h1>
                        <p className="site-description">Personal Blog</p>
                    </div>
        </div>
  )
}

export default Header
