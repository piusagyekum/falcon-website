import ServicesSummary from "./components/ServicesSummary";
import { Link } from "react-router-dom"
import Navbar from "./components/Navbar";
import WorkProcess from "./components/WorkProcess";

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

      {/* =========working process================ */}
      <WorkProcess/>





      {/*  Page Scroll to Top  */}

      <a id="scroll-to-top" className="scroll-to-top js-scroll-trigger" href="#top-header">
        <i className="fa fa-angle-up"></i>
      </a>

     
    </div>

  );
}

export default Services;