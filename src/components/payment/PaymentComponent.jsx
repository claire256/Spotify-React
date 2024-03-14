import CustomButton from "../buttons/CustomButton"
import "./PaymentComponent.css";
import Amex from "../../assets/images/payment/Amex.svg";
import circle from "../../assets/images/payment/circle.svg";
import mastercard from "../../assets/images/payment/mastercard.svg";
import paytm from "../../assets/images/payment/paytm.svg";
import UPI from "../../assets/images/payment/UPI.svg";
import visa from "../../assets/images/payment/visa.svg";
import tick from "../../assets/images/tick.svg"

const PaymentComponent = ()=>{
   
const paymentplans = [
    {
    minititle: "One-time plans available",
    title: "Mini",
    amount: "From £7/day 1 account on mobile money only",
    items: ["Ad-free music listening on mobile", "Group Session", "Download 30 songs on 1 mobile device"],
    terms:"Terms and conditions.",
    image: tick
},
{
    free: "one month free",
    minititle: "One-time plans available",
    title: "Individual",
    amount: "£119/month after offer period 1 account",
    items: ["Ad-free music listening on mobile", "Group Session", "Download 10k songs device on 5 devices",],
    terms:"Terms and conditions.",
    termpara:"1 month free not available for users who have already tried premium",
    image: tick
},
{
    free: "one month free",
    minititle: "One-time plans available",
    title: "Duo",
    amount: "From £149/month after offer period 2 account",
    items: ["For couples who live together", "Ad-free music listening", "Group Session",
     "Download 10k songs device on 5 devices per account",],
    para0: "For couples who live together",
    terms:"Terms and conditions.",
    termpara:"1 month free not available for users who have already tried premium",
    image: tick
},
{
    free: "one month free",
    minititle: "One-time plans available",
    title: "Family",
    amount: "From £179/month after offer period up to 6 accounts",
    items: ["For family who live together", "Block explicit music", "Ad-free music listening on mobile", "Group Session", "Download 10k songs device on 5 devices"],
    terms:"Terms and conditions.",
    termpara:"1 month free not available for users who have already tried premium",
    image: tick
},
]

    return(
        <div className="pay">
            <h1>Pick your Premium</h1>
            <p className="listen-para">Listen without limits on your phone, speaker, and other devices</p>
            <div className="icons">
                <img src={UPI}/>
                <img src={paytm}/>
                <img src={visa}/>
                <img src={mastercard}/>
                <img src={Amex}/>
                <img src={circle}/>
            </div>
            <div></div>
            <div className="card-div">
                {paymentplans.map((plan)=>
                   <div className="card">
                       <div className="free">{plan.free}</div>
                       <button className="button">{plan.minititle}</button>
                       <h2>{plan.title}</h2>
                       <p className="amount">{plan.amount}</p>
                       <hr/>
                       <div className="main-para">
                    {plan.items.map((item)=>
                       item && <p><img src={plan.image}/>{item}</p>
                    )}
                       </div>
                    <div className="card-bottom">
                    <CustomButton name="VIEW PLANS" 
                       style={{background: "black", width: "90%"}}/>
                    <hr className="hr"/>
                       <p><a href="#">{plan.terms}</a>{plan.termpara}</p>
                    </div>
                   </div>
                )}
            </div>
            <div className="discount">
                <h3>Special discount for eligible students in university</h3>
                <CustomButton name="LEARN MORE" style={{color: "black", background: "transparent", border: "solid 2px black"}}/>
            </div>
        </div>
    )
}
 export default PaymentComponent;