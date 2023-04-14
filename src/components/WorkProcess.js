const WorkProcess = () => {
    return ( 
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
                                Our software development process relies on incremental development
                                </p>

                            </div>
                        </div>
                    </div> {/* / .row */}

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="process-block">
                                <img src="images/content/analysis.jpg" alt="" className="" width="100%" height="100%" />

                                <h3>Requirement Analysis</h3>
                                <p>We review the Customer proposition, validate the projects possibility, and collect data as part of the feasibility study</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="process-block">
                                <img src="images/content/planning-2.jpg" alt="" width="100%" height="100%" />

                                <h3>Resource Planning</h3>
                                <p>The development of Customer Software architecture will require several experts in the field of software development</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="process-block">
                                <img src="images/content/prototyping.jpg" alt="" className="" width="100%" height="100%" />

                                <h3>Design and Prototyping</h3>
                                <p>We start with a prototype to align with specifications, remove design drawbacks, make changes based on customer requirements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
     );
}
 
export default WorkProcess;