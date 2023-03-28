import Footer from "./components/Footer";
import ServicesSummary from "./components/ServicesSummary";
import { Link } from "react-router-dom"
import Navbar from "./components/Navbar";

const Services = () => {
  return (
    <div id="top-header">

      {/* HERO
    ================================================== */}
      <section className="page-banner-area page-service">
        <div className="overlay"></div>
        {/* Content */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-12 col-12 text-center">
              <div className="page-banner-content">
                <h1 className="display-4 font-weight-bold">Web & Cloud services</h1>
                <p>We'd love to talk about how we can help you.</p>
              </div>
            </div>
          </div> {/* / .row */}
        </div> {/* / .container */}
      </section>



      <section className="section" id="service">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 pl-4 text-center">
              <div className="service-heading">
                <h1>We Provide The Best Software Services</h1>
                <p>Our Portfolio includes the following: UI/UX Design, Web/Mobile Application Development, USSD Application Development, Enterprise Solutions, Deployment of State of the Art PABX for Enterprise, IT Consulting Services, Tech Support/Consulting in Cloud Service Setup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="services-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 text-center">
              <div className="section-heading">
                {/* Heading */}
                <h2 className="section-title mb-2 text-white">
                  Web Services
                </h2>

                {/* Subheading */}
                <p className="mb-5 text-white">
                  Rappo can be used to create anything from a small marketing page to a sophisticated website.
                </p>
              </div>
            </div>
          </div> {/* / .row */}

          <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-6 mb-30">
              <div className="web-service-block">
                <i className="ti-light-bulb"></i>
                <h3>Creative Design</h3>
                <p>Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had .</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6 mb-30">
              <div className="web-service-block">
                <i className="ti-desktop"></i>
                <h3>Web Development</h3>
                <p>Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had .</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6 mb-30">
              <div className="web-service-block">
                <i className="ti-announcement"></i>
                <h3>Digital Marketing</h3>
                <p>Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had .</p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6 ">
              <div className="web-service-block">
                <i className="ti-layers-alt"></i>
                <h3>Graphic Design</h3>
                <p>Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had .</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6 ">
              <div className="web-service-block">
                <i className="ti-mobile"></i>
                <h3>App Development</h3>
                <p>Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had .</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6 ">
              <div className="web-service-block">
                <i className="ti-settings"></i>
                <h3>Wordpress Installation</h3>
                <p>Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had .</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="process">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 text-center">
              <div className="section-heading">
                {/* Heading */}
                <h2 className="section-title">
                  Our Working process
                </h2>

                {/* Subheading */}
                <p>
                  Rappo can be used to create anything from a small marketing page to a sophisticated website.
                </p>

              </div>
            </div>
          </div> {/* / .row */}

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="process-block">
                <img src="images/process/process-1.jpg" alt="" className="img-fluid" />

                <h3>Project Research</h3>
                <p>Nihil facere delectus eaque aut possimus nobis laudantium reprehenderit.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="process-block">
                <img src="images/process/process-2.jpg" alt="" className="img-fluid" />

                <h3>Project demostration</h3>
                <p>Nihil facere delectus eaque aut possimus nobis laudantium reprehenderit.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="process-block">
                <img src="images/process/process-3.jpg" alt="" className="img-fluid" />

                <h3>Development & delivery</h3>
                <p>Nihil facere delectus eaque aut possimus nobis laudantium reprehenderit.</p>
              </div>
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
                <a href="/" className="footer-brand text-white">
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
                    <a href="/about">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/services">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/projects">
                      Recent Projects
                    </a>
                  </li>

                  <li>
                    <a href="/contact">
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

export default Services;