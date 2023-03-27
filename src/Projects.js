const Projects = () => {
    return ( 
        <div id="top-header">
{/* LOADER TEMPLATE */}
<div id="page-loader">
  <div class="loader-icon fa fa-spin colored-border"></div>
</div>
{/* /LOADER TEMPLATE */}


{/* NAVBAR
    ================================================= */}
<nav class="navbar navbar-expand-lg navbar-dark trans-navigation fixed-top navbar-togglable">
  <div class="container">
    <a class="navbar-brand" href="index-3.html">
      <h3>Rappo</h3>
    </a>
    {/* Toggler */}
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
      aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="fa fa-bars"></span>
    </button>

    {/* Collapse */}
    <div class="collapse navbar-collapse has-dropdown" id="navbarCollapse">
      {/* Links */}
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#!" id="navbarWelcome" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Home
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarWelcome">
            <li><a class="dropdown-item" href="index.html">Home-1</a></li>
            <li><a class="dropdown-item" href="index-2.html">Home-2</a></li>
            <li><a class="dropdown-item" href="index-3.html">Home-3</a></li>
            <li><a class="dropdown-item" href="index-4.html">Home-4</a></li>

            <li class="dropdown dropdown-submenu dropright">
              <a class="dropdown-item dropdown-toggle" href="#!" id="dropdown0301" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</a>

              <ul class="dropdown-menu" aria-labelledby="dropdown0301">
                <li><a class="dropdown-item" href="index.html">Submenu 01</a></li>
                <li><a class="dropdown-item" href="index.html">Submenu 02</a></li>
              </ul>
            </li>

            <li class="dropdown dropdown-submenu dropleft">
              <a class="dropdown-item dropdown-toggle" href="#!" id="dropdown0301" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</a>

              <ul class="dropdown-menu" aria-labelledby="dropdown0301">
                <li><a class="dropdown-item" href="index.html">Submenu 01</a></li>
                <li><a class="dropdown-item" href="index.html">Submenu 02</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="nav-item ">
          <a href="about.html" class="nav-link js-scroll-trigger">
            About
          </a>
        </li>
        <li class="nav-item ">
          <a href="service.html" class="nav-link js-scroll-trigger">
            Services
          </a>
        </li>
        <li class="nav-item ">
          <a href="pricing.html" class="nav-link js-scroll-trigger">
            Pricing
          </a>
        </li>

        <li class="nav-item ">
          <a href="project.html" class="nav-link js-scroll-trigger">
            Projects
          </a>
        </li>

        <li class="nav-item ">
          <a href="contact.html" class="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </div> {/* / .navbar-collapse */}
  </div> {/* / .container */}
</nav>

{/* HERO
================================================== */}
<section class="page-banner-area page-project">
    <div class="overlay"></div>
    {/* Content */}
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-9 col-md-12 col-12 text-center">
                <div class="page-banner-content">
                    <h1 class="display-4 font-weight-bold">We create your brand</h1>
                    <p>We'd love to talk about how we can help you.</p>
                </div>
            </div>
        </div> {/* / .row */}
    </div> {/* / .container */}
</section>

 <section id="work-wrap" style={{marginTop:"60px", paddingTop:"40px"}}>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="section-heading">
                            <h1>We are trying to deliver 100% quality product and success their business to achieve ultimate goal.</h1>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <p class="lead">We are providing best service since 1990 to present , committed to best service deliveryNullam metus enim, placerat in lacus vel, porttitor egestas libero. Etiam ex risus, feugiat eget accumsan eu, sagittis eu urna. In eget ultrices metus. Nunc accumsan </p>
                    </div>
                </div>
            </div>
        </section>
    
        <section id="work" class="section-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 p-0">
                        <div class="work-block">
                            <img src="images/work/10.jpg" alt="work-img" class="img-fluid"/>
                            <div class="overlay-content-block">
                                <h4>Probiz portfolio template</h4>
                                <p>Web Development</p>
                                <a href="single-project.html"><i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 p-0">
                        <div class="work-block">
                            <img src="images/work/11.jpg" alt="work-img" class="img-fluid"/>
                            <div class="overlay-content-block">
                                <h4>Probiz portfolio template</h4>
                                <p>Web Development</p>
                                <a href="single-project.html"><i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 p-0">
                        <div class="work-block">
                            <img src="images/work/12.jpg" alt="work-img" class="img-fluid"/>
                            <div class="overlay-content-block">
                                <h4>Probiz portfolio template</h4>
                                <p>Web Development</p>
                                <a href="single-project.html"><i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                 
                    <div class="col-lg-3 col-md-6 p-0">
                        <div class="work-block">
                            <img src="images/work/15.jpg" alt="work-img" class="img-fluid"/>
                            <div class="overlay-content-block">
                                <h4>Probiz portfolio template</h4>
                                <p>Web Development</p>
                                <a href="single-project.html"><i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 p-0">
                        <div class="work-block">
                            <img src="images/work/14.jpg" alt="work-img" class="img-fluid"/>
                            <div class="overlay-content-block">
                                <h4>Probiz portfolio template</h4>
                                <p>Web Development</p>
                                <a href="single-project.html"><i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 p-0">
                        <div class="work-block">
                            <img src="images/work/11.jpg" alt="work-img" class="img-fluid"/>
                            <div class="overlay-content-block">
                                <h4>Probiz portfolio template</h4>
                                <p>Web Development</p>
                                <a href="single-project.html"><i class="fa fa-link"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 p-0">
                            <div class="work-block">
                                <img src="images/work/10.jpg" alt="work-img" class="img-fluid"/>
                                <div class="overlay-content-block">
                                    <h4>Probiz portfolio template</h4>
                                    <p>Web Development</p>
                                    <a href="single-project.html"><i class="fa fa-link"></i></a>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>

 <footer class="section " id="footer">
   <div class="overlay footer-overlay"></div>
   {/*Content */}
   <div class="container">
     <div class="row justify-content-start">
       <div class="col-lg-4 col-sm-12">
         <div class="footer-widget">
           {/* Brand */}
           <a href="index.html" class="footer-brand text-white">
             Rappo
           </a>
           <p>Each theme featured at the Bootstrap marketplace has been reviewed by Bootstrap's creators.Lorem ipsum
             dolor sit amet, consectetur adipisicing elit.</p>
         </div>
       </div>

       <div class="col-lg-3 ml-lg-auto col-sm-12">
         <div class="footer-widget">
           <h3>Account</h3>
           {/* Links */}
           <ul class="footer-links ">
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

       <div class="col-lg-2 col-sm-6">
         <div class="footer-widget">
           <h3>Socials</h3>
           {/* Links */}
           <ul class="list-unstyled footer-links">
             <li><a href="https://www.facebook.com/themefisher"><i class="fab fa-facebook-f"></i>Facebook</a></li>
             <li>
               <a href="https://www.twitter.com/themefisher"><i class="fab fa-twitter"></i>Twitter
               </a></li>
             <li><a href="https://www.pinterest.com/themefisher/"><i class="fab fa-pinterest-p"></i>Pinterest
               </a></li>
             <li><a href="https://themefisher.com/"><i class="fab fa-linkedin"></i>linkedin
               </a></li>
             <li><a href="https://www.youtube.com/channel/UCx9qVW8VF0LmTi4OF2F8YdA"><i class="fab fa-youtube"></i>YouTube
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
          </script>. Designed &amp; Developed by <a class="current-year" href="https://themefisher.com/">Themefisher</a>
          </p>
         </div>
       </div>
     </div> {/* / .row */}
   </div> {/* / .container */}
 </footer>


 {/*  Page Scroll to Top  */}

 <a id="scroll-to-top" class="scroll-to-top js-scroll-trigger" href="#top-header">
   <i class="fa fa-angle-up"></i>
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
 
export default Projects;