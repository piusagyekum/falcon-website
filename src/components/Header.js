const Header = () => {
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
                    <a className="navbar-brand" href="/">
                        <h3>Rappo</h3>
                    </a>
                    {/* Toggler */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars"></span>
                    </button>

                    {/* Collapse */}
                    <div className="collapse navbar-collapse has-dropdown" id="navbarCollapse">
                        {/* Links */}
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link " href="/" id="navbarWelcome" role="button"
                                    aria-haspopup="true" aria-expanded="false">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a href="/about" className="nav-link js-scroll-trigger">
                                    About
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a href="/services" className="nav-link js-scroll-trigger">
                                    Services
                                </a>
                            </li>

                            <li className="nav-item ">
                                <a href="/projects" className="nav-link js-scroll-trigger">
                                    Projects
                                </a>
                            </li>

                            <li className="nav-item ">
                                <a href="/contact" className="nav-link">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div> {/* / .navbar-collapse */}
                </div> {/* / .container */}
            </nav>

        </>
    );
}

export default Header;