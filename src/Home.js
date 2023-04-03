import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import ServicesSummary from './components/ServicesSummary';



const Home = () => {
    return (
        <div id="top-header">

            {/* //LOADER TEMPLAT */}

            <div id="page-loader">
                <div className="loader-icon fa fa-spin colored-border"></div>
            </div>
            {/* /LOADER TEMPLATE */}

            <div className="top-bar bg-dark py-2 py-md-0" id="top-bar">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="top-bar-left text-white text-md-left text-sm-center">
                                <i className="fas fa-map-marker-alt"></i>
                                <span className="ml-2">E.D Sowah Avenue GD-162-6456</span>
                            </div>
                        </div>

                        <div className="col-lg-4 ml-lg-auto col-md-6">
                            <ul className="list-inline list-unstyled header-socials text-md-right text-sm-center">
                                <li className="list-inline-item"><a href="https://www.instagram.com/falcontechgh/"> <i className="fab fa-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="https://www.linkedin.com/company/93126965/admin/"> <i className="fab fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="logo-bar d-none d-md-block d-lg-block bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="logo d-none d-lg-block">
                                {/* Brand */}
                                {/* <a className="navbar-brand js-scroll-trigger" href="index.html">
                                    <h2 className="mb-0">Rappo</h2>
                                </a> */}

                                <img src="images/logoOnly.png" alt="logo" height="60px"/>
                                <h3 className="font-weight-500 d-inline-block">Falcon Technologies</h3>

                            </div>
                        </div>

                        <div className="col-lg-8 justify-content-end ml-lg-auto d-flex col-12 col-md-12 justify-content-md-center">
                            <div className="top-info-block d-inline-flex">
                                <div className="icon-block">
                                    <i className="ti-mobile"></i>
                                </div>
                                <div className="info-block">
                                    <h5 className="font-weight-500">+233(0)263012532</h5>
                                    <p>Call</p>
                                </div>
                            </div>

                            <div className="top-info-block d-inline-flex">
                                <div className="icon-block">
                                    <i className="ti-email"></i>
                                </div>
                                <div className="info-block">
                                    <h5 className="font-weight-500">btfalcontechnologies@gmail.com</h5>
                                    <p>Email Us</p>
                                </div>
                            </div>
                            <div className="top-info-block d-inline-flex">
                                <div className="icon-block">
                                    <i className="ti-time"></i>
                                </div>
                                <div className="info-block">
                                    <h5 className="font-weight-500">Mon-Fri 9:00-17.00 </h5>
                                    <p>Open</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* NAVBAR  ================================================= */}
            <div className="main-navigation" id="mainmenu-area">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary main-nav navbar-togglable rounded-radius">

                        <a className="navbar-brand d-lg-none d-block" href="/">
                            <h4 className="h3 mb-0">Rappo</h4>
                        </a>
                        {/* Toggler */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="fa fa-bars"></span>
                        </button>

                        {/* Collapse */}
                        <div className="collapse navbar-collapse has-dropdown" id="navbarCollapse">
                            {/* Links */}
                            <ul className="navbar-nav ">
                                <li className="nav-item dropdown">
                                    <Link className="nav-link" to="/" id="navbarWelcome" role="button"
                                        aria-haspopup="true" aria-expanded="false">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link js-scroll-trigger">
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to="/services" className="nav-link js-scroll-trigger">
                                        Services
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to="/projects" className="nav-link js-scroll-trigger">
                                        Projects
                                    </Link>
                                </li>

                                <li className="nav-item ">
                                    <Link to="/contact" className="nav-link">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div> {/* / .container */}
            </div>



            {/* HERO
    ================================================== */}
            <section className="banner-area py-7">
                {/* Content */}
                <div className="container">
                    <div className="row  align-items-center">
                        <div className="col-md-12 col-lg-7 text-center text-lg-left">
                            <div className="main-banner">
                                {/* Heading */}
                                <h1 className="display-4 mb-4 font-weight-normal">
                                    Software Solutions for ambitious brands and ideas
                                </h1>

                                {/* Subheading */}
                                <p className="lead mb-4">
                                    Unleashing the power of code to transform your vision into reality. Our innovative solutions are engineered to revolutionize your business. From idea to implementation, we make your digital dreams a reality. Let us help you take your business to the next level with our expertise and innovation!
                                </p>

                                {/* Button */}
                                <p className="mb-0">
                                    <Link to="/contact" target="_blank" className="btn btn-primary btn-circled">
                                        Want to start a project
                                    </Link>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-5 d-none d-lg-block">
                            <div className="banner-img-block">
                                <img src="images/banner-img-5.png" alt="banner-img" className="img-fluid" />
                            </div>
                        </div>
                    </div> {/* / .row */}
                </div> {/* / .container */}
            </section>





            {/* SERVICE-1
    ================================================== */}
            <section className="bg-grey" id="service">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-4">
                            <div className="service-img">
                                <img src="images/blog-lg.jpg" alt="" className="img-fluid" />
                            </div>
                        </div>

                        <div className="col-lg-6 pl-4">
                            <div className="service-content">
                                <h1>Get a better deal and start saving money today</h1>
                                <p>We compare hundreds of leading products and plans across many categories to bring you the best value for money.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-5 service-wrap">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-8 offset-lg-4">
                            <div className="carousel slide " id="service-carousel" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="service-block media">
                                                        <div className="service-icon">
                                                            <i className="ti-reload"></i>
                                                        </div>
                                                        <div className="service-inner-content media-body">
                                                            <h4>Backup System</h4>
                                                            <p>Our team are experts in matching you with the right provider.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="service-block media">
                                                        <div className="service-icon">
                                                            <i className="ti-cloud"></i>
                                                        </div>
                                                        <div className="service-inner-content media-body">
                                                            <h4>Cloud Hosting</h4>
                                                            <p>Our team are experts in matching you with the right provider.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="service-block media">
                                                        <div className="service-icon">
                                                            <i className="ti-world"></i>
                                                        </div>
                                                        <div className="service-inner-content media-body">
                                                            <h4>Web hosting</h4>
                                                            <p>Our team are experts in matching you with the right provider.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="service-block media">
                                                        <div className="service-icon">
                                                            <i className="ti-server"></i>
                                                        </div>
                                                        <div className="service-inner-content media-body">
                                                            <h4>Office Cloud</h4>
                                                            <p>Our team are experts in matching you with the right provider.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <p className="pl-3">Want to know more about this? <Link to="/contact">Contact us</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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


        <ServicesSummary/>
           

            <section className="section" id="projects-wrap">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h1 className="text-white">We deliver 100% quality product and success to businesses to achieve their ultimate goal.</h1>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <p className="lead text-white">We are providing best service since 1990 to present , committed to best service delivery.Nullam metus enim, placerat in lacus vel, porttitor egestas libero. Etiam ex risus, feugiat eget accumsan eu, sagittis eu urna. In eget ultrices metus. Nunc accumsan </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="section-bottom">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
                            <div className="single-project">
                                <img src="images/projects/p-1.jpg" alt="" className="img-fluid" />
                                <div className="project-content">
                                    <h4>Project: onepage</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eligendi consequuntur veniam quod</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
                            <div className="single-project">
                                <img src="images/projects/p-4.jpg" alt="" className="img-fluid" />
                                <div className="project-content">
                                    <h4>Project: business</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eligendi consequuntur veniam quod</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8 ">
                            <div className="single-project">
                                <img src="images/projects/p-3.jpg" alt="" className="img-fluid" />
                                <div className="project-content">
                                    <h4>Project : Marketing</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eligendi consequuntur veniam quod</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row py-4">
                        <div className="col-lg-7 col-md-12 col-sm-12 ">
                            <div className="single-project">
                                <img src="images/bg/banner_bg.jpg" alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 ">
                            <div className="project-content-block">
                                <h4>Do you know who we are?</h4>
                                <h2>More than just service your products...</h2>
                                <p>Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and we will give you a complete account of the system.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="section-testimonial">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-sm-12 col-md-12">
                            <div className="section-heading testimonial-heading">
                                <h1>What they say <br />about us</h1>
                                <p>Numquam doloribus impedit at consectetur molestiae tempora ratione possimus in veniam aperiam, eum consequuntur, unde. Earum ullam molestiae suscipit saepe sunt recusandae.</p>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-12 col-md-12">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="test-inner ">
                                        <div className="test-author-thumb d-flex">
                                            <img src="images/client/test-1.jpg" alt="Testimonial author" className="img-fluid" />
                                            <div className="test-author-info">
                                                <h4>Will Barrow</h4>
                                                <h6>Sunrise Paradise Hotel</h6>
                                            </div>
                                        </div>

                                        Quas ut distinctio tenetur animi nihil rem, amet dolorum totam. Ab repudiandae tempore qui fugiat amet ipsa id omnis ipsam, laudantium! Dolorem.

                                        <i className="fa fa-quote-right"></i>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="test-inner ">
                                        <div className="test-author-thumb d-flex">
                                            <img src="images/client/test-2.jpg" alt="Testimonial author" className="img-fluid" />
                                            <div className="test-author-info">
                                                <h4>Will Barrow</h4>
                                                <h6>Sunrise Paradise Hotel</h6>
                                            </div>
                                        </div>

                                        Quas ut distinctio tenetur animi nihil rem, amet dolorum totam. Ab repudiandae tempore qui fugiat amet ipsa id omnis ipsam, laudantium! Dolorem.

                                        <i className="fa fa-quote-right"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="test-inner ">
                                        <div className="test-author-thumb d-flex">
                                            <img src="images/client/test-3.jpg" alt="Testimonial author" className="img-fluid" />
                                            <div className="test-author-info">
                                                <h4>Will Barrow</h4>
                                                <h6>Sunrise Paradise Hotel</h6>
                                            </div>
                                        </div>

                                        Quas ut distinctio tenetur animi nihil rem, amet dolorum totam. Ab repudiandae tempore qui fugiat amet ipsa id omnis ipsam, laudantium! Dolorem.

                                        <i className="fa fa-quote-right"></i>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="test-inner ">
                                        <div className="test-author-thumb d-flex">
                                            <img src="images/client/test-4.jpg" alt="Testimonial author" className="img-fluid" />
                                            <div className="test-author-info">
                                                <h4>Will Barrow</h4>
                                                <h6>Sunrise Paradise Hotel</h6>
                                            </div>
                                        </div>

                                        Quas ut distinctio tenetur animi nihil rem, amet dolorum totam. Ab repudiandae tempore qui fugiat amet ipsa id omnis ipsam, laudantium! Dolorem.

                                        <i className="fa fa-quote-right"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="test-inner">
                                        <div className="test-author-thumb d-flex">
                                            <img src="images/client/test-5.jpg" alt="Testimonial author" className="img-fluid" />
                                            <div className="test-author-info">
                                                <h4>Will Barrow</h4>
                                                <h6>Sunrise Paradise Hotel</h6>
                                            </div>
                                        </div>

                                        Quas ut distinctio tenetur animi nihil rem, amet dolorum totam. Ab repudiandae tempore qui fugiat amet ipsa id omnis ipsam, laudantium! Dolorem.

                                        <i className="fa fa-quote-right"></i>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="test-inner">
                                        <div className="test-author-thumb d-flex">
                                            <img src="images/client/test-6.jpg" alt="Testimonial author" className="img-fluid" />
                                            <div className="test-author-info">
                                                <h4>Will Barrow</h4>
                                                <h6>Sunrise Paradise Hotel</h6>
                                            </div>
                                        </div>

                                        Quas ut distinctio tenetur animi nihil rem, amet dolorum totam. Ab repudiandae tempore qui fugiat amet ipsa id omnis ipsam, laudantium! Dolorem.

                                        <i className="fa fa-quote-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section" id="blog">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 text-center">
                            <div className="section-heading">
                                {/* Heading */}
                                <h2 className="section-title">
                                    Read our latest news
                                </h2>

                                {/* Subheading */}
                                <p>
                                    Our duty towards you is to share our experience we're reaching in our work path with you.
                                </p>
                            </div>
                        </div>
                    </div> {/* / .row */}

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-box">
                                <div className="blog-img-box">
                                    <img src="images/blog/blog-1.jpg" alt="" className="img-fluid blog-img" />
                                </div>
                                <div className="single-blog">
                                    <div className="blog-content">
                                        <h6> 17 October 2018</h6>
                                        <a href="#!">
                                            <h3 className="card-title">Top tips to speed up your site in a speedy time</h3>
                                        </a>
                                        <p>There are many variations of passages Lorem Ipsum available, but majority have ama suffered altratio. the lorem.</p>
                                        <a href="#!" className="read-more">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="blog-box">
                                <div className="blog-img-box">
                                    <img src="images/blog/blog-2.jpg" alt="" className="img-fluid blog-img" />
                                </div>
                                <div className="single-blog">
                                    <div className="blog-content">
                                        <h6> 17 October 2018</h6>
                                        <a href="#!">
                                            <h3 className="card-title">Brand your site value with marketing strategies</h3>
                                        </a>

                                        <p>There are many variations of passages Lorem Ipsum available, but majority have ama suffered altratio. the lorem.</p>
                                        <a href="#!" className="read-more">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-8">
                            <div className="blog-box">
                                <div className="blog-img-box">
                                    <img src="images/blog/blog-3.jpg" alt="" className="img-fluid blog-img" />
                                </div>
                                <div className="single-blog">
                                    <div className="blog-content">
                                        <h6> 17 October 2018</h6>
                                        <a href="#!">
                                            <h3 className="card-title">Website Optimization is very essential for site speed</h3>
                                        </a>
                                        <p>There are many variations of passages Lorem Ipsum available, but majority have ama suffered altratio. the lorem.</p>
                                        <a href="#!" className="read-more">Read More</a>
                                    </div>
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

export default Home;