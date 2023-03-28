import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Contact = () => {
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
<section class="page-banner-area page-contact">
    <div class="overlay"></div>
    {/* Content */}
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-9 col-md-12 col-12 text-center">
                <div class="page-banner-content">
                    <h1 class="display-4 font-weight-bold">Got a question?</h1>
                    <p>We'd love to talk about how we can help you.</p>
                </div>
            </div>
        </div> {/* / .row */}
    </div> {/* / .container */}
</section>


  {/* SECTIONS
    ================================================== */}
    <section id="contact-info">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="contact-info-block text-center">
                        <i class="pe-7s-map-marker"></i>
                        <h4>Address</h4>
                        <p class="lead">E.D Sowah Avenue GD-162-6456</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="contact-info-block text-center">
                        <i class="pe-7s-mail"></i>
                        <h4>Email</h4>
                        <p class="lead">btfalcontechnologies@gmail.com</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 col-md-6">
                    <div class="contact-info-block text-center">
                        <i class="pe-7s-phone"></i>
                        <h4>Phone Number</h4>
                        <p class="lead">+233(0)263012532</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section" id="contact">
        <div class="container">
            <div class="row mb-4">
                <div class="col-md-8 col-lg-6">
                    <h5>Leave a Message</h5>
                    {/* Heading */}
                    <h2 class="section-title mb-2 ">
                        Tell us about <span class="font-weight-normal">yourself</span>
                    </h2>

                    {/* Subheading */}
                    <p class="mb-5 ">
                        Whether you have questions or you would just like to say hello, contact us.
                    </p>

                </div>
            </div> {/* / .row */}

            <div class="row">
                <div class="col-lg-6">
                   {/* form message */}
                    <div class="row">
                        <div class="col-12">
                            <div class="alert alert-success contact__msg" style={{display: "none"}} role="alert">
                                Your message was sent successfully.
                            </div>
                        </div>
                    </div>
                    {/* end message */}
                    {/* Contacts Form */}
                    <form class="contact_form" action="mail.php">
                        <div class="row">
                            {/* Input */}
                            <div class="col-sm-6 mb-6">
                                <div class="form-group">
                                    <label class="h6 small d-block text-uppercase">
                                        Your name
                                        <span class="text-danger">*</span>
                                    </label>

                                    <div class="input-group">
                                        <input class="form-control" name="name" id="name" required="" placeholder="John Doe" type="text"/>
                                    </div>
                                </div>
                            </div>
                            {/* End Input */}

                            {/* Input */}
                            <div class="col-sm-6 mb-6">
                                <div class="form-group">
                                    <label class="h6 small d-block text-uppercase">
                                        Your email address
                                        <span class="text-danger">*</span>
                                    </label>

                                    <div class="input-group ">
                                        <input class="form-control" name="email" id="email" required="" placeholder="john@gmail.com" type="email"/>
                                    </div>
                                </div>
                            </div>
                            {/* End Input */}

                            <div class="w-100"></div>

                            {/* Input */}
                            <div class="col-sm-6 mb-6">
                                <div class="form-group">
                                    <label class="h6 small d-block text-uppercase">
                                        Subject
                                        <span class="text-danger">*</span>
                                    </label>

                                    <div class="input-group">
                                        <input class="form-control" name="subject" id="subject" required="" placeholder="Web design" type="text"/>
                                    </div>
                                </div>
                            </div>
                            {/* End Input */}

                            {/* Input */}
                            <div class="col-sm-6 mb-6">
                                <div class="form-group">
                                    <label class="h6 small d-block text-uppercase">
                                        Your Phone Number
                                        <span class="text-danger">*</span>
                                    </label>

                                    <div class="input-group ">
                                        <input class="form-control" id="phone" name="phone" required="" placeholder="1-800-643-4500" type="text"/>
                                    </div>
                                </div>
                            </div>
                            {/* End Input */}
                        </div>

                        {/* Input */}
                        <div class="form-group mb-5">
                            <label class="h6 small d-block text-uppercase">
                                How can we help you?
                                <span class="text-danger">*</span>
                            </label>

                            <div class="input-group">
                                <textarea class="form-control" rows="4" name="message" id="message" required="" placeholder="Hi there, I would like to ..."></textarea>
                            </div>
                        </div>
                        {/* End Input */}

                        <div class="">
                           <input name="submit" type="submit" class="btn btn-primary btn-circled" value="Send Message"/>
                           
                            <p class="small pt-3">We'll get back to you in 1-2 business days.</p>
                        </div>
                    </form>
                    {/* End Contacts Form */}
                </div>

                <div class="col-lg-6 col-md-6">
                    {/* START MAP */}
                    <div id="map" ></div>
                    {/* END MAP */}
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
 
export default Contact;