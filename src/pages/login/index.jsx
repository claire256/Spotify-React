import Logo from '../../components/header/Logo';
import CustomButton from '../../components/buttons/CustomButton'
import style from './style.module.css'
import apple from '../../assets/images/apple.svg';
import facebook from '../../assets/images/facelogin.svg'
import google from '../../assets/images/google.svg'
import eye from '../../assets/images/eye.svg'

const LoginPage = ()=>{

    return(
        <div>
            <div>
                <br></br>
                <Logo/>
            </div>
            <hr style={{width: '1600px'}}/>
            <br></br>
            <div>
                <img src={facebook} className={style.facebook}/>
                <CustomButton name="CONTINUE WITH FACEBOOK" style={{background: "#1877F2", width: "30%", border:"none"}} /><br></br><br></br>
                <img className={style.apple} src={apple}/>
                <CustomButton name="CONTINUE WITH APPLE"  style={{background: "black", width: "30%"}} /><br></br><br></br>
                <img src={google} className={style.google} />
                <CustomButton name="CONTINUE WITH GOOGLE"  style={{background: "#FFFFFF", width: "30%",  border:" solid 1px #878787", color:"#878787"}} />
                <br></br><br></br>
                <hr style={{width: '500px'}}/>
                <br></br>
                <form>
                    <label className={style.email}>Email address or username</label><br></br><br></br>
                    <input placeholder="Email address or username"/><br></br><br></br>
                    <label className={style.password}>Password</label><br></br><br></br>
                    <img src={eye} className={style.eye}/>
                    <input placeholder="Password"/><br></br><br></br>
                    <a>Forgot your password?</a>
                    <div className={style.display}>
                    <div className={style.remember}>
                    <input type="checkbox" checked/>
                    <label>Remember me</label>
                    </div>
                    <CustomButton name="LOG IN" style={{background: "#1ED760", border:"none"}}/>
                    </div>
                    <br></br>
                    <hr style={{width: '500px'}}/>
                    <p className={style.dont}>Don't have an account?</p>
                    <CustomButton name="SIGN UP WITH SPOTIFY" style={{background: "white", border:"none", border:" solid 1px #878787", color:"#878787", width: "30%"}} />
                <br></br>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;