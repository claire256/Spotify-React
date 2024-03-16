import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/login';
import Landing from './pages/Landing';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/login" element={<LoginPage/>}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
