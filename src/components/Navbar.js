import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
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
       
        <li className="nav-item ">
          <Link to="/" className="nav-link js-scroll-trigger">
            Home
          </Link>
        </li>
        <li className="nav-item ">
          <Link to="/About" className="nav-link js-scroll-trigger">
            About
          </Link>
        </li>
        <li className="nav-item ">
          <Link to="/Services" className="nav-link js-scroll-trigger">
            Services
          </Link>
        </li>
        <li className="nav-item ">
          <Link to="project.html" className="nav-link js-scroll-trigger">
            Projects
          </Link>
        </li>

        <li className="nav-item ">
          <Link to="contact.html" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </div> {/* / .navbar-collapse */}
  </div> {/* / .container */}
</nav>
     );
}
 
export default Navbar;