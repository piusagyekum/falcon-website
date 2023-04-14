const CustomSoftware = () => {
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
                  <h1 className="display-4 font-weight-bold">Custom Software Development</h1>
                  <p></p>
                </div>
              </div>
            </div> {/* / .row */}
          </div> {/* / .container */}
        </section>

        <section>
            <div className="container my-5 py-5">
                <div className="row justify-content-around">
                    <div className="col-12 col-lg-5">
                        <div >
                            <img src="images/content/custom.jpg" alt="cyber" className="img-fluid"/>
                            
                        </div>
                    </div>
                    <div className="col-12 col-lg-5">
                        <div>
                        This involves developing software solutions that are tailored to the specific needs of a business or organization, such as a custom web application, mobile app, or enterprise software                
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
 
export default CustomSoftware;