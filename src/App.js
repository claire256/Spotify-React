import './App.css';
import FeatureComponent from './components/Features/FeatureComponent';
import LandingPageHeader from './components/header/LandingPageHeader';
import MainPremium from './components/main/MainPremium';
import PaymentComponent from './components/payment/PaymentComponent';

function App() {
  return (
    <div className="App">
      <LandingPageHeader/>
      <MainPremium />
      <FeatureComponent/>
      <PaymentComponent />
    </div>
  );
}

export default App;
