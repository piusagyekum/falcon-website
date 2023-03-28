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

     <ServicesSummary/>

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





      {/*  Page Scroll to Top  */}

      <a id="scroll-to-top" className="scroll-to-top js-scroll-trigger" href="#top-header">
        <i className="fa fa-angle-up"></i>
      </a>

     
    </div>

  );
}

export default Services;