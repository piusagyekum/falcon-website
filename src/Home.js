import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import ServicesSummary from './components/ServicesSummary';



const Home = () => {
    return ( 
        <div id="top-header">

{/* //LOADER TEMPLAT */}

<div id="page-loader">
  <div class="loader-icon fa fa-spin colored-border"></div>
</div>
{/* /LOADER TEMPLATE */}

<div class="top-bar bg-dark py-2 py-md-0" id="top-bar">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6 col-md-6">
        <div class="top-bar-left text-white text-md-left text-sm-center">
          <i class="fas fa-map-marker-alt"></i>
          <span class="ml-2">E.D Sowah Avenue GD-162-6456</span>
        </div>
      </div>

      <div class="col-lg-4 ml-lg-auto col-md-6">
        <ul class="list-inline list-unstyled header-socials text-md-right text-sm-center">
          <li class="list-inline-item"><a href="https://www.instagram.com/falcontechgh/"> <i class="fab fa-instagram"></i></a></li>
          <li class="list-inline-item"><a href="https://www.linkedin.com/company/93126965/admin/"> <i class="fab fa-linkedin"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class="logo-bar d-none d-md-block d-lg-block bg-light">
  <div class="container">
    <div class="row">
      <div class="col-lg-2">
        <div class="logo d-none d-lg-block">
          {/* Brand */}
          <Link class="navbar-brand js-scroll-trigger" to="index.html">
            {/* <h2 class="mb-0">Rappo</h2> */}
            <img src="images/transLogo.png" alt="" width="40px"/>
            <h4 style={{display:'inline-block'}}>alcon Technologies</h4>
          </Link>
        </div>
      </div>

      <div class="col-lg-8 justify-content-end ml-lg-auto d-flex col-12 col-md-12 justify-content-md-center">
        <div class="top-info-block d-inline-flex">
          <div class="icon-block">
            <i class="ti-mobile"></i>
          </div>
          <div class="info-block">
            <h5 class="font-weight-500">+233 (0) 263012532</h5>
            <p>Call Free</p>
          </div>
        </div>

        <div class="top-info-block d-inline-flex">
          <div class="icon-block">
            <i class="ti-email"></i>
          </div>
          <div class="info-block">
            <h5 class="font-weight-500">btfalcontechnologies@gmail.com</h5>
            <p>Email Us</p>
          </div>
        </div>
        <div class="top-info-block d-inline-flex">
          <div class="icon-block">
            <i class="ti-time"></i>
          </div>
          <div class="info-block">
            <h5 class="font-weight-500">Mon-Fri 9:00-17.00 </h5>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* NAVBAR
    ================================================= */}
<div class="main-navigation" id="mainmenu-area">
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary main-nav navbar-togglable rounded-radius">

      <a class="navbar-brand d-lg-none d-block" href="index.html">
        <h4 class="h3 mb-0">Rappo</h4>
      </a>
      {/* Toggler */}
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="fa fa-bars"></span>
      </button>

      {/* Collapse */}
      <div class="collapse navbar-collapse has-dropdown" id="navbarCollapse">
        {/* Links */}
        <ul class="navbar-nav ">
          <li class="nav-item dropdown">
            <Link to="/" class="nav-link"  id="navbarWelcome" role="button" 
              aria-haspopup="true" aria-expanded="false">
              Home
            </Link>
          </li>
          <li class="nav-item ">
            <Link to="/About" class="nav-link js-scroll-trigger">
              About
            </Link>
          </li>
          <li class="nav-item ">
            <Link to="/Services" class="nav-link js-scroll-trigger">
              Services
            </Link>
          </li>
         

          <li class="nav-item ">
            <Link to="/Projects" class="nav-link js-scroll-trigger">
              Projects
            </Link>
          </li>

          <li class="nav-item ">
            <Link to="/Contact" class="nav-link">
              Contact
            </Link>
          </li>
        </ul>

        <ul class="ml-lg-auto list-unstyled m-0">
          <li><Link to="/Contact" class="btn btn-white btn-circled">Get a quote</Link></li>
        </ul>
      </div> {/* / .navbar-collapse */}
    </nav>
  </div> {/* / .container */}
</div>



    {/* HERO
    ================================================== */}
    <section class="banner-area py-7">
        {/* Content */}
        <div class="container">
            <div class="row  align-items-center">
                <div class="col-md-12 col-lg-7 text-center text-lg-left">
                    <div class="main-banner">
                        {/* Heading */}
                        <h1 class="display-4 mb-4 font-weight-normal">
                            Industry Leading Managed Services Solutions
                        </h1>

                        {/* Subheading */}
                        <p class="lead mb-4">
                           Unleashing the power of code to transform your vision into reality. Our innovative solutions are engineered to revolutionize your business. From idea to implementation, we make your digital dreams a reality. Let us help you take your business to the next level with our expertise and innovation!
                        </p>

                        {/* Button */}
                        <p class="mb-0">
                            <a href="#!" target="_blank" class="btn btn-primary btn-circled">
                                Purchase now
                            </a>
                        </p>
                    </div>
                </div>

                <div class="col-lg-5 d-none d-lg-block">
                    <div class="banner-img-block">
                        <img src="images/banner-img-5.png" alt="banner-img" class="img-fluid"/>
                    </div>
                </div>
            </div> {/* / .row */}
        </div> {/* / .container */}
    </section>


 <section class="section bg-grey" id="feature">
        <div class="container">
            <div class="row justy-content-center">
                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="text-center feature-block">
                        <div class="img-icon-block mb-4">
                            <i class="ti-thumb-up"></i>
                        </div>
                        <h4 class="mb-2">The right advice</h4>
                        <p>Our team are experts in matching you with the right provider.</p>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="text-center feature-block">
                        <div class="img-icon-block mb-4">
                            <i class="ti-cup"></i>
                        </div>
                        <h4 class="mb-2">Recognised for excellence</h4>
                        <p>We've been awarded for our high rate of customer satisfaction.</p>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="text-center feature-block">
                        <div class="img-icon-block mb-4">
                            <i class="ti-wallet"></i>
                        </div>
                        <h4 class="mb-2">Compare the best</h4>
                        <p>We only compare market leaders with a reputation for service quality.</p>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6 col-md-6">
                    <div class="text-center feature-block">
                        <div class="img-icon-block mb-4">
                            <i class="ti-dashboard"></i>
                        </div>
                        <h4 class="mb-2">Premium Services</h4>
                        <p>We only compare market leaders with a reputation for service quality.</p>
                    </div>
                </div>
            </div>
        </div> {/* / .container */}
    </section>



    {/* SERVICE-1
    ================================================== */}
    <section class="bg-grey" id="service">
        <div class="container">
            <div class="row ">
                <div class="col-lg-4">
                    <div class="service-img">
                        <img src="images/blog-lg.jpg" alt="" class="img-fluid"/>
                    </div>
                </div>

                <div class="col-lg-6 pl-4">
                    <div class="service-content">
                        <h1>Get a better deal and start saving money today</h1>
                        <p>We compare hundreds of leading products and plans across many categories to bring you the best value for money.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="pt-5 service-wrap">
        <div class="container">
            <div class="row ">
                <div class="col-lg-8 offset-lg-4">
                    <div class="carousel slide " id="service-carousel" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="col-lg-12">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="service-block media">
                                                <div class="service-icon">
                                                    <i class="ti-reload"></i>
                                                </div>
                                                <div class="service-inner-content media-body">
                                                    <h4>Backup System</h4>
                                                    <p>Our team are experts in matching you with the right provider.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="service-block media">
                                                <div class="service-icon">
                                                    <i class="ti-cloud"></i>
                                                </div>
                                                <div class="service-inner-content media-body">
                                                    <h4>Cloud Hosting</h4>
                                                    <p>Our team are experts in matching you with the right provider.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <div class="col-lg-12">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="service-block media">
                                                <div class="service-icon">
                                                    <i class="ti-world"></i>
                                                </div>
                                                <div class="service-inner-content media-body">
                                                    <h4>Web hosting</h4>
                                                    <p>Our team are experts in matching you with the right provider.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="service-block media">
                                                <div class="service-icon">
                                                    <i class="ti-server"></i>
                                                </div>
                                                <div class="service-inner-content media-body">
                                                    <h4>Office Cloud</h4>
                                                    <p>Our team are experts in matching you with the right provider.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-12">
                            <p class="pl-3">Want to know more about this? <Link to="/Contact">Contact us</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
<section class="section" id="process">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6 text-center">
                    <div class="section-heading">
                        {/* Heading */}
                        <h2 class="section-title">
                            Our Working process
                        </h2>

                        {/* Subheading */}
                        <p>
                            Rappo can be used to create anything from a small marketing page to a sophisticated website.
                        </p>

                    </div>
                </div>
            </div> {/* / .row */}

            <div class="row justify-content-center">
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="process-block">
                        <img src="images/process/process-1.jpg" alt="" class="img-fluid"/>

                        <h3>Project Research</h3>
                        <p>Nihil facere delectus eaque aut possimus nobis laudantium reprehenderit.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="process-block">
                        <img src="images/process/process-2.jpg" alt="" class="img-fluid"/>

                        <h3>Project demostration</h3>
                        <p>Nihil facere delectus eaque aut possimus nobis laudantium reprehenderit.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="process-block">
                        <img src="images/process/process-3.jpg" alt="" class="img-fluid"/>

                        <h3>Development & delivery</h3>
                        <p>Nihil facere delectus eaque aut possimus nobis laudantium reprehenderit.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

<ServicesSummary/>


<section class="section" id="projects-wrap" >
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="section-heading">
                        <h1 class="text-white">We are trying to deliver 100% quality product and success their business to achieve ultimate goal.</h1>
                    </div>
                </div>
                <div class="col-lg-6">
                    <p class="lead text-white">At our consultancy, we're proud to have a team of exceptional software engineers who possess the expertise and skills necessary to take your business to new heights. Our engineers are handpicked for their proven track record of success and extensive knowledge of the latest technologies. They're fully devoted to driving your business forward and delivering outstanding results. </p>
                </div>
            </div>
        </div>
    </section>

    <section id="projects" class="section-bottom">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 col-sm-6 mb-5">
                    <div class="single-project">
                        <img src="images/projects/p-1.jpg" alt="" class="img-fluid"/>
                        <div class="project-content">
                            <h4>Project: onepage</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eligendi consequuntur veniam quod</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 mb-5">
                    <div class="single-project">
                        <img src="images/projects/p-4.jpg" alt="" class="img-fluid"/>
                        <div class="project-content">
                            <h4>Project: business</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eligendi consequuntur veniam quod</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-8 ">
                    <div class="single-project">
                        <img src="images/projects/p-3.jpg" alt="" class="img-fluid"/>
                        <div class="project-content">
                            <h4>Project : Marketing</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eligendi consequuntur veniam quod</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row py-4">
                <div class="col-lg-7 col-md-12 col-sm-12 ">
                    <div class="single-project">
                        <img src="images/bg/banner_bg.jpg" alt="" class="img-fluid"/>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12 ">
                    <div class="project-content-block">
                        <h4>Do you know who we are?</h4>
                        <h2>More than just service your products...</h2>
                        <p>Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and we will give you a complete account of the system.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

<section class="section" id="section-testimonial">
        <div class="container">
           <div class="row align-items-center">
                <div class="col-lg-4 col-sm-12 col-md-12">
                    <div class="section-heading testimonial-heading">
                        <h1>What they say <br/>about us</h1>
                        <p>Numquam doloribus impedit at consectetur molestiae tempora ratione possimus in veniam aperiam, eum consequuntur, unde. Earum ullam molestiae suscipit saepe sunt recusandae.</p>
                    </div>
                </div>
                <div class="col-lg-8 col-sm-12 col-md-12">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="test-inner ">
                               <div class="test-author-thumb d-flex">
                                   <img src="images/client/test-1.jpg" alt="Testimonial author" class="img-fluid"/>
                                   <div class="test-author-info">
                                       <h4>Will Barrow</h4>
                                       <h6>Sunrise Paradise Hotel</h6>
                                   </div>
                               </div>

                                Quas ut distinctio tenetur animi nihil rem, amet dolorum totam. Ab repudiandae tempore qui fugiat amet ipsa id omnis ipsam, laudantium! Dolorem.

                                <i class="fa fa-quote-right"></i>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="test-inner ">
                               <div class="test-author-thumb d-flex">
                                   <img src="images/client/test-2.jpg" alt="Testimonial author" class="img-fluid"/>
                                   <div class="test-author-info">
                                       <h4>Will Barrow</h4>
                                       <h6>Sunrise Paradise Hotel</h6>
                                   </div>
                               </div>

                                Quas ut distinctio tenetur animi nihil rem, amet dolorum totam. Ab repudiandae tempore qui fugiat amet ipsa id omnis ipsam, laudantium! Dolorem.

                                <i class="fa fa-quote-right"></i>
                            </div>
                        </div>
                    </div>
                    
                     <div class="row">
                        <div class="col-lg-6">
                            <div class="test-inner ">
                               <div class="test-author-thumb d-flex">
                                   <img src="images/client/test-3.jpg" alt="Testimonial author" class="img-fluid"/>
                                   <div class="test-author-info">
                                       <h4>Will Barrow</h4>
                                       <h6>Sunrise Paradise Hotel</h6>
                                   </div>
                               </div>

                                Quas ut distinctio tenetur animi nihil rem, amet dolorum totam. Ab repudiandae tempore qui fugiat amet ipsa id omnis ipsam, laudantium! Dolorem.

                                <i class="fa fa-quote-right"></i>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="test-inner ">
                               <div class="test-author-thumb d-flex">
                                   <img src="images/client/test-4.jpg" alt="Testimonial author" class="img-fluid"/>
                                   <div class="test-author-info">
                                       <h4>Will Barrow</h4>
                                       <h6>Sunrise Paradise Hotel</h6>
                                   </div>
                               </div>

                                Quas ut distinctio tenetur animi nihil rem, amet dolorum totam. Ab repudiandae tempore qui fugiat amet ipsa id omnis ipsam, laudantium! Dolorem.

                                <i class="fa fa-quote-right"></i>
                            </div>
                        </div>
                    </div>
                    
                     <div class="row">
                        <div class="col-lg-6">
                            <div class="test-inner">
                               <div class="test-author-thumb d-flex">
                                   <img src="images/client/test-5.jpg" alt="Testimonial author" class="img-fluid"/>
                                   <div class="test-author-info">
                                       <h4>Will Barrow</h4>
                                       <h6>Sunrise Paradise Hotel</h6>
                                   </div>
                               </div>

                                Quas ut distinctio tenetur animi nihil rem, amet dolorum totam. Ab repudiandae tempore qui fugiat amet ipsa id omnis ipsam, laudantium! Dolorem.

                                <i class="fa fa-quote-right"></i>
                            </div>
                        </div>
                        
                        <div class="col-lg-6">
                            <div class="test-inner">
                               <div class="test-author-thumb d-flex">
                                   <img src="images/client/test-6.jpg" alt="Testimonial author" class="img-fluid"/>
                                   <div class="test-author-info">
                                       <h4>Will Barrow</h4>
                                       <h6>Sunrise Paradise Hotel</h6>
                                   </div>
                               </div>

                                Quas ut distinctio tenetur animi nihil rem, amet dolorum totam. Ab repudiandae tempore qui fugiat amet ipsa id omnis ipsam, laudantium! Dolorem.

                                <i class="fa fa-quote-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
 <section class="section" id="blog">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6 text-center">
                    <div class="section-heading">
                        {/* Heading */}
                        <h2 class="section-title">
                            Read our latest news
                        </h2>

                        {/* Subheading */}
                        <p>
                            Our duty towards you is to share our experience we're reaching in our work path with you.
                        </p>
                    </div>
                </div>
            </div> {/* / .row */}

            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="blog-box">
                        <div class="blog-img-box">
                            <img src="images/blog/blog-1.jpg" alt="" class="img-fluid blog-img"/>
                        </div>
                        <div class="single-blog">
                            <div class="blog-content">
                                <h6> 17 October 2018</h6>
                                <a href="#!">
                                    <h3 class="card-title">Top tips to speed up your site in a speedy time</h3>
                                </a>
                                <p>There are many variations of passages Lorem Ipsum available, but majority have ama suffered altratio. the lorem.</p>
                                <a href="#!" class="read-more">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="blog-box">
                        <div class="blog-img-box">
                            <img src="images/blog/blog-2.jpg" alt="" class="img-fluid blog-img"/>
                        </div>
                        <div class="single-blog">
                            <div class="blog-content">
                                <h6> 17 October 2018</h6>
                                <a href="#!">
                                    <h3 class="card-title">Brand your site value with marketing strategies</h3>
                                </a>

                                <p>There are many variations of passages Lorem Ipsum available, but majority have ama suffered altratio. the lorem.</p>
                                 <a href="#!" class="read-more">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-8">
                    <div class="blog-box">
                        <div class="blog-img-box">
                            <img src="images/blog/blog-3.jpg" alt="" class="img-fluid blog-img"/>
                        </div>
                        <div class="single-blog">
                            <div class="blog-content">
                                <h6> 17 October 2018</h6>
                                <a href="#!">
                                    <h3 class="card-title">Website Optimization is very essential for site speed</h3>
                                </a>
                                <p>There are many variations of passages Lorem Ipsum available, but majority have ama suffered altratio. the lorem.</p>
                                 <a href="#!" class="read-more">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

 <Footer/>

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
 
export default Home;