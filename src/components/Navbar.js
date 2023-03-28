import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav class="navbar navbar-expand-lg navbar-dark trans-navigation fixed-top navbar-togglable">
  <div class="container">
    <a class="navbar-brand" href="/">
      <h3>Rappo</h3>
    </a>
    {/* Toggler */}
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
      aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="fa fa-bars"></span>
    </button>

    {/* Collapse */}
    <div class="collapse navbar-collapse has-dropdown" id="navbarCollapse">
      {/* Links */}
      <ul class="navbar-nav ml-auto">
       
        <li class="nav-item ">
          <Link to="/" class="nav-link js-scroll-trigger">
            Home
          </Link>
        </li>
        <li class="nav-item ">
          <Link to="/About" class="nav-link js-scroll-trigger">
            About
          </Link>
        </li>
        <li class="nav-item ">
          <Link to="/Services" class="nav-link js-scroll-trigger">
            Services
          </Link>
        </li>
        <li class="nav-item ">
          <Link to="project.html" class="nav-link js-scroll-trigger">
            Projects
          </Link>
        </li>

        <li class="nav-item ">
          <Link to="contact.html" class="nav-link">
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