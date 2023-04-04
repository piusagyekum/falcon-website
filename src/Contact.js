const Contact = () => {
  return (
    <div id="top-header">

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
                <p className="lead">E.D Sowah Avenue GD-162-6456</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="contact-info-block text-center">
                <i className="pe-7s-mail"></i>
                <h4>Email</h4>
                <p className="lead">btfalcontechnologies@gmail.com</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="contact-info-block text-center">
                <i className="pe-7s-phone"></i>
                <h4>Phone Number</h4>
                <p className="lead">+233 (0) 263012532</p>
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
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15881.625400775325!2d-0.1498856!3d5.6542124!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d79a7634f5f%3A0x96f2b3498ca794d2!2sCYBERTEQ%20Falcon%20Limited!5e0!3m2!1sen!2sgh!4v1680009150550!5m2!1sen!2sgh" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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