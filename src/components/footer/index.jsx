import instagram from '../../assets/images/socials/instagram.svg'
import facebook from '../../assets/images/socials/facebook.svg'
import twitter from '../../assets/images/socials/twitter.svg'
import global from '../../assets/images/global.svg'
import Logo from '../header/Logo'
import style from './style.module.css'
import { aboutMenu, communitiesMenu, usefulLinkMenu } from './data'


export const FooterComponent = ()=>{
     return(
         <div className={style.footer} >
            <div className={style.menu}>
                <div className={style.flex} >
                <div>
                    <Logo/>
                </div >
                <div className={style.flex}>
                    <Menu title="COMPANY" options={aboutMenu}/>
                    <Menu title="COMMUNITIES" options={communitiesMenu}/>
                    <Menu title="USEFUL LINKS" options={usefulLinkMenu}/>
                    <Menu title="" options={[]}/>
                </div>
                </div>
                <div className={style['legal-url']}>
                    <a href="#">Legal</a>
                    <a href="#">Privacy Center</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookies</a>
                    <a href="#">Abt Ads</a>
                </div>
            </div>
            <div className={style.copyright}>
                <div className={style.social}>
                   <img src={instagram}/>
                   <img src={twitter}/>
                   <img src={facebook}/>
                </div>
                <div className={style.bottom}>
                    <p><img src={global}/>India (English)</p>
                    <p>@ 2023 Spotify AB</p>
                </div>
            </div>
    
         </div>
     )
}

export const Menu = ({title, options})=>{
    return(
        <nav className={style.nav}>
            <h5>{title}</h5>
            <ul>
            {options && options.map((option)=>{
                return(
                    <li>
                        <a href={option.url}>{option.name}</a>
                    </li>
                )
            })}
            </ul>
        </nav>
    )
}
