import FeatureComponent from "../../components/Features/FeatureComponent"
import { FooterComponent } from "../../components/footer"
import GetPremium from "../../components/get/GetPremium"
import LandingPageHeader from "../../components/header/LandingPageHeader"
import PaymentComponent from "../../components/payment/PaymentComponent"

const Landing =()=>{
   return(
       <>
    <LandingPageHeader/>
    <GetPremium/>
    <FeatureComponent/>
    <PaymentComponent/>
    <FooterComponent/>
       </>
   )
}
export default Landing;