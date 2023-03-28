import Footer from "./components/Footer";

const Projects = () => {
  return (
    <div id="top-header">

      {/* HERO
================================================== */}
      <section className="page-banner-area page-project">
        <div className="overlay"></div>
        {/* Content */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-12 col-12 text-center">
              <div className="page-banner-content">
                <h1 className="display-4 font-weight-bold">We create your brand</h1>
                <p>We'd love to talk about how we can help you.</p>
              </div>
            </div>
          </div> {/* / .row */}
        </div> {/* / .container */}
      </section>

      <section id="work-wrap" style={{ marginTop: "60px", paddingTop: "40px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h1>We are trying to deliver 100% quality product and success their business to achieve ultimate goal.</h1>
              </div>
            </div>
            <div className="col-lg-6">
              <p className="lead">We are providing best service since 1990 to present , committed to best service deliveryNullam metus enim, placerat in lacus vel, porttitor egestas libero. Etiam ex risus, feugiat eget accumsan eu, sagittis eu urna. In eget ultrices metus. Nunc accumsan </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="section-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 p-0">
              <div className="work-block">
                <img src="images/work/10.jpg" alt="work-img" className="img-fluid" />
                <div className="overlay-content-block">
                  <h4>Probiz portfolio template</h4>
                  <p>Web Development</p>
                  <a href="#"><i className="fa fa-link"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-0">
              <div className="work-block">
                <img src="images/work/11.jpg" alt="work-img" className="img-fluid" />
                <div className="overlay-content-block">
                  <h4>Probiz portfolio template</h4>
                  <p>Web Development</p>
                  <a href="single-project.html"><i className="fa fa-link"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-0">
              <div className="work-block">
                <img src="images/work/12.jpg" alt="work-img" className="img-fluid" />
                <div className="overlay-content-block">
                  <h4>Probiz portfolio template</h4>
                  <p>Web Development</p>
                  <a href="single-project.html"><i className="fa fa-link"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 p-0">
              <div className="work-block">
                <img src="images/work/15.jpg" alt="work-img" className="img-fluid" />
                <div className="overlay-content-block">
                  <h4>Probiz portfolio template</h4>
                  <p>Web Development</p>
                  <a href="single-project.html"><i className="fa fa-link"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 p-0">
              <div className="work-block">
                <img src="images/work/14.jpg" alt="work-img" className="img-fluid" />
                <div className="overlay-content-block">
                  <h4>Probiz portfolio template</h4>
                  <p>Web Development</p>
                  <a href="single-project.html"><i className="fa fa-link"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 p-0">
              <div className="work-block">
                <img src="images/work/11.jpg" alt="work-img" className="img-fluid" />
                <div className="overlay-content-block">
                  <h4>Probiz portfolio template</h4>
                  <p>Web Development</p>
                  <a href="single-project.html"><i className="fa fa-link"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 p-0">
              <div className="work-block">
                <img src="images/work/10.jpg" alt="work-img" className="img-fluid" />
                <div className="overlay-content-block">
                  <h4>Probiz portfolio template</h4>
                  <p>Web Development</p>
                  <a href="single-project.html"><i className="fa fa-link"></i></a>
                </div>
              </div>
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

export default Projects;