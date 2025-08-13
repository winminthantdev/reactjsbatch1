import React, { useState } from "react";


const Contact = ()=>{

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    accept:false
  });


  const changeHaldler = (e) =>{
    // console.log(e.target);

    const {type,name,value,checked} = e.target;

    // console.log(type,name,value,checked);

    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  const submitHandler = (e) =>{
    e.preventDefault();
    console.log("Form submitted : ", formData);
  }
  return(
    <>
     {/*  start Contact section  */}
    <section className="p-5 contacts">
      <div className="container-fluid">
        <div className="col-md-5">
          <h5 className="display-4 mb-3">Get New Letter</h5>
          <form onSubmit={submitHandler} action="" method="">
            <div className="form-group py-4">
              <input type="text" name="name" id="name" className="form-control p-3 inputs" placeholder="Enter Your Name" autocomplete="off" onChange={changeHaldler} value={formData.name} required />
              <label for="name" className="labels">Name</label>
            </div>

            <div className="form-group py-4">
              <input type="email" name="email" id="email" className="form-control p-3 inputs" placeholder="Enter Your Email" autocomplete="off" onChange={changeHaldler} value={formData.email} required />
              <label for="email" className="labels">Email</label>
            </div>

            <div className="my-5">
              <div className="form-check form-switch">
                <input type="checkbox" name="accept" id="accept" className="form-check-input" onChange={changeHaldler} checked={formData.accept} required />
                <label for="accept" className="text-light">I agree to get push notify.</label>
              </div>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn text-uppercase fw-bold rounded-0 submit-btns">Subscribe</button>
            </div>

          </form>
        </div>
      </div>
    </section>

    {/* end Contact section  */}
    </>
  )
};

export default Contact;