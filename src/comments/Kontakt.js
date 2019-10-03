import React from 'react'

const Kontakt = (props) => {
    return (

        <section>
            <div className="kontakt_grid">
                <div className="kontakt"><h2>KONTAKT</h2></div>
                <div className="kontakt_gray"></div>

            </div>
            <div className="kontakt_box_grid">


                <div className="kon">
                    <div className="email_contact">
                        <form>
                           
                            <br/>
                            Email: <br/>
                            <input type="email" name="email" pattern="" autofocus="on"/>
                            <br/>
                            Password: <br/>
                            <input type="password" name="" id=""/>
                            <br/>
                            message: <br/>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                             <br/>
                            <button>submit</button>
                        </form>
                    </div>
                </div>
                <div className="telle">
                    <div className="tlf">
                    <p>tlf: 45 45 45 45 45</p>
                    <br/>
                    <p>find os her:</p>
                    <img className="maps" src="/imgs/Udklip.JPG" alt="googelmap"/>
                    </div>
                </div>


            </div>
        </section>

    );
}

export default Kontakt;