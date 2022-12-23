import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage';
import RegistrationPage from './pages/RegistrationPage';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={<LandingPage />} 
            />
            <Route
              path="/registration-page"
              element={<RegistrationPage />}
            />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
