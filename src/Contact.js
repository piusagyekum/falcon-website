import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Contact = () => {
  return (
    <div id="top-header">
      {/* LOADER TEMPLATE */}
      <div id="page-loader">
        <div className="loader-icon fa fa-spin colored-border"></div>
      </div>
      {/* /LOADER TEMPLATE */}


      {/* NAVBAR
    ================================================= */}
      <nav className="navbar navbar-expand-lg navbar-dark trans-navigation fixed-top navbar-togglable">
        <div className="container">
          <a className="navbar-brand" href="index-3.html">
            <h3>Rappo</h3>
          </a>
          {/* Toggler */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="fa fa-bars"></span>
          </button>

          {/* Collapse */}
          <div className="collapse navbar-collapse has-dropdown" id="navbarCollapse">
            {/* Links */}
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#!" id="navbarWelcome" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Home
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarWelcome">
                  <li><a className="dropdown-item" href="index.html">Home-1</a></li>
                  <li><a className="dropdown-item" href="index-2.html">Home-2</a></li>
                  <li><a className="dropdown-item" href="index-3.html">Home-3</a></li>
                  <li><a className="dropdown-item" href="index-4.html">Home-4</a></li>

                  <li className="dropdown dropdown-submenu dropright">
                    <a className="dropdown-item dropdown-toggle" href="#!" id="dropdown0301" role="button"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</a>

                    <ul className="dropdown-menu" aria-labelledby="dropdown0301">
                      <li><a className="dropdown-item" href="index.html">Submenu 01</a></li>
                      <li><a className="dropdown-item" href="index.html">Submenu 02</a></li>
                    </ul>
                  </li>

                  <li className="dropdown dropdown-submenu dropleft">
                    <a className="dropdown-item dropdown-toggle" href="#!" id="dropdown0301" role="button"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</a>

                    <ul className="dropdown-menu" aria-labelledby="dropdown0301">
                      <li><a className="dropdown-item" href="index.html">Submenu 01</a></li>
                      <li><a className="dropdown-item" href="index.html">Submenu 02</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item ">
                <a href="about.html" className="nav-link js-scroll-trigger">
                  About
                </a>
              </li>
              <li className="nav-item ">
                <a href="service.html" className="nav-link js-scroll-trigger">
                  Services
                </a>
              </li>
              <li className="nav-item ">
                <a href="pricing.html" className="nav-link js-scroll-trigger">
                  Pricing
                </a>
              </li>

              <li className="nav-item ">
                <a href="project.html" className="nav-link js-scroll-trigger">
                  Projects
                </a>
              </li>

              <li className="nav-item ">
                <a href="contact.html" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div> {/* / .navbar-collapse */}
        </div> {/* / .container */}
      </nav>

      {/* HERO
================================================== */}
      <section className="page-banner-area page-contact">
        <div className="overlay"></div>
        {/* Content */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-12 col-12 text-center">
              <div className="page-banner-content">
                <h1 className="display-4 font-weight-bold">Got a question?</h1>
                <p>We'd love to talk about how we can help you.</p>
              </div>
            </div>
          </div> {/* / .row */}
        </div> {/* / .container */}
      </section>


      {/* SECTIONS
    ================================================== */}
      <section id="contact-info">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="contact-info-block text-center">
                <i className="pe-7s-map-marker"></i>
                <h4>Address</h4>
                <p className="lead">153 Williamson Plaza, 09514</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="contact-info-block text-center">
                <i className="pe-7s-mail"></i>
                <h4>Email</h4>
                <p className="lead">supportdb@dthememascot.com</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="contact-info-block text-center">
                <i className="pe-7s-phone"></i>
                <h4>Phone Number</h4>
                <p className="lead">+23-68017684</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-8 col-lg-6">
              <h5>Leave a Message</h5>
              {/* Heading */}
              <h2 className="section-title mb-2 ">
                Tell us about <span className="font-weight-normal">yourself</span>
              </h2>

              {/* Subheading */}
              <p className="mb-5 ">
                Whether you have questions or you would just like to say hello, contact us.
              </p>

            </div>
          </div> {/* / .row */}

          <div className="row">
            <div className="col-lg-6">
              {/* form message */}
              <div className="row">
                <div className="col-12">
                  <div className="alert alert-success contact__msg" style={{ display: "none" }} role="alert">
                    Your message was sent successfully.
                  </div>
                </div>
              </div>
              {/* end message */}
              {/* Contacts Form */}
              <form className="contact_form" action="mail.php">
                <div className="row">
                  {/* Input */}
                  <div className="col-sm-6 mb-6">
                    <div className="form-group">
                      <label className="h6 small d-block text-uppercase">
                        Your name
                        <span className="text-danger">*</span>
                      </label>

                      <div className="input-group">
                        <input className="form-control" name="name" id="name" required="" placeholder="John Doe" type="text" />
                      </div>
                    </div>
                  </div>
                  {/* End Input */}

                  {/* Input */}
                  <div className="col-sm-6 mb-6">
                    <div className="form-group">
                      <label className="h6 small d-block text-uppercase">
                        Your email address
                        <span className="text-danger">*</span>
                      </label>

                      <div className="input-group ">
                        <input className="form-control" name="email" id="email" required="" placeholder="john@gmail.com" type="email" />
                      </div>
                    </div>
                  </div>
                  {/* End Input */}

                  <div className="w-100"></div>

                  {/* Input */}
                  <div className="col-sm-6 mb-6">
                    <div className="form-group">
                      <label className="h6 small d-block text-uppercase">
                        Subject
                        <span className="text-danger">*</span>
                      </label>

                      <div className="input-group">
                        <input className="form-control" name="subject" id="subject" required="" placeholder="Web design" type="text" />
                      </div>
                    </div>
                  </div>
                  {/* End Input */}

                  {/* Input */}
                  <div className="col-sm-6 mb-6">
                    <div className="form-group">
                      <label className="h6 small d-block text-uppercase">
                        Your Phone Number
                        <span className="text-danger">*</span>
                      </label>

                      <div className="input-group ">
                        <input className="form-control" id="phone" name="phone" required="" placeholder="1-800-643-4500" type="text" />
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                </div>

                {/* Input */}
                <div className="form-group mb-5">
                  <label className="h6 small d-block text-uppercase">
                    How can we help you?
                    <span className="text-danger">*</span>
                  </label>

                  <div className="input-group">
                    <textarea className="form-control" rows="4" name="message" id="message" required="" placeholder="Hi there, I would like to ..."></textarea>
                  </div>
                </div>
                {/* End Input */}

                <div className="">
                  <input name="submit" type="submit" className="btn btn-primary btn-circled" value="Send Message" />

                  <p className="small pt-3">We'll get back to you in 1-2 business days.</p>
                </div>
              </form>
              {/* End Contacts Form */}
            </div>

            <div className="col-lg-6 col-md-6">
              {/* START MAP */}
              <div id="map" ></div>
              {/* END MAP */}
            </div>
          </div>
        </div>
      </section>
      <footer className="section " id="footer">
        <div className="overlay footer-overlay"></div>
        {/*Content */}
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-lg-4 col-sm-12">
              <div className="footer-widget">
                {/* Brand */}
                <a href="index.html" className="footer-brand text-white">
                  Rappo
                </a>
                <p>Each theme featured at the Bootstrap marketplace has been reviewed by Bootstrap's creators.Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>

            <div className="col-lg-3 ml-lg-auto col-sm-12">
              <div className="footer-widget">
                <h3>Account</h3>
                {/* Links */}
                <ul className="footer-links ">
                  <li>
                    <a href="#!">
                      Terms and conditions
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      Affiliate services
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      Help and support
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      Frequently Asked Question
                    </a>
                  </li>
                </ul>
              </div>
            </div>


            <div className="col-lg-2 col-sm-6">
              <div className="footer-widget">
                <h3>About</h3>
                {/* Links */}
                <ul className="footer-links">
                  <li>
                    <a href="about.html">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="service.html">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="pricing.html">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="project.html">
                      Recent Projects
                    </a>
                  </li>

                  <li>
                    <a href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6">
              <div className="footer-widget">
                <h3>Socials</h3>
                {/* Links */}
                <ul className="list-unstyled footer-links">
                  <li><a href="https://www.facebook.com/themefisher"><i className="fab fa-facebook-f"></i>Facebook</a></li>
                  <li>
                    <a href="https://www.twitter.com/themefisher"><i className="fab fa-twitter"></i>Twitter
                    </a></li>
                  <li><a href="https://www.pinterest.com/themefisher/"><i className="fab fa-pinterest-p"></i>Pinterest
                  </a></li>
                  <li><a href="https://themefisher.com/"><i className="fab fa-linkedin"></i>linkedin
                  </a></li>
                  <li><a href="https://www.youtube.com/channel/UCx9qVW8VF0LmTi4OF2F8YdA"><i className="fab fa-youtube"></i>YouTube
                  </a></li>
                </ul>
              </div>
            </div>
          </div> {/* / .row */}


          <div className="row text-right pt-5">
            <div className="col-lg-12">
              <div className="overflow-hidden">
                {/* Copyright */}
                <p className="footer-copy">
                  Copyright &copy; <script>var CurrentYear = new Date().getFullYear()
                    document.write(CurrentYear)
                  </script>. Designed &amp; Developed by <a className="current-year" href="https://themefisher.com/">Themefisher</a>
                </p>
              </div>
            </div>
          </div> {/* / .row */}
        </div> {/* / .container */}
      </footer>


      {/*  Page Scroll to Top  */}

      <a id="scroll-to-top" className="scroll-to-top js-scroll-trigger" href="#top-header">
        <i className="fa fa-angle-up"></i>
      </a>

      {/* 
  Essential Scripts
  =====================================*/}
      {/* jQuery */}
      <script src="plugins/jquery/jquery.min.js"></script>
      {/* Bootstrap */}
      <script src="plugins/bootstrap/bootstrap.min.js"></script>
      {/* Slick Slider */}
      <script src="plugins/slick-carousel/slick/slick.min.js"></script>
      {/* Google Map */}
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCcABaamniA6OL5YvYSpB3pFMNrXwXnLwU"></script>
      <script src="plugins/google-map/gmap.js"></script>

      <script src="js/script.js"></script>

    </div>
  );
}

export default Contact;