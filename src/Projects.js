const Projects = () => {
  return (
    <div id="top-header">

    

    

      {/* <section id="work" className="section-bottom mt-5 bg-light">
        <div className="container pt-5">
          <div className="row justify-content-around">
            <div className="col-6 col-md-3">
              <div className="work-block" style={{
                height:"50px"
              }}>
                <img src="images/keedMobile.png" alt="work-img" className="img-fluid" />
                <div className="overlay-content-block">
                  <h4>KeedPay Mobile App</h4>
                  <p>An enhanced payment gateway system from Keed Digital Limited which allows you to transfer and receive money .</p>
                  <i className="fa fa-link"></i>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="work-block">
                <img src="images/keedWeb.png" alt="work-img" className="img-fluid" />
                <div className="overlay-content-block">
                  <h4>KeedPay Platform</h4>
                  <p>An enhanced payment gateway system from Keed Digital Limited which allows you to transfer and receive money .</p>
                  <i className="fa fa-link"></i>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 ">
              <div className="work-block">
                <img src="images/keedWeb.png" alt="work-img" className="img-fluid" />
                <div className="overlay-content-block">
                  <h4>KeedPay USSD</h4>
                  <p>An enhanced payment gateway system from Keed Digital Limited which allows you to transfer and receive money .</p>
                  <i className="fa fa-link"></i>
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-4 col-md-6 p-0">
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
      </section>*/}

        {/* navbar background */}
        <div className="" style={{height:"100px",backgroundColor:"rgba(0, 0, 0, 0.76)"}}></div>
           
           {/* =====BANNER and text==== */}
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
                                     background:"url(images/solutions.png) no-repeat scroll center/contain"
                                 }}></div>
     
                             </div>
     
                         </div>
                     </div>
                    
                 </div>

      <section className="bg-light py-5">
        <div className="section-heading">
          <h2 className="section-title text-center">Our Projects</h2>
        </div>
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-10 col-md-4">
              <div className="" style={{
                height:"350px",
              }}>
                {/* project image */}
                <div className="" style={{
                 height:"85%",
                 background:"url(images/projects/keedWeb.png) no-repeat center/contain"

                }}></div>
                <h3 className=" text-center p-2" style={{
                    height:"15%",
                }}>KeedPay Web Application</h3>
              </div>
            </div>
            <div className="col-10 col-md-4">
              <div className="" style={{
                height:"350px",
              }}>
                {/* project image */}
                <div className="" style={{
                 height:"85%",
                 background:"url(images/projects/keedMobile.png) no-repeat center/contain"


                }}></div>
                <h3 className="text-center p-2" style={{
                    height:"15%",
                }}>KeedPay Mobile Application</h3>
              </div>
            </div>
            <div className="col-10 col-md-4">
              <div className="" style={{
                height:"350px",
              }}>
                {/* project image */}
                <div className="" style={{
                 height:"85%",
                 background:"url(images/projects/keedWeb.png) no-repeat center/contain"


                }}></div>
                {/* project description */}
                <h3 className="text-center p-2" style={{
                    height:"15%",
                }}>KeedPay USSD</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-5 my-5">
        <div className="section-heading">
          <h2 className="section-title text-center">Testimonials</h2>
        </div>
        <div className="container">
          <div className="row justify-content-around">
            {/* testimonial carousel */}
            <div className="col-12 col-md-7">
              <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active bg-secondary" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" className="bg-secondary"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" className="bg-secondary"></button>
                </div>
                {/* carousel content */}
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className=" rounded-5   border bg-light d-flex justify-content-end" style={{height:"250px",position:"relative"}}>
                      {/* icon */}
                      <div className="" style={{
                        position:"absolute",
                        top:"10px",
                        left:"20px",
                        width:"100px",
                        height:"100px",
                        background:"url(images/icons/quote.png) no-repeat left"
                      }}></div>
                      {/* testimonial description */}
                     <div className=" ps-5 py-3 pe-3" style={{
                      height:"100%", width:"85%",}}>
                        <p>"testimonial Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut quia et, neque est perferendis atque, necessitatibus quidem dolorum adipisci dolore unde sint debitis pariatur, dicta odio illo a sed."</p>
                        <h4>Indrek Pari</h4>
                        <h5 className="text-muted">Keed Digital</h5>

                      </div>
                    </div>                    
                  </div>
                  <div className="carousel-item">
                      <div className=" rounded-5   border bg-light d-flex justify-content-end" style={{height:"250px",position:"relative"}}>
                          {/* icon */}
                          <div className="" style={{
                            position:"absolute",
                            top:"10px",
                            left:"20px",
                            width:"100px",
                            height:"100px",
                            background:"url(images/icons/quote.png) no-repeat left"
                          }}></div>
                          {/* testimonial description */}
                        <div className=" ps-5 py-3 pe-3" style={{
                          height:"100%", width:"85%",}}>
                            <p>"testimonial Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut quia et, neque est perferendis atque, necessitatibus quidem dolorum adipisci dolore unde sint debitis pariatur, dicta odio illo a sed."</p>
                            <h4>Indrek Pari</h4>
                            <h5 className="text-muted">Keed Digital</h5>

                          </div>
                      </div>
                  </div>
                  <div className="carousel-item">
                    <div className=" rounded-5   border bg-light d-flex justify-content-end" style={{height:"250px",position:"relative"}}>
                      {/* icon */}
                      <div className="" style={{
                        position:"absolute",
                        top:"10px",
                        left:"20px",
                        width:"100px",
                        height:"100px",
                        background:"url(images/icons/quote.png) no-repeat left"
                      }}></div>
                      {/* testimonial description */}
                     <div className=" ps-5 py-3 pe-3" style={{
                      height:"100%", width:"85%",}}>
                        <p>"testimonial Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut quia et, neque est perferendis atque, necessitatibus quidem dolorum adipisci dolore unde sint debitis pariatur, dicta odio illo a sed."</p>
                        <h4>Indrek Pari</h4>
                        <h5 className="text-muted">Keed Digital</h5>

                      </div>
                    </div>
                    
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" style={{color:"red"}}>
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            {/* testimonial image */}
            <div className="col-10 col-md-4 col-lg-4" style={{
              height:"250px",
              background:"url(images/collation.png)",
              backgroundSize:"cover",
              backgroundRepeat:"no-repeat",
              boxShadow:"0px 0px 10px grey",
              
            }}></div>
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