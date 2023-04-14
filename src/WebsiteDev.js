const WebsiteDev = () => {
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
                  <h1 className="display-4 font-weight-bold">WebSite Development</h1>
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
                            <img src="images/content/web.jpg" alt="cyber" className="img-fluid"/>
                            
                        </div>
                    </div>
                    <div className="col-12 col-lg-5">
                        <div>
                        Website design is a fundamental part of any business, and a strategic tool a business can use to attract, educate and inform consumers of their service offerings. Any traffic on a website can convert into a lead and into a customer – that’s why, we believe, it is the first and last impression a surfer has. When designing for the web, we do understand the requirements of landing pages, contact forms and much more! Our design team understands your exact requirements. As web design has progressed, so have the ways of development. One major aspect that needs to be taken care of when designing for the web is content templatization. This has a significant role to play when the design is being created. Content on a page has major impacts on readability as well as reading flow. A page with too much content, if laid out correctly, will not overwhelm the user. We pay extra attention to the content and structuring that happens on each page – ensuring our users are able to engage and read the content provided to them.
                            
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
 
export default WebsiteDev;