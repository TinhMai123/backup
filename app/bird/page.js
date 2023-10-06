import React from "react";

const page = () => {
  return (
    <>
      <div id="main-wrapper" className="show">
        {/* start logo components */}
        <div className="nav-header">
          <div className="brand-logo">
            <a href="index.html">
              {" "}
              <img
                className="logo-tabib"
                src="assets/images/download.png"
                alt=""
              />
            </a>
            <a href="index.html">
              <img
                className="brand-title"
                src="assets/images/logo.png"
                alt=""
              />
            </a>
          </div>
        </div>
        {/* End logo components */}
        {/* start section sidebar */}
        <aside className="left-panel nicescroll-box">
          <nav className="navigation">
            <ul className="list-unstyled main-menu">
              <li className="has-submenu">
                <a href="index.html">
                  <i className="fas fa-th-large" />
                  <span className="nav-label">Dashboard</span>
                </a>
              </li>
              <li className="has-submenu">
                <a href="javascript:void()" className="has-arrow mm-collapsed">
                  <i className="fa fa-table" />
                  <span className="nav-label">Layouts </span>
                  <span className="badge bg-danger rounded-pill ms-2">New</span>
                </a>
                <ul className="list-unstyled mm-collapse">
                  <li>
                    <a href="index-dark.html">Dark Dashboard</a>
                  </li>
                  <li>
                    <a href="index-rtl.html">RTL Dashboard</a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="javascript:void()" className="has-arrow mm-collapsed">
                  <i className="fas fa-user-md" />
                  <span className="nav-label">Doctors</span>
                </a>
                <ul className="list-unstyled mm-collapse">
                  <li>
                    <a href="add-doctor.html">Add Doctor</a>
                  </li>
                  <li>
                    <a href="doctor-list.html">All Doctors</a>
                  </li>
                  <li>
                    {" "}
                    <a href="doctor-profile.html">Doctors Profile</a>{" "}
                  </li>
                </ul>
              </li>
              <li className="has-submenu active">
                <a href="javascript:void()" className="has-arrow mm-collapsed">
                  <i className="fas fa-users" />
                  <span className="nav-label">Patients</span>
                </a>
                <ul className="list-unstyled mm-collapse">
                  <li>
                    <a href="new-patient.html">New Patient</a>
                  </li>
                  <li>
                    <a href="all-patients.html">All Patients</a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="new-appointment.html">
                  <i className="fas fa-calendar-plus" />
                  <span className="nav-label">Appointment</span>
                </a>
              </li>
              <li className="has-submenu">
                <a href="javascript:void()" className="has-arrow mm-collapsed">
                  <i className="fas fa-book-medical" />
                  <span className="nav-label">Prescriptions</span>
                </a>
                <ul className="list-unstyled mm-collapse">
                  <li>
                    <a href="new-prescription.html">New Prescription</a>
                  </li>
                  <li>
                    <a href="all-prescriptions.html">All Prescriptions</a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="add-drug.html">
                  <i className="fas fa-pills" />
                  <span className="nav-label">Add Drug</span>
                </a>
              </li>
              <li className="has-submenu">
                <a href="javascript:void()" className="has-arrow mm-collapsed">
                  <i className="fas fa-heartbeat" />
                  <span className="nav-label">Tests</span>
                </a>
                <ul className="list-unstyled mm-collapse">
                  <li>
                    <a href="add-test.html">Add Test</a>
                  </li>
                  <li>
                    <a href="all-tests.html">All Tests</a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="calendar.html">
                  <i className="fas fa-calendar-alt" />
                  <span className="nav-label">calendar</span>
                </a>
              </li>
              <li className="has-submenu">
                <a href="reports.html">
                  <i className="fas fa-chart-pie" />
                  <span className="nav-label">Reports</span>
                </a>
              </li>
              <li className="has-submenu">
                <a href="javascript:void()" className="has-arrow mm-collapsed">
                  <i className="fas fa-file-invoice" />
                  <span className="nav-label">Billing</span>
                </a>
                <ul className="list-unstyled mm-collapse">
                  <li>
                    <a href="create-invoice.html">Create Invoice</a>
                  </li>
                  <li>
                    <a href="billing-list.html">Billing List</a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="javascript:void()" className="has-arrow mm-collapsed">
                  <i className="fas fa-cog" />
                  <span className="nav-label">Settings</span>
                </a>
                <ul className="list-unstyled mm-collapse">
                  <li>
                    <a href="doctor-settings.html">Doctor Settings</a>
                  </li>
                  <li>
                    <a href="prescription-settings.html">
                      Prescription Settings
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="javascript:void()" className="has-arrow mm-collapsed">
                  <i className="fa fa-tag" />
                  <span className="nav-label">Authentication</span>
                </a>
                <ul className="list-unstyled mm-collapse">
                  <li>
                    <a href="empty-page.html">Empty Page</a>
                  </li>
                  <li>
                    <a href="page-login.html">Login simple</a>
                  </li>
                  <li>
                    <a href="page-login-one.html">Login with Bg Image</a>
                  </li>
                  <li>
                    <a href="page-register.html">Register simple</a>
                  </li>
                  <li>
                    <a href="page-register-one.html">Register with Bg Image</a>
                  </li>
                  <li>
                    <a href="page-lock-screen.html">Lock Screen</a>
                  </li>
                  <li>
                    <a href="page-forgot-password.html">Page forgot password</a>
                  </li>
                  <li>
                    <a href="page-error-404.html">Error 404</a>
                  </li>
                  <li>
                    <a href="page-error-500.html">Error 500</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="sidebar-widgets">
            <div className="top-sidebar box-shadow mx-25 m-b-30 p-b-20 text-center">
              <a href="new-appointment.html">
                <img
                  src="https://via.placeholder.com/215/f8f8f8/2b2b2b"
                  className="side-img"
                  alt="img"
                />
              </a>
              <a href="#">
                <h4 className="text-primary mb-0">Make an Appointments</h4>
              </a>
            </div>
            <div className="copyright text-center">
              <p className="mb-0"> Tabib Dashboard</p>
              <p className="mb-0"> © 2022 </p>
            </div>
          </div>
        </aside>
        {/* End section sidebar */}
        {/* start section header */}
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
                    <a
                      className="login header-profile"
                      href="#"
                      title="Sign in"
                    >
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
        {/* End section header */}
        {/* start section content */}
        <div className="content-body">
          <div className="warper container-fluid">
            <div className="all-patients main_container">
              <div className="row page-titles mx-0">
                <div className="col-sm-6 p-md-0">
                  <div className="welcome-text">
                    <h4 className="text-primary">New Patient</h4>
                  </div>
                </div>
                <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                      <a href="/new-patient.html">New Patient</a>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-header fix-card">
                      <div className="row">
                        <div className="col-8">
                          <h4 className="card-title"> All Patients </h4>
                        </div>
                        <div className="col-4 float-end">
                          <a
                            href="/new-patient.html"
                            className="btn btn-primary float-end"
                          >
                            New Patient
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table id="example2" className="display nowrap">
                          <thead>
                            <tr>
                              <th />
                              <th>First Name</th>
                              <th>Last name</th>
                              <th>Email</th>
                              <th>Mobile No.</th>
                              <th>Birthday</th>
                              <th>Marital status</th>
                              <th>Sex</th>
                              <th>Blood Group</th>
                              <th>Patient Weight</th>
                              <th>Patient Height</th>
                              <th>Address</th>
                              <th>Patient History</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <img
                                  className="rounded-circle"
                                  width={35}
                                  src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                                  alt=""
                                />
                              </td>
                              <td>Airi </td>
                              <td>Satou</td>
                              <td>test@gmail.com</td>
                              <td>658543469</td>
                              <td>2011/04/25</td>
                              <td>Maried</td>
                              <td>Male</td>
                              <td>A +</td>
                              <td>61</td>
                              <td>41</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>
                                <a className="mr-4 vue">
                                  <span
                                    className="fa fa-eye tbl-eye"
                                    aria-hidden="true"
                                  />
                                </a>
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal-edit"
                                  className="mr-4"
                                >
                                  <span className="fas fa-pencil-alt tbl-edit" />
                                </a>
                                <a className="mr-4 delet">
                                  <span className="fas fa-trash-alt tbl-delet" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  className="rounded-circle"
                                  width={35}
                                  src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                                  alt=""
                                />
                              </td>
                              <td>Angelica </td>
                              <td>Ramos</td>
                              <td>test@gmail.com</td>
                              <td>658543469</td>
                              <td>2011/04/25</td>
                              <td>Maried</td>
                              <td>Male</td>
                              <td>A +</td>
                              <td>61</td>
                              <td>41</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>
                                <a className="mr-4 vue">
                                  <span
                                    className="fa fa-eye tbl-eye"
                                    aria-hidden="true"
                                  />
                                </a>
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal-edit"
                                  className="mr-4"
                                >
                                  <span className="fas fa-pencil-alt tbl-edit" />
                                </a>
                                <a className="mr-4 delet">
                                  <span className="fas fa-trash-alt tbl-delet" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  className="rounded-circle"
                                  width={35}
                                  src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                                  alt=""
                                />
                              </td>
                              <td>Ashton</td>
                              <td> Cox</td>
                              <td>test@gmail.com</td>
                              <td>658543469</td>
                              <td>2011/04/25</td>
                              <td>Maried</td>
                              <td>Male</td>
                              <td>A +</td>
                              <td>61</td>
                              <td>41</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>
                                <a className="mr-4 vue">
                                  <span
                                    className="fa fa-eye tbl-eye"
                                    aria-hidden="true"
                                  />
                                </a>
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal-edit"
                                  className="mr-4"
                                >
                                  <span className="fas fa-pencil-alt tbl-edit" />
                                </a>
                                <a className="mr-4 delet">
                                  <span className="fas fa-trash-alt tbl-delet" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  className="rounded-circle"
                                  width={35}
                                  src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                                  alt=""
                                />
                              </td>
                              <td>Bradley </td>
                              <td>Greer</td>
                              <td>test@gmail.com</td>
                              <td>658543469</td>
                              <td>2011/04/25</td>
                              <td>Maried</td>
                              <td>Male</td>
                              <td>A +</td>
                              <td>61</td>
                              <td>41</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>
                                <a className="mr-4 vue">
                                  <span
                                    className="fa fa-eye tbl-eye"
                                    aria-hidden="true"
                                  />
                                </a>
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal-edit"
                                  className="mr-4"
                                >
                                  <span className="fas fa-pencil-alt tbl-edit" />
                                </a>
                                <a className="mr-4 delet">
                                  <span className="fas fa-trash-alt tbl-delet" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  className="rounded-circle"
                                  width={35}
                                  src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                                  alt=""
                                />
                              </td>
                              <td>Brenden </td>
                              <td>Wagner</td>
                              <td>test@gmail.com</td>
                              <td>658543469</td>
                              <td>2011/04/25</td>
                              <td>Maried</td>
                              <td>Male</td>
                              <td>A +</td>
                              <td>61</td>
                              <td>41</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>
                                <a className="mr-4 vue">
                                  <span
                                    className="fa fa-eye tbl-eye"
                                    aria-hidden="true"
                                  />
                                </a>
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal-edit"
                                  className="mr-4"
                                >
                                  <span className="fas fa-pencil-alt tbl-edit" />
                                </a>
                                <a className="mr-4 delet">
                                  <span className="fas fa-trash-alt tbl-delet" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  className="rounded-circle"
                                  width={35}
                                  src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                                  alt=""
                                />
                              </td>
                              <td>Brielle </td>
                              <td>Williamson</td>
                              <td>test@gmail.com</td>
                              <td>658543469</td>
                              <td>2011/04/25</td>
                              <td>Maried</td>
                              <td>Male</td>
                              <td>A +</td>
                              <td>61</td>
                              <td>41</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>
                                <a className="mr-4 vue">
                                  <span
                                    className="fa fa-eye tbl-eye"
                                    aria-hidden="true"
                                  />
                                </a>
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal-edit"
                                  className="mr-4"
                                >
                                  <span className="fas fa-pencil-alt tbl-edit" />
                                </a>
                                <a className="mr-4 delet">
                                  <span className="fas fa-trash-alt tbl-delet" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  className="rounded-circle"
                                  width={35}
                                  src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                                  alt=""
                                />
                              </td>
                              <td>Bruno</td>
                              <td> Nash</td>
                              <td>test@gmail.com</td>
                              <td>658543469</td>
                              <td>2011/04/25</td>
                              <td>Maried</td>
                              <td>Male</td>
                              <td>A +</td>
                              <td>61</td>
                              <td>41</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>
                                <a className="mr-4 vue">
                                  <span
                                    className="fa fa-eye tbl-eye"
                                    aria-hidden="true"
                                  />
                                </a>
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal-edit"
                                  className="mr-4"
                                >
                                  <span className="fas fa-pencil-alt tbl-edit" />
                                </a>
                                <a className="mr-4 delet">
                                  <span className="fas fa-trash-alt tbl-delet" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  className="rounded-circle"
                                  width={35}
                                  src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                                  alt=""
                                />
                              </td>
                              <td>Caesar </td>
                              <td>Vance</td>
                              <td>test@gmail.com</td>
                              <td>658543469</td>
                              <td>2011/04/25</td>
                              <td>Maried</td>
                              <td>Male</td>
                              <td>A +</td>
                              <td>61</td>
                              <td>41</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>
                                <a className="mr-4 vue">
                                  <span
                                    className="fa fa-eye tbl-eye"
                                    aria-hidden="true"
                                  />
                                </a>
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal-edit"
                                  className="mr-4"
                                >
                                  <span className="fas fa-pencil-alt tbl-edit" />
                                </a>
                                <a className="mr-4 delet">
                                  <span className="fas fa-trash-alt tbl-delet" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  className="rounded-circle"
                                  width={35}
                                  src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                                  alt=""
                                />
                              </td>
                              <td>Cara </td>
                              <td>Stevens</td>
                              <td>test@gmail.com</td>
                              <td>658543469</td>
                              <td>2011/04/25</td>
                              <td>Maried</td>
                              <td>Male</td>
                              <td>A +</td>
                              <td>61</td>
                              <td>41</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>
                                <a className="mr-4 vue">
                                  <span
                                    className="fa fa-eye tbl-eye"
                                    aria-hidden="true"
                                  />
                                </a>
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal-edit"
                                  className="mr-4"
                                >
                                  <span className="fas fa-pencil-alt tbl-edit" />
                                </a>
                                <a className="mr-4 delet">
                                  <span className="fas fa-trash-alt tbl-delet" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  className="rounded-circle"
                                  width={35}
                                  src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                                  alt=""
                                />
                              </td>
                              <td>Cedric </td>
                              <td>Kelly </td>
                              <td>test@gmail.com</td>
                              <td>658543469</td>
                              <td>2011/04/25</td>
                              <td>Maried</td>
                              <td>Male</td>
                              <td>A +</td>
                              <td>61</td>
                              <td>41</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>
                                <a className="mr-4 vue">
                                  <span
                                    className="fa fa-eye tbl-eye"
                                    aria-hidden="true"
                                  />
                                </a>
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal-edit"
                                  className="mr-4"
                                >
                                  <span className="fas fa-pencil-alt tbl-edit" />
                                </a>
                                <a className="mr-4 delet">
                                  <span className="fas fa-trash-alt tbl-delet" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  className="rounded-circle"
                                  width={35}
                                  src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                                  alt=""
                                />
                              </td>
                              <td>Charde </td>
                              <td>Marshall</td>
                              <td>test@gmail.com</td>
                              <td>658543469</td>
                              <td>2011/04/25</td>
                              <td>Maried</td>
                              <td>Male</td>
                              <td>A +</td>
                              <td>61</td>
                              <td>41</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>
                                <a className="mr-4 vue">
                                  <span
                                    className="fa fa-eye tbl-eye"
                                    aria-hidden="true"
                                  />
                                </a>
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal-edit"
                                  className="mr-4"
                                >
                                  <span className="fas fa-pencil-alt tbl-edit" />
                                </a>
                                <a className="mr-4 delet">
                                  <span className="fas fa-trash-alt tbl-delet" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  className="rounded-circle"
                                  width={35}
                                  src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                                  alt=""
                                />
                              </td>
                              <td>Colleen</td>
                              <td> Hurst</td>
                              <td>test@gmail.com</td>
                              <td>658543469</td>
                              <td>2011/04/25</td>
                              <td>Maried</td>
                              <td>Male</td>
                              <td>A +</td>
                              <td>61</td>
                              <td>41</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>
                                <a className="mr-4 vue">
                                  <span
                                    className="fa fa-eye tbl-eye"
                                    aria-hidden="true"
                                  />
                                </a>
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal-edit"
                                  className="mr-4"
                                >
                                  <span className="fas fa-pencil-alt tbl-edit" />
                                </a>
                                <a className="mr-4 delet">
                                  <span className="fas fa-trash-alt tbl-delet" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  className="rounded-circle"
                                  width={35}
                                  src="https://via.placeholder.com/35/f8f8f8/2b2b2b"
                                  alt=""
                                />
                              </td>
                              <td>Daidai</td>
                              <td> Rios</td>
                              <td>test@gmail.com</td>
                              <td>658543469</td>
                              <td>2011/04/25</td>
                              <td>Maried</td>
                              <td>Male</td>
                              <td>A +</td>
                              <td>61</td>
                              <td className="text-end">41</td>
                              <td className="text-end">
                                lorem ipsum kwjhdkj jkdhjkfds
                              </td>
                              <td>lorem ipsum kwjhdkj jkdhjkfds</td>
                              <td>
                                <a className="mr-4 vue">
                                  <span
                                    className="fa fa-eye tbl-eye"
                                    aria-hidden="true"
                                  />
                                </a>
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#modal-edit"
                                  className="mr-4"
                                >
                                  <span className="fas fa-pencil-alt tbl-edit" />
                                </a>
                                <a className="mr-4 delet">
                                  <span className="fas fa-trash-alt tbl-delet" />
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* Modal */}
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Modal title
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End section content */}
        {/* start section footer */}
        <div className="footer ">
          <div className="copyright ">
            <p className="mb-0">
              Copyright © Designed &amp; Developed by{" "}
              <a href="uxign.com" target="_blank">
                Uxign
              </a>
              2022
            </p>
          </div>
        </div>
        {/* End section footer */}
      </div>
      {/* Show data patient */}
      <div
        className="modal fade"
        id="myModal"
        tabIndex={-1}
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        {/* <div > */}
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="myModalLabel">
                <img
                  className="rounded-circle"
                  width={35}
                  src="https://via.placeholder.com/150/f8f8f8/2b2b2b"
                  alt=""
                />{" "}
                Tiger Nixon{" "}
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="insertHere" />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Show data patient */}
      {/* Modal */}
      <div
        className="modal fade"
        id="modal-edit"
        tabIndex={-1}
        aria-labelledby="modal-title-edit-row"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modal-title-edit-row">
                Angelica Ramos
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="basic-form">
                    <form>
                      <div className="row">
                        <div className="col-xl-4">
                          <div className="form-group row widget-3">
                            <div className="col-lg-12">
                              <div className="form-input">
                                <label
                                  className="labeltest"
                                  htmlFor="file-ip-1"
                                >
                                  <span>
                                    {" "}
                                    Drop image here or click to upload.{" "}
                                  </span>
                                </label>
                                <input
                                  type="file"
                                  id="file-ip-1"
                                  accept="image/*"
                                  onchange="showPreview(event);"
                                />
                                <div className="preview">
                                  <img
                                    id="file-ip-1-preview"
                                    src="#"
                                    alt="img"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="form-group row">
                            <div className="col-lg-12">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="First Name"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="col-lg-12">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Last name"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="col-lg-12">
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="col-lg-12">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Mobile No."
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="form-group row">
                            <div className="col-lg-12">
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Birthday"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="col-lg-12">
                              <select className="form-control form-select">
                                <option> Marital status </option>
                                <option>Married</option>
                                <option>Unmarried</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="col-lg-12">
                              <select className="form-control form-select">
                                <option>Sex</option>
                                <option>Male</option>
                                <option>Female</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="col-lg-12">
                              <select className="form-control form-select">
                                <option>Blood Group</option>
                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>O+</option>
                                <option>O-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-4" />
                        <div className="col-xl-4">
                          <div className="form-group row">
                            <div className="col-lg-12">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Patient Weight"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="form-group row">
                            <div className="col-lg-12">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Patient Height"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-4">
                          <div className="form-group">
                            <div className="col-lg-12"></div>
                            <textarea
                              className="form-control"
                              placeholder="Address"
                              rows={4}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-xl-8">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              placeholder="Patient History"
                              rows={4}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*End Modal */}
      {/* JQuery v3.5.1 */}
      {/* popper js */}
      {/* Bootstrap */}
      {/* Moment */}
      {/* Date Range Picker */}
      {/* Datatable */}
      {/* Main Custom JQuery */}
    </>
  );
};

export default page;
