import React from 'react'

export default function Comments() {
  return (
    <div>
        <div class="container single-page blog-page">
        <div class="row">
            <div class="col-12">
      <div class="content-area">
                    <div class="post-comments">
                        <h3 class="comments-title">Comments</h3>

                        <ol class="comment-list">
                            <li class="comment">
                                <div class="comment-body flex justify-content-between">
                                    <figure class="comment-author-avatar">
                                        <img src="images/user-1.jpg" alt="user"/>
                                    </figure>

                                    <div class="comment-wrap">
                                        <div class="comment-author flex flex-wrap align-items-center">
                                            <span class="fn">
                                                <a href="#">Maria Williams</a>
                                            </span>

                                            <span class="comment-meta">
                                                <a href="#">Jan 29, 2018</a>
                                            </span>

                                            <div class="reply">
                                                <a href="#">Reply</a>
                                            </div>
                                        </div>

                                        <p>Consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Su spendisse sit amet laoreet neque. Fusce sagittis suscipit sem a consequat. Proin nec interdum sem. Quisque in porttitor magna, a imperdiet est. Donec accumsan justo nulla, sit amet varius urna laoreet vitae. Maecenas feugiat fringilla metus. </p>

                                    </div>
                                </div>
                            </li>

                            <li class="comment">
                                <div class="comment-body flex justify-content-between">
                                    <figure class="comment-author-avatar">
                                        <img src="images/user-2.jpg" alt="user"/>
                                    </figure>

                                    <div class="comment-wrap">
                                        <div class="comment-author flex flex-wrap align-items-center">
                                            <span class="fn">
                                                <a href="#">Lisa Moore</a>
                                            </span>

                                            <span class="comment-meta">
                                                <a href="#">Jan 29, 2018</a>
                                            </span>

                                            <div class="reply">
                                                <a href="#">Reply</a>
                                            </div>
                                        </div>

                                        <p>Consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Su spendisse sit amet laoreet neque. Fusce sagittis suscipit sem a consequat. Proin nec interdum sem. Quisque in porttitor magna, a imperdiet est. Donec accumsan justo nulla, sit amet varius urna laoreet vitae. Maecenas feugiat fringilla metus. </p>

                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>

                    <div class="comments-form">
                        <div class="comment-respond">
                            <h3 class="comment-reply-title">Leave a reply</h3>

                            <form class="comment-form">
                                <input type="text" placeholder="Name"/>
                                <input type="email" placeholder="Email"/>
                                <textarea rows="18" cols="6" placeholder="Messages"></textarea>
                                <input type="submit" value="Read More"/>
                            </form>
                        
                </div></div>
                </div>
                </div>
                </div>
                </div>
    </div>
  )
}
