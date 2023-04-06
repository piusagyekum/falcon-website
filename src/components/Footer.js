import {Link} from 'react-router-dom';

const Footer = () => {
    return ( 
        <>
        <footer className="section " id="footer">
   <div className="overlay footer-overlay"></div>
   {/*Content */}
   <div className="container">
     <div className="row justify-content-start">
       <div className="col-lg-4 col-sm-12">
         <div className="footer-widget">
           {/* Brand */}
           <a href="/" className="footer-brand text-white">
              Falcon Technologies
           </a>
           <p>Unleashing the power of code to transform your vision into reality. Our innovative solutions are engineered to revolutionize your business. From idea to implementation, we make your digital dreams a reality. Let us help you take your business to the next level with our expertise and innovation!</p>
         </div>
       </div>

       <div className="col-lg-3 ml-lg-auto col-sm-12">
         <div className="footer-widget">
           <h3>Services</h3>
           {/* Links */}
           <ul className="footer-links ">
             <li>
               <a href="/cybersecurity">
               Cyber Security Consulting               </a>
             </li>
             <li>
               <a href="/mobileapp">
               Mobile Application Development               </a>
             </li>
             <li>
               <a href="/softwaresolution">
               Custom Enterprise Software Soluton
               </a>
             </li>
             <li>
               <a href="/support">
               Tech Support Services               </a>
             </li>
             <li>
               <a href="/websitedevelopment">
               WebSite Development               </a>
             </li>
           </ul>
         </div>
       </div>


       <div className="col-lg-2 col-sm-6">
         <div className="footer-widget">
           <h3>Quicklinks</h3>
           {/* Links */}
           <ul className="footer-links">
            <li>
              <Link to="/About">
                About Us
              </Link>
            </li>
             <li>
               <Link to="/Services">
                 Services
               </Link>
             </li>
             <li>
               <Link to="/Projects">
                Recent Projects
               </Link>
             </li>

             <li>
               <Link to="/Contact">
                 Contact
               </Link>
             </li>
           </ul>
         </div>
       </div>

       <div className="col-lg-2 col-sm-6">
         <div className="footer-widget">
           <h3>Socials</h3>
           {/* Links */}
           <ul className="list-unstyled footer-links">
             
             <li><a href="https://www.linkedin.com/company/93126965/admin/"><i className="fab fa-linkedin"></i>linkedin
               </a></li>
             <li><a href="https://www.instagram.com/falcontechgh/"><i className="fab fa-instagram"></i>Instagram
               </a></li>
           </ul>
         </div>
       </div>
     </div> {/* / .row */}


     <div className="row text-right pt-5">
       <div className="col-lg-12">
         <div className="overflow-hidden">
           {/* Copyright */}
          <p className="footer-copy">
            Copyright &copy; <script>var CurrentYear = new Date().getFullYear()
            document.write(CurrentYear)
          </script>. Designed &amp; Developed by Falcon Technologies
          </p>
         </div>
       </div>
     </div> {/* / .row */}
   </div> {/* / .container */}
 </footer>



 <a id="scroll-to-top" className="scroll-to-top js-scroll-trigger" href="#top-header">
   <i className="fa fa-angle-up"></i>
 </a>
 </>
     );
}
 
export default Footer;