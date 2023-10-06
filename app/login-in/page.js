import React from "react";

const LoginPage = () => {
  return (
    <>
      <div id="main-wrapper" className="show">
        {/* start section login tabib */}
        <div className="login-tabib">
          <div>
            <div className="text-center">
              <a className="logo" href="index.html">
                <img
                  className="img-fluid"
                  src="assets/images/logo.png"
                  alt="loogin page"
                />
              </a>
            </div>
            <div className="login-main">
              <form className="theme-form">
                <h4>Sign in to account</h4>
                <p>Enter your email &amp; password to login </p>
                <div className="form-group m-b-10">
                  <label className="col-form-label">Email Address</label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Tabib@gmail.com"
                  />
                </div>
                <div className="form-group m-b-10">
                  <label className="col-form-label">Password</label>
                  <div className="form-input position-relative">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="*********"
                    />
                    <div className="show-hide">
                      <span className="show" />
                    </div>
                  </div>
                </div>
                <div className="form-group mb-0">
                  <div className="checkbox p-0">
                    <input id="checkbox1" type="checkbox" />
                    <label className="text-muted" htmlFor="checkbox1">
                      Remember password
                    </label>
                  </div>
                  <a
                    className="link text-primary"
                    href="page-forgot-password.html"
                  >
                    Forgot password?
                  </a>
                  <div className="mt-3">
                    <a href="index.html" className="btn btn-primary w-100">
                      Sign in
                    </a>
                  </div>
                </div>
                <p className="mt-4 mb-0">
                  Dont have account?
                  <a
                    className="ms-2 text-primary text-center"
                    href="page-register.html"
                  >
                    Create Account
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
        {/* End section login tabib */}
      </div>
      {/* JQuery v3.5.1 */}
      {/* popper js */}
      {/* Bootstrap */}
      {/* Moment */}
      {/* Date Range Picker */}
      {/* Main Custom JQuery */}
    </>
  );
};

export default LoginPage;
