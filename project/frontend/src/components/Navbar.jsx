import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router'
import { useEffect } from 'react';

const Navbar = () => {

  const backToTop = document.querySelector(".back-to-tops");

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");

      const currentScroll = window.scrollY || document.documentElement.scrollTop;


      // For navbar
      if (navbar) {
        if (currentScroll > lastScroll) {
          navbar.classList.add("scrolleds");
        } else {
          navbar.classList.remove("scrolleds");
        }
      }

      lastScroll = currentScroll;

      // For back-to-top button
      if (backToTop) {
        if (scrollY > 350) {
          backToTop.classList.add("active");
        } else {
          backToTop.classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);



    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });


  return (
    <>
      {/* <!-- start navbar  --> */}
      <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <div className="container">

          <Link to="/" className="navbar-brand">
            <img src="https://www.pngall.com/wp-content/uploads/15/Jira-Logo-Transparent.png" width="40" alt="sitelogo" />
            <span className="d-none d-md-inline ms-2">PTT Software Co.,Ltd</span>
          </Link>

          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav" >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="nav" className="navbar-collapse collapse justify-content-between">

            <ul className="navbar-nav">
              <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
              <li className="nav-item"><Link to="clients" className="nav-link">Clients</Link></li>
              <li className="nav-item"><Link to="aboutus" className="nav-link">About</Link></li>
              <li className="nav-item btn-group">
                <Link href="/softwares" className="nav-link" data-bs-toggle="dropdown">Software
                  <FontAwesomeIcon icon="fa-solid fa-caret-down" />
                </Link>
                <ul className="dropdown-menu">
                  <li><Link to="/softwares" className="dropdown-item">Android App</Link></li>
                  <li><Link to="/softwares" className="dropdown-item">IOS App</Link></li>
                  <li><Link to="/softwares" className="dropdown-item">Linux App</Link></li>
                  <li><Link to="/softwares" className="dropdown-item">Windows App</Link></li>
                </ul>
              </li>
              <li className="nav-item"><Link to="pricing" className="nav-link">Special Pricing</Link></li>
              <li className="nav-item"><Link to="contact" className="nav-link">Contact Us</Link></li>
            </ul>

            <div>
              <Link to="#signupmodal" className="btn btn-outline-light btn-sm rounded-pill" data-bs-toggle="modal">Sign Up</Link>
            </div>

          </div>

        </div>
      </nav>
      {/* <!-- end navbar  --> */}
    </>
  )
}

export default Navbar
