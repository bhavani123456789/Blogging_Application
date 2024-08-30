import React from 'react';

function Login() {
  return (
    <div className="ftco-section"> {/* Wrap content in a container */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section">Welcome Back</h2> {/* Add missing content */}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="login-wrap py-5">
              <div className="img d-flex align-items-center justify-content-center" style={{ backgroundImage: "url(images/bg.jpg)" }}> {/* Corrected image path */}
              </div>
              <h3 className="text-center mb-0">Welcome</h3>
              <p className="text-center">Sign in by entering the information below</p>
              <form action="#" className="login-form">
                <div className="form-group">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-user"></span>
                  </div>
                  <input type="text" className="form-control" placeholder="Username" required />
                </div>
                <div className="form-group">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-lock"></span>
                  </div>
                  <input type="password" className="form-control" placeholder="Password" required />
                </div>
                <div className="form-group d-md-flex">
                  <div className="w-100 text-md-right">
                    <a href="/forgotpassword">Forgot Password</a>
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn form-control btn-primary rounded submit px-3">Get Started</button>
                </div>
              </form>
              <div className="w-100 text-center mt-4 text">
                <p className="mb-0">Don't have an account?</p>
                <a href="/signup">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
