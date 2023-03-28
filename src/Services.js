import Footer from "./components/Footer";
import ServicesSummary from "./components/ServicesSummary";
import {Link} from "react-router-dom"
import Navbar from "./components/Navbar";

const Services = () => {
    return ( 
        <div id="top-header">
{/* LOADER TEMPLATE */}
<div id="page-loader">
  <div class="loader-icon fa fa-spin colored-border"></div>
</div>
{/* /LOADER TEMPLATE */}


{/* NAVBAR
    ================================================= */}

<Navbar/>


   {/* HERO
    ================================================== */}
    <section class="page-banner-area page-service">
        <div class="overlay"></div>
        {/* Content */}
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-9 col-md-12 col-12 text-center">
                    <div class="page-banner-content">
                        <h1 class="display-4 font-weight-bold">Web & Cloud services</h1>
                        <p>We'd love to talk about how we can help you.</p>
                    </div>
                </div>
            </div> {/* / .row */}
        </div> {/* / .container */}
    </section>



<section class="section" id="service">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-7 pl-4 text-center">
                    <div class="service-heading">
                        <h1>We Provide The Best Software Services</h1>
                        <p>Our Portfolio includes the following: UI/UX Design, Web/Mobile Application Development, USSD Application Development, Enterprise Solutions, Deployment of State of the Art PABX for Enterprise, IT Consulting Services, Tech Support/Consulting in Cloud Service Setup</p>
                    </div>
                </div>
            </div>    
        </div>
    </section>

<ServicesSummary/>

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


<Footer/>


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
 
export default Services;