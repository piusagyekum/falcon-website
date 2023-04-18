const WhatWeDo = () => {
    return ( 
        <div className="">
          <section className="">
            {/* navbar background */}
            <div className="" style={{height:"100px",backgroundColor:"rgba(0, 0, 0, 0.76)"}}></div>
            {/* banner */}
            <div className="" style={{background:"url(images/banner-2.png) no-repeat scroll left/cover", height:"400px", width:"100%"}}>
                {/* Image */}
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-10 col-md-5">
                            <div className="d-none d-md-block" style={{
                                height:"400px",
                                background:"url(images/computer-screen.png) no-repeat scroll center/contain"
                            }}></div>
                            
                        </div>
                        {/* Words */}
                        <div className="col-10 col-md-5">
                        <div className="" style={{
                                height:"400px",
                                background:"url(images/unleashing.png) no-repeat scroll center/contain"
                            }}></div>

                        </div>

                    </div>
                </div>
               
            </div>
          </section>
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
                            <h3 className="text-center">USSD Services</h3>
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
           <section className="my-5 py-5 bg-light">
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
                <div className="row justify-content-around g-5 g-md-auto">
                    <div className="col-10 col-md-6 col-lg-4 col-xxl-3">
                        <div className="item1">
                            <div className="part1 bg-white" style={{
                                width:"100%",
                                height:"40%",
                                backgroundImage:"url(images/icons/requirement-analysis.png)",
                                backgroundRepeat:"no-repeat",
                                backgroundPosition:"center",
                                position:"relative"
                                }}></div>
                            <div className="part2 p-3" style={{width:"100%",height:"60%",textAlign:"center",backgroundColor:"#202020",color:"white"}}>
                                <h3 className="text-white">Requirement Analysis</h3>
                                <p>We review the Customer proposition, validate the projects possibility, and collect data as part of the feasibility study</p>
                                
                                <button className="invRead">READ MORE</button>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-10 col-md-6 col-lg-4 col-xxl-3">
                        <div className="item1">
                            <div className="part1" style={{
                                width:"100%",
                                height:"40%",
                                backgroundImage:"url(images/icons/resource-planning.png)",
                                backgroundRepeat:"no-repeat",
                                backgroundPosition:"center",
                                }}></div>
                            <div className="p-3 part2" style={{width:"100%",height:"60%",textAlign:"center",backgroundColor:"#202020",color:"white",position:"relative"}}>
                                <h3 className="text-white">Resource Planning</h3>
                                <p>The development of Customer Software architecture will require several experts in the field of software development</p>
                                
                                <button className="invRead">READ MORE</button>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-10 col-md-6 col-lg-4 col-xxl-3">
                        <div className="item1">
                            <div className="part1" style={{
                                width:"100%",
                                height:"40%",
                                backgroundImage:"url(images/icons/prototyping.png)",
                                backgroundRepeat:"no-repeat",
                                backgroundPosition:"center",
                                }}></div>
                            <div className=" part2 p-3" style={{width:"100%",height:"60%",textAlign:"center",backgroundColor:"#202020",color:"white"}}>
                                <h3 className="text-white">Design and Prototyping</h3>
                                <p>We start with a prototype to align with specifications, remove design drawbacks, make changes based on customer requirements.</p>
                                <button className="invRead">READ MORE</button>
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