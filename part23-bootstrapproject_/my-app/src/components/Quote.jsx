import React from 'react'

import phoneicon from "./../assets/img/icon/phoneicon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Quote = () => {
  return (
    <>
      {/* start Quotation section */}
    <section>
      <div className="container">
        <div className="quotes">
          <div className="infos">
            <div className="me-5">
              <img src={phoneicon} className="phoneicons" alt="phoneicon" />
            </div>
            <div className="text-white">
              <h2 className="fw-bold text-uppercase">Request A Free Quote</h2>
              <p className="lead">Get answers and advice from people you want it from.</p>
            </div>
          </div>

          <div>
            <a href="tel:09263038660" className="btn btn-calls">Call Now <FontAwesomeIcon icon="fa-solid fa-phone-flip"  className='ms-2'/></a>
          </div>
        </div>
      </div>
    </section>

    {/* end Quotation section  */}
    </>
  )
}

export default Quote
