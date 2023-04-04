import { Link, useLocation } from "react-router-dom";


const Header = () => {
    const location = useLocation();
    return (
        <>
            {/* LOADER TEMPLATE */}
            <div id="page-loader">
                <div className="loader-icon fa fa-spin colored-border"></div>
            </div>
            {/* /LOADER TEMPLATE */}


            {/* NAVBAR
    ================================================= */}
            <nav className="navbar navbar-expand-lg navbar-dark trans-navigation fixed-top navbar-togglable">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="images/invertedLogo.png" alt="logo" height="150px" />
                    </Link>
                    {/* Toggler */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars"></span>
                    </button>

                    {/* Collapse */}
                    <div className="collapse navbar-collapse has-dropdown" id="navbarCollapse">
                        {/* Links */}
                        <ul className="navbar-nav ml-auto">
                            <li className={`nav-item ${location?.pathname === '/' ? 'active' : ''}`}>
                                <Link className="nav-link " to="/" id="navbarWelcome" role="button"
                                    aria-haspopup="true" aria-expanded="false">
                                    Home
                                </Link>
                            </li>
                            <li className={`nav-item ${location?.pathname === '/about' ? 'active' : ''}`}>
                                <Link to="/about" className="nav-link js-scroll-trigger">
                                    About
                                </Link>
                            </li>
                            <li className={`nav-item ${location?.pathname === '/services' ? 'active' : ''}`}>
                                <Link to="/services" className="nav-link js-scroll-trigger">
                                    Services
                                </Link>
                            </li>

                            <li className={`nav-item ${location?.pathname === '/projects' ? 'active' : ''}`}>
                                <Link to="/projects" className="nav-link js-scroll-trigger">
                                    Projects
                                </Link>
                            </li>

                            <li className={`nav-item ${location?.pathname === '/contact' ? 'active' : ''}`}>
                                <Link to="/contact" className="nav-link">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div> {/* / .navbar-collapse */}
                </div> {/* / .container */}
            </nav>

        </>
    );
}

export default Header;