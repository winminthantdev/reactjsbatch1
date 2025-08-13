import { Link } from 'react-router';
import Banner from './Banner'
import ParticleBackground from './ParticleBackground'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {

  return (
    <div>
      {/* <!-- Back to Top Button  --> */}
         <Link to="/" className="back-to-tops">
            <FontAwesomeIcon icon="fa-solid fa-arrow-up-from-bracket"></FontAwesomeIcon>
         </Link>

        {/* <!-- elfsight for viber chat --> */}
    <script src="https://static.elfsight.com/platform/platform.js" async></script>
    <div className="elfsight-app-df1aff92-c8e4-414c-9e53-13befa1648d5" data-elfsight-app-lazy></div>

        {/* <!-- Start Header Section  --> */}
      {/* Start Header Section */}
      <div id="particleBox">
        <ParticleBackground />
      </div>
        <Banner />
      {/* End Header Section */}
    </div>
  )
}

export default Header
