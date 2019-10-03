import React from 'react'

const Login = (props) => {
    return (

        <section>
            <div className="omos_grid">
                <div className="omos"><h2>LOGIN</h2></div>
                <div className="omos_gray"></div>

            </div>

            <div className="login_grid">
                <div className="login_box_real">
                    <section className="form_login">
                  <form >
                      <br/>
                      <h2>log in</h2>
                      <br/>
                      NAVN
                      <br/>
                      <input className="login_input" type="text" pattern=".{3,}"/>
                      <br/>
                      <br/>
                      ADGANGSKODE
                      <br/>
                      <input className="login_input" type="password" name="" />
                      <br/>
                      <br/>
                      <button className="button_login">log på</button>
                      <br/>
                      <br/>
                      NY?
                      <br/>
                      <button className="button_login">skab en konto</button>
                     
                  </form>
                  </section>
                </div>
            </div>

        </section>

    );
}

export default Login;