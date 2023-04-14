const MobileApp = () => {
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
                  <h1 className="display-4 font-weight-bold">Mobile Application Development</h1>
                  <p>We provide build native and cross-platform apps to support your requirements</p>
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
                            <img src="images/content/mobile-1.jpg" alt="cyber" className="" width="100%" height="450px"/>
                            
                        </div>
                    </div>
                    <div className="col-12 col-lg-5">
                        <div>
                        At Falcon Technologies, we have the experience team who understand and have the ability to build native and cross-platform apps to support your requirements. Working cross-industry and with varying levels of development needs, we have a deep understanding on how humans interact with technology. Be it an app used locally within your organization or market or one that is mass-market, we are here to provide the competitiveness your app needs. Be it on an Android or Iphone device, we ensure that the functionality and usability follows the same flow. Some mobile apps, depending on the device, can have more or less functionality, meaning that the design process and showcase to customer – is very much in the company’s hands. 
                            
                        </div>
                    </div>
                </div>
                <div className="row justify-content-around my-5 pt-5">
                    <div className="col-12 col-lg-5">
                        <div >
                        At Falcon Technologies, we have the experience team who understand and have the ability to build native and cross-platform apps to support your requirements. Working cross-industry and with varying levels of development needs, we have a deep understanding on how humans interact with technology. Be it an app used locally within your organization or market or one that is mass-market, we are here to provide the competitiveness your app needs. Be it on an Android or Iphone device, we ensure that the functionality and usability follows the same flow. Some mobile apps, depending on the device, can have more or less functionality, meaning that the design process and showcase to customer – is very much in the company’s hands. 
                           
                            
                        </div>
                    </div>
                    <div className="col-12 col-lg-5">
                        <div>
                        <img src="images/content/mobile-2.jpg" alt="cyber" className="" width="100%" height="450px"/>
                            
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
 
export default MobileApp;