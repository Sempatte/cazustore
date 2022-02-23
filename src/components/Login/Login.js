import React from 'react'
import './Login.css'

function Login() {
  return (
      <div className="section-login">
          <div className="container">
              <div className="row">
                  <div className="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto">
                      <div className="sign-form">
                          <form className="form-group mb-0" action="#">
                              <input className="form-control mb-25" type="text" name="yourname" placeholder="User Name" />
                              <input className="form-control" type="password" name="password" placeholder="Password" />
                              <button className="btn btn-primary w-100 mb-40" type="submit">Log In</button>
                          </form>
                      </div>
                  </div>
              </div>
          </div></div>


  )
}

export default Login