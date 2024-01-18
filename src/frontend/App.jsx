import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import HomePage from './pages/Homepage';

function App() {
  return (
 
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/home' element={<HomePage />} />
          </Routes>
        </BrowserRouter>


  );
}

export default App;
