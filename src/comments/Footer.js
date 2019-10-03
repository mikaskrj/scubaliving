import React from 'react'
import { Link,  } from 'react-router-dom'

const Footer = (props) => {
    return (

        <footer>
        <div className="footer_01">
        <h3 className="footer_h3">PRAKTISKE OPLYSNINGER</h3><br/>
            <ul className="ul_footer">
            <li><Link className="footer_link" to="/Udstyr">Om scuba living</Link></li>
            <li><Link className="footer_link" to="/Udstyr">Kontakt</Link></li>
            <li><Link className="footer_link" to="/Udstyr">Om scuba living</Link></li>
            <li><Link className="footer_link" to="/Udstyr">Om scuba living</Link></li>
            <li><Link className="footer_link" to="/Udstyr">Om scuba living</Link></li>
            </ul>
        </div>
        <div className="footer_02">
            <h3 className="footer_h3">PRAKTISKE OPLYSNINGER</h3><br/>
            <ul className="ul_footer">
            <li><Link className="footer_link" to="/Udstyr">Om scuba living</Link></li>
            <li><Link className="footer_link" to="/Udstyr">Kontakt</Link></li>
            <li><Link className="footer_link" to="/Udstyr">Om scuba living</Link></li>
            <li><Link className="footer_link" to="/Udstyr">Om scuba living</Link></li>
            <li><Link className="footer_link" to="/Udstyr">Om scuba living</Link></li>
            </ul>
        </div>
        <div className="footer_03">
         <h3 className="footer_h3">SOCIALE MEDIER-FØLG OS HER:</h3><br/>
            <ul className="ul_footer">
            <li><Link className="footer_link" to="/Udstyr">Om scuba living<i class="fab fa-instagram media"></i></Link></li>
            <li><Link className="footer_link" to="/Udstyr">Kontakt<i className="fab fa-facebook-square media"></i></Link></li>
            <li><Link className="footer_link" to="/Udstyr">Kontakt<i class="fab fa-linkedin media"></i></Link></li>
            
            </ul>
        </div>
        <div className="footer_04">
       
        </div>
        </footer>

    );
}

export default Footer;