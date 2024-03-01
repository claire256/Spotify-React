import './LandingPageHeader.css';
import Logo from './Logo'
const LandingPageHeader = ()=>{
     return(
         <div className="header">
           <div className="logo">
             <Logo/>
           </div>
           <div className="menu">
             <ul>
             <li><a href="#/premium">Premium</a></li>
             <li><a href="#">Support</a></li>
             <li><a href="#">Download</a></li>
              <li>|</li>
              <li className="active"><a href="#">Sign up</a></li>
              <li className="active"><a href="#">Log in</a></li>
             </ul>
           </div>
         </div>
     )
}
export default LandingPageHeader;