import React from 'react'

const ModalBox = () => {
  return (
    <>
       {/* <!-- START MODAL AREA  --> */}

            {/* <!-- 
                Modal Size 

                (i) Standard Size
                modal-xl
                modal-lg
                modal-sm

                (ii) Full Size
                modal-fullscreen
                modal-fullscreen-xxl-down
                modal-fullscreen-xl-down
                modal-fullscreen-lg-down
                modal-fullscreen-md-down
                modal-fullscreen-sm-down


                (iii) scroll
                modal-dialog-scrollable

            --> */}

            {/* <!-- start signup modal --> */}
            <div id="signupmodal" className="modal fade">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Create Your Account</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <form action="" method="">

                                <div className="mb-3">
                                    <label htmlFor="signupemail" className="form-label">Email address</label>
                                    <input type="email" name="signupemail" id="signupemail" className="form-control" placeholder="Enter your email" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="signuppassword" className="form-label">Password</label>
                                    <input type="password" name="signuppassword" id="signuppassword" className="form-control" placeholder="Enter your password" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="cfmpassword" className="form-label">Confirm Password</label>
                                    <input type="password" name="cfmpassword" id="cfmpassword" className="form-control" placeholder="Retype your password" required />
                                </div>

                                <button type="submit" className="btn btn-primary w-100">Signup</button>
                            </form>

                        </div>
                        <div className="modal-footer justify-content-center">
                            <p>Already register? <a href="javascript:void(0);" className="text-decoration-none">Login here</a></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end signup modal --> */}

            {/* <!-- start get in touch modal --> */}
            <div id="loginmodal" className="modal fade">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Login to Your Account</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <form action="" method="">

                                <div className="mb-3">
                                    <label htmlFor="signinemail" className="form-label">Email address</label>
                                    <input type="email" name="signinemail" id="signinemail" className="form-control" placeholder="Enter your email" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="signinpassword" className="form-label">Password</label>
                                    <input type="password" name="signinpassword" id="signinpassword" className="form-control" placeholder="Enter your password" required />
                                </div>

                                <div className="form-check mb-3">
                                    <input type="checkbox" name="rememberme" id="rememberme" className="form-check-input" required />
                                    <label htmlFor="rememberme" className="form-check-label">Remember me</label>
                                </div>

                                <button type="submit" className="btn btn-primary w-100">Login</button>
                            </form>

                            <div className="text-center mt-3">
                                <a href="javascript:void(0);" className="text-decoration-none">Forgot password?</a>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <p>Don't have an account? <a href="javascript:void(0);" className="text-decoration-none">Sign up</a></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end get in touch modal --> */}

        {/* <!-- END MODAL AREA  --> */}
    </>
  )
}

export default ModalBox
