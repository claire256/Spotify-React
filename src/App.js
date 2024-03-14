import './App.css';
import FeatureComponent from './components/Features/FeatureComponent';
import LandingPageHeader from './components/header/LandingPageHeader';
import GetPremium from './components/get/GetPremium';
import PaymentComponent from './components/payment/PaymentComponent';
import {FooterComponent} from './components/footer/index';

function App() {
  return (
    <div className="App">
      <LandingPageHeader/>
      <GetPremium />
      <FeatureComponent/>
      <PaymentComponent />
      <FooterComponent/>
    </div>
  );
}

export default App;
