const WhatWeDo = () => {
    return ( 
        <div className="bg-black-70">
          <div className="bg-black">
          <div className="container py-5">
            <div className="row">
                    <div className="col-10 col-md-6">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="images/content/cyber1.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src="images/content/cyber2.jpg" class="d-block w-100" alt="..."/>
                    </div>                   
                </div>
            </div>
                    </div>
                    <div className="col">
                    UNLEASHING the power of code to TRANSFORM your vision into REALITY.
                    </div>
                </div>
           </div>
          </div>
          {/* ==========SERVICES SECTION=========== */}
           <section className="my-5">
           <div className="container ">
           <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 text-center">
                            <div className="section-heading">
                                {/* Heading */}
                                <h2 className="section-title">
                                    Our Services
                                </h2>
                            </div>
                        </div>
                    </div>
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="item bg-muted">
                            <div style={{width:"100%",height:"70%",backgroundColor:"inherit"}}>
                                <h3 className="text-center">Fintech Solutions</h3>
                            </div>
                            <div style={{width:"100%",height:"30%",textAlign:"center"}}>
                                <button className="read">READ MORE</button>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="item">
                            <div style={{width:"100%",height:"70%"}}>
                                <h3 className="text-center">Mobile Application Development</h3>
                            </div>
                            <div style={{width:"100%",height:"30%",textAlign:"center"}}>
                                <button className="read">READ MORE</button>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="item">
                            <div style={{width:"100%",height:"70%"}}>
                            <h3 className="text-center">Tech Support Services</h3>
                            </div>
                            <div style={{width:"100%",height:"30%",textAlign:"center"}}>
                                <button className="read">READ MORE</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
           </section>
           {/* ========METHODOLOGY========== */}
           <section className="my-5">
           <div className="container ">
           <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 text-center">
                            <div className="section-heading">
                                {/* Heading */}
                                <h2 className="section-title">
                                    Our Working process
                                </h2>

                                {/* Subheading */}
                                <p>
                                Our software development process relies on incremental development
                                </p>

                            </div>
                        </div>
                    </div> {/* / .row */}
                <div className="row justify-content-around">
                    <div className="col-12 col-lg-3">
                        <div className="item1">
                            <div style={{
                                width:"100%",
                                height:"40%",
                                backgroundImage:"url(images/icons/requirement-analysis.png)",
                                backgroundRepeat:"no-repeat",
                                backgroundPosition:"center",
                                }}></div>
                            <div style={{width:"100%",height:"60%",textAlign:"center",backgroundColor:"black",color:"white"}}>
                            <h3>Requirement Analysis</h3>
                                <p>We review the Customer proposition, validate the projects possibility, and collect data as part of the feasibility study</p>
                                <button className="read">READ MORE</button>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="item1">
                            <div style={{
                                width:"100%",
                                height:"40%",
                                backgroundImage:"url(images/icons/resource-planning.png)",
                                backgroundRepeat:"no-repeat",
                                backgroundPosition:"center",
                                }}></div>
                            <div style={{width:"100%",height:"60%",textAlign:"center",backgroundColor:"black",color:"white"}}>
                            <h3>Resource Planning</h3>
                                <p>The development of Customer Software architecture will require several experts in the field of software development</p>
                                <button className="read">READ MORE</button>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="item1">
                            <div style={{
                                width:"100%",
                                height:"40%",
                                backgroundImage:"url(images/icons/prototyping.png)",
                                backgroundRepeat:"no-repeat",
                                backgroundPosition:"center",
                                }}></div>
                            <div style={{width:"100%",height:"60%",textAlign:"center",backgroundColor:"#202020",color:"white"}}>
                            <h3>Design and Prototyping</h3>
                                <p>We start with a prototype to align with specifications, remove design drawbacks, make changes based on customer requirements.</p>
                                <button className="read">READ MORE</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
           </section>
           
          
        </div>
     );
}
 
export default WhatWeDo;