import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <footer class="section " id="footer">
        <div class="overlay footer-overlay"></div>
        {/*Content */}
        <div class="container">
          <div class="row justify-content-start">
            <div class="col-lg-4 col-sm-12">
              <div class="footer-widget">
                {/* Brand */}
                <Link to="/" class="footer-brand text-white">
                  Falcon Technologies
                </Link>
                <p>Unleashing the power of code to transform your vision into reality. Our innovative solutions are engineered to revolutionize your business. From idea to implementation, we make your digital dreams a reality. Let us help you take your business to the next level with our expertise and innovation!</p>
              </div>
            </div>

            <div class="col-lg-3 ml-lg-auto col-sm-12">
              <div class="footer-widget">
                <h3>Services</h3>
                {/* Links */}
                <ul class="footer-links ">
                  <li>
                    <a href="#!">
                      Cyber Security Consulting
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      Mobile Application Development
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      Custom Enterprise Software Soluton
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      Tech Support Services
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      WebSite Development
                    </a>
                  </li>
                </ul>
              </div>
            </div>


            <div class="col-lg-2 col-sm-6">
              <div class="footer-widget">
                <h3>About</h3>
                {/* Links */}
                <ul class="footer-links">
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

            <div class="col-lg-2 col-sm-6">
              <div class="footer-widget">
                <h3>Socials</h3>
                {/* Links */}
                <ul class="list-unstyled footer-links">

                  <li><a href="https://www.linkedin.com/company/93126965/admin/"><i class="fab fa-linkedin"></i>linkedin
                  </a></li>
                  <li><a href="https://www.instagram.com/falcontechgh/"><i class="fab fa-instagram"></i>YouTube
                  </a></li>
                </ul>
              </div>
            </div>
          </div> {/* / .row */}


          <div class="row text-right pt-5">
            <div class="col-lg-12">
              <div class="overflow-hidden">
                {/* Copyright */}
                <p class="footer-copy">
                  Copyright &copy; <script>var CurrentYear = new Date().getFullYear()
                    document.write(CurrentYear)
                  </script>. Designed &amp; Developed by Falcon Technologies
                </p>
              </div>
            </div>
          </div> {/* / .row */}
        </div> {/* / .container */}
      </footer>

      <a id="scroll-to-top" class="scroll-to-top js-scroll-trigger" href="#top-header">
        <i class="fa fa-angle-up"></i>
      </a>
    </>
  );
}

export default Footer;