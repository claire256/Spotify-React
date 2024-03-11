import MainButton from '../buttons/MainButton';
import  './MainPremium.css';

const MainPremium = ()=>{

    
    return(
        <div>
            <div className="get">
                <h1>Get Premium free for 1 month</h1>
                <p className="p1">Just £119/month after. Debit and credit cards accepted. Cancel anytime.</p>
                <div className="buttons">
                <MainButton 
                name="GET STARTED"
                 style={{background: "black", border: "none"}}
                 />
                <MainButton 
                name="SEE OTHER PLANS" 
                style={{background: "#1D75DE", border: "2px solid white", marginLeft: "20px"}}
                />
                </div>
                <p className="p2"><a href="#">Terms and conditions apply.</a>1 month free not available for users who have already tried Premium</p>
            </div>
        </div>
    )
}

export default MainPremium;