const Contact = () => {
  return (
    <div id="top-header">

      {/* HERO
================================================== */}
      


      {/* SECTIONS
    ================================================== */}
      {/* <section id="contact-info">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <a href="#map">
              <div className="contact-info-block text-center">
                  <i className="pe-7s-map-marker"></i>
                  <h4>Address</h4>
                  <p className="lead">E.D Sowah Avenue GD-162-6456</p>
                </div>
              </a> 
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <a href="mailto:btfalcontechnologies@gmail.com">
                  <div className="contact-info-block text-center">
                    <i className="pe-7s-mail"></i>
                    <h4>Email</h4>
                    <p className="lead">btfalcontechnologies@gmail.com</p>
                  </div>
                </a>
            </div>
           
           
            <div className="col-lg-4 col-sm-6 col-md-6">
              <a href="tel:+233508985257">
                <div className="contact-info-block text-center">
                  <i className="pe-7s-phone"></i>
                  <h4>Phone Number</h4>
                  <p className="lead">+233 (0) 508985257</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section> */}

      <section className="bg-light py-5">
        <div className="container">
        <div className="row">
                        <div className=" text-center">
                            <div className="section-heading">
                                {/* Heading */}
                                <h2 className="section-title">
                                    Contact Info
                                </h2>
                                <h4>Meet us at a Cyberteq office near you or reach us electronically. Our experts will help you to choose the proper solution for your organization and answer
all questions related to Cybersecurity, Digital Transformation & Telecommunication. </h4>

                            </div>
                        </div>
                    </div>
          <div className="row justify-content-around">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="border-right">
                <h3><i class="bi bi-pin-map-fill"></i> Office Location</h3>
                <p className="lead">
                You can reach us at the following address:
                </p>
                <h4 className="">
                Cyberteq Falcon Ltd, BJ Global Home, E.D Sowah Avenue, East Legon, Accra, Ghana
                </h4>
              </div>

            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="border-right">
                <h3><i class="bi bi-envelope-open-fill" width="300" height="32"></i> Email Address</h3>
                <p className="lead">
                Send us your questions by email and we will reply as soon as possible:</p>
                <h4 className="">
                btfalcontechnologies@gmail.com
                </h4>
              </div>

            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="">
                <h3><i class="bi bi-alarm-fill"></i> Working Hours</h3>
                <p className="lead">
                We are doing our best to secure our customers. Working hours:
                </p>
                <h4 className="">
                Mon – Fri: 8 AM – 5 PM Sat – Sun:  Closed.
                </h4>
              </div>

            </div>
          </div>
        </div>

      </section>

      <section className="section" id="contact">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-8 col-lg-6">
            
              {/* Heading */}
              <h2 className="section-title mb-2 ">
                Get In Touch 
              </h2>

              {/* Subheading */}
              <p className="mb-5 ">
              Thank you for your interest in Falcon Technologies. Please provide the following information about your business needs. This information will enable us to route your request to the appropriate person. You should receive a response within two days.
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
                        <input className="form-control" id="phone" name="phone" required placeholder="+2335011333498" type="text" />
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
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15881.625400775325!2d-0.1498856!3d5.6542124!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d79a7634f5f%3A0x96f2b3498ca794d2!2sCYBERTEQ%20Falcon%20Limited!5e0!3m2!1sen!2sgh!4v1680009150550!5m2!1sen!2sgh" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" id="map"></iframe>
              {/* END MAP */}
            </div>
          </div>
        </div>
      </section>
   


      {/*  Page Scroll to Top  */}

      <a id="scroll-to-top" className="scroll-to-top js-scroll-trigger" href="#top-header">
        <i className="fa fa-angle-up"></i>
      </a>

      

    </div>
  );
}

export default Contact;