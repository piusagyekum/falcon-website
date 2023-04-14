const Cyber = () => {
    return ( 
        <div id="top-header">

        {/* HERO
  ================================================== */}
        <section className="page-banner-area page-project">
          <div className="overlay"></div>
          {/* Content */}
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 col-md-12 col-12 text-center">
                <div className="page-banner-content">
                  <h1 className="display-4 font-weight-bold">Cybersecurity</h1>
                  <p>We provide you with the best cybersecurity services</p>
                </div>
              </div>
            </div> {/* / .row */}
          </div> {/* / .container */}
        </section>

        <section>
            <div className="container my-5 py-5">
                <div className="row justify-content-around">
                    <div className="col-12 col-lg-5">
                        <div >
                            <img src="images/cyber1.jpg" alt="cyber" className="img-fluid"/>
                            
                        </div>
                    </div>
                    <div className="col-12 col-lg-5">
                        <div>
                            Cybersecurity is the protection of computer systems, networks, and sensitive information from unauthorized access, use, disclosure, disruption, modification, or destruction. At Falcon Technologies we use a combination of technologies, processes, and practices to secure digital assets from cyber threats such as viruses, malware, hacking, phishing, and social engineering. Cybersecurity is essential for individuals, businesses, and governments to protect themselves from cyber threats that can cause financial losses, reputational damage, legal liabilities, and privacy violations. Effective cybersecurity measures should include risk assessment, threat intelligence, vulnerability management, access controls, encryption, authentication, monitoring, incident response, and continuous improvement.
                            
                        </div>
                    </div>
                </div>
                <div className="row justify-content-around my-5 pt-5">
                    <div className="col-12 col-lg-5">
                        <div >
                        Some of the key cybersecurity challenges facing organizations and individuals include the evolving threat landscape, the increasing complexity of IT systems and networks. Following are a few of the service we provide :Advisory Services Cybersecurity Strategy Compliance Governance Business Continuity and Recovery Incident Management Training and AwarenessTechnical ServicesRisk AssessmentVAPT Vulnerability Assessment Penetration Testing Web/Mobile Application Testing Configuration Review Code ReviewForensic Computer Security Incident Response Team (CSIRT)Manage Security Services Security Operations Center (SOC)\
                           
                            
                        </div>
                    </div>
                    <div className="col-12 col-lg-5">
                        <div>
                        <img src="images/cyber2.jpg" alt="cyber" className="img-fluid"/>
                            
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
 
export default Cyber;