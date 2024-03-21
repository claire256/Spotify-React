import CustomButton from '../buttons/CustomButton';
import  './GetPremium.css';

const GetPremium = ()=>{

    
    return(
        <div>
            <div className="get">
                <h1>Get Premium free for 1 month</h1>
                <p className="p1">Just £119/month after. Debit and credit cards accepted. Cancel anytime.</p>
                <div className="buttons">
                <CustomButton 
                onClick ={()=>{}}
                type = "primary"
                name="GET STARTED"
                 />
                <CustomButton 
                type = "outline"
                name="SEE OTHER PLANS" 
                />
                </div>
                <p className="p2"><a href="#">Terms and conditions apply.</a>1 month free not available for users who have already tried Premium</p>
            </div>
        </div>
    )
}

export default GetPremium;