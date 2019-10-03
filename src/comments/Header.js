import React  from 'react'
import { Link,  } from 'react-router-dom'


const Header = () => {
    return ( 

      <section className="header_grid">
       <div className="logo">
           <img className="logo_pick" src="/imgs/ScubaLiving_logo_small.svg" alt="ScubaLiving logo"/>
       </div>
       <div className="nav">
           <div className="ul">
       <ul >
         <li><Link to="/">Home</Link></li>
         <li><Link to="/Udstyr">Dykkerudstyr</Link></li>
         <li><Link to="/Dyk">Dykkerrejser</Link></li>
         <li><Link to="/Padi">Dykkerkurser</Link></li>
         <li><Link to="/Kontakt">Kontakt</Link></li>
         <li><Link to="/Omos">Om os</Link></li>
       
       </ul>
       </div>
       </div>
       <div className="serch">
           
          <form className="serch_box" action="">
              <input className="serch_input" type="search" name="serch" />
              <button className="serch_button">søg</button>
          </form>

       </div>
       <div className="login">

       <div className="login_container">  
       <i  className="fas fa-lock"></i>
       <li className="login_box"><Link to="/Login">Log in</Link></li>
       </div>

       </div>
      </section>

     );
}
 
export default Header;