import './LandingPageHeader.css';
import Logo from './Logo';
import menu from "../../assets/images/menu.svg"
import { useState } from 'react';

const LandingPageHeader = ()=>{

  const[toggle, setToggle] = useState(false);

  const handleToggle = ()=>{
    setToggle(!toggle)
  }
console.log(toggle)
     return(
         <div className="header">
           <div className="logo">
             <Logo useWhite ={true}/>
           </div>
           <div>
           <img src={menu} className="menu-img" onClick={handleToggle} alt=""/>
            { toggle?
            <ul className="menu">
             <li><a href="#/premium">Premium</a></li>
             <li><a href="#">Support</a></li>
             <li><a href="#">Download</a></li>
              <li className="active"><a href="#">Sign up</a></li>
              <li className="active"><a href="login">Log in</a></li>
             </ul> : <></>}
            <div className="menu">
            <ul>
            <li><a href="#/premium">Premium</a></li>
             <li><a href="#">Support</a></li>
             <li><a href="#">Download</a></li>
              <li className="hide">|</li>
              <li className="active"><a href="#">Sign up</a></li>
              <li className="active"><a href="login">Log in</a></li>
              </ul>
           </div>
         </div>
         </div>
     )
}
export default LandingPageHeader;