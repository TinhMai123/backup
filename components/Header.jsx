import React from "react";

const Header = () => {
  return (
    <div className="header">
      <header className="top-head container-fluid">
        <div className="nav-control">
          <div className="hamburger">
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </div>
          <div className="left-header content-header__menu">
            <ul className="list-unstyled">
              <li className="nav-link btn">
                <a href="#">
                  <i className="far fa-calendar-check" />{" "}
                  <span> Make an appointment</span>
                </a>
              </li>
              <li className="nav-link btn">
                <a href="#">
                  <i className="far fa-file-alt" />{" "}
                  <span> Write a prescription</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-right">
          <div className="fullscreen notification_dropdown widget-5">
            <div className="full">
              <a
                className="text-dark"
                href="#!"
                onclick="javascript:toggleFullScreen()"
              >
                <i className="fas fa-expand" />
              </a>
            </div>
          </div>
          <div className="widget-6">
            <div className="cart-wrapper">
              <div className="cart-icon">
                <a className="cart-control" href="#">
                  <i className="fas fa-bell" />
                  <div className="pulse-css" />
                </a>
              </div>
              <div className="cart-dropdown-form dropdown-container">
                <div className="form-content">
                  <div className="widget-media main-scroll nicescroll-box">
                    <ul className="timeline">
                      <li>
                        <h6 className="mb-0">Notitications</h6>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media mr-2">
                            <img
                              alt="image"
                              src="https://via.placeholder.com/150/f8f8f8/2b2b2b"
                            />
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1 ">Incoming Message</h6>
                            <small className="d-block">
                              29 July 2020 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media mr-2 media-info">
                            <img
                              alt="image"
                              src="https://via.placeholder.com/150/f8f8f8/2b2b2b"
                            />
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">You got a new email</h6>
                            <small className="d-block">
                              29 July 2020 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media mr-2 media-success">
                            <img
                              alt="image"
                              src="https://via.placeholder.com/150/f8f8f8/2b2b2b"
                            />
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Hello world!</h6>
                            <small className="d-block">
                              29 July 2020 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media mr-2">
                            <img
                              alt="image"
                              src="https://via.placeholder.com/150/f8f8f8/2b2b2b"
                            />
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Beep Boop. Beee...</h6>
                            <small className="d-block">
                              29 July 2020 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media mr-2 media-danger">
                            <img
                              alt="image"
                              src="https://via.placeholder.com/150/f8f8f8/2b2b2b"
                            />
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Hello world!</h6>
                            <small className="d-block">
                              29 July 2020 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media mr-2 media-primary">
                            <img
                              alt="image"
                              src="https://via.placeholder.com/150/f8f8f8/2b2b2b"
                            />
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Incoming Message</h6>
                            <small className="d-block">
                              29 July 2020 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <a className="all-notification btn btn-primary" href="#">
                    See all notifications
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="my-account-wrapper widget-7">
            <div className="account-wrapper">
              <div className="account-control">
                <a className="login header-profile" href="#" title="Sign in">
                  <div className="header-info">
                    <span>Dr Roberts</span>
                    <small>Admin</small>
                  </div>
                  <img
                    src="https://via.placeholder.com/150/f8f8f8/2b2b2b"
                    alt="people"
                  />
                </a>
                <div className="account-dropdown-form dropdown-container">
                  <div className="form-content">
                    <a href="doctor-settings.html">
                      <i className="far fa-user" />
                      <span className="ml-2">Profile</span>
                    </a>
                    <a href="#">
                      <i className="far fa-envelope" />
                      <span className="ml-2">Inbox</span>
                    </a>
                    <a href="page-login.html">
                      <i className="fas fa-sign-in-alt" />
                      <span className="ml-2">Logout </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
