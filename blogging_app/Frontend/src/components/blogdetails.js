import React from 'react'

function Blogdetails() {
  return (
    <div>
        <div class="container single-page blog-page">
        <div class="row">
            <div class="col-12">
      <div className="content-wrap">
                    <header className="entry-header">
                        <div className="posted-date">
                            January 30, 2018
                        </div>

                        <h2 className="entry-title">10 Tips to create a beautiful party</h2>

                        <div className="tags-links">
                            <a href="#">#winter</a>
                            <a href="#">#love</a>
                            <a href="#">#snow</a>
                            <a href="#">#january</a>
                        </div>
                    </header>

                    <figure className="featured-image">
                        <img src="images/blog-image.jpg" alt=""/>
                    </figure>

                    <div className="entry-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittis suscipit sem a consequat. Proin nec interdum sem. Quisque in porttitor magna, a imperdiet est. Donec accumsan justo nulla, sit amet varius urna laoreet vitae. Maecenas feugiat fringilla metus. Nullam semper ornare quam eu sagittis. Curabitur ornare sem eu dapibus rutrum. Sed lobortis eros ut sapien lobortis, euismod dignissim odio interdum. Integer finibus molestie tellus sit amet egestas. Aliquam ullamcorper magna in ipsum sollicitudin imperdiet consectetur vitae nunc. Maecenas vel erat et erat lobortis porttitor ac id diam. Cras in maximus lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>

                        <p>Pellentesque facilisis lorem sed orci rhoncus, non sagittis sem hendrerit. Nam rhoncus molestie felis, eget laoreet tortor sagittis ac. Pellentesque sapien nunc, vehicula ut tortor sed, gravida tristique magna. Praesent nec finibus est. Maecenas a purus auctor, varius ligula sed, ultricies lacus. Vestibulum erat eros, interdum ut finibus efficitur, efficitur sit amet sem. Proin sed imperdiet arcu, eget auctor turpis.</p>

                        <p>Nullam non nisi ut dolor pellentesque eleifend. Aliquam commodo vitae risus malesuada varius. Nulla ornare lacus eu elit sollicitudin varius. Nulla aliquet ornare massa id tempor. Sed luctus dui non turpis sodales, ac tristique risus consequat. Donec tincidunt mi a magna rhoncus dapibus. Integer ut lectus euismod, dignissim tortor sed, imperdiet nibh. Donec urna nisl, sodales tincidunt lorem sit amet, vestibulum commodo tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tempor ex sed iaculis vulputate. </p>
                    </div>

                    <blockquote className="blockquote-text">
                        <p>Nullam non nisi ut dolor pellentesque eleifend. Aliquam commodo vitae risus malesuada varius. Nulla ornare lacus eu elit sollicitudin varius. Nulla aliquet ornare massa id tempor. Sed luctus dui non turpis sodales, ac tristique risus consequat. Donec tincidunt mi a magna rhoncus dapibus. Integer ut lectus euismod</p>
                    </blockquote>

                    <div className="row">
                        <div className="col-12 col-md-6">
                            <figure className="blog-page-half-img">
                                <img src="images/blog-img-1.png" alt=""/>
                            </figure>
                        </div>

                        <div className="col-12 col-md-6">
                            <figure className="blog-page-half-img">
                                <img src="images/blog-img-2.png" alt=""/>
                            </figure>
                        </div>
                    </div>

                    <footer className="entry-footer flex flex-column flex-lg-row justify-content-between align-content-start align-lg-items-center">
                        <ul className="post-share flex align-items-center order-3 order-lg-1">
                            <label>Share</label>
                            <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        </ul>

                        <div className="comments-count order-1 order-lg-3">
                            <a href="#">2 Comments</a>
                        </div>
                    </footer>
                </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Blogdetails
