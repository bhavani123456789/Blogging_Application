import React from 'react';

function ForgotPassword() {  // Use PascalCase for component names
  return (
    <div>
      <section className="ftco-section"> {/* Use className instead of class */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Forgot Password</h2> {/* Add missing content */}
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="login-wrap py-5">
                <div className="img d-flex align-items-center justify-content-center" style={{ backgroundImage: "url(images/bg.jpg)" }}> {/* Corrected image path */}
                </div>
                {/* Removed unnecessary comments */}
                <p className="text-center mb-4">Enter your email address and we'll send you a link to reset your password.</p>  {/* Informative message */}
                <form action="#" className="login-form">
                  <div className="form-group">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-envelope"></span> {/* Use appropriate email icon */}
                    </div>
                    <input type="email" className="form-control" placeholder="Email Address" required />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn form-control btn-primary rounded submit px-3">Reset Password</button>  {/* Changed button text */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ForgotPassword;
