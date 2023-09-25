
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import SignIn from '../Pages/SignIn'; 
import User from '../Pages/User'
import Header from '../components/Header'
import Footer from '../components/Footer'


function Router() {
  return (
    // Use the BrowserRouter component to define routing
     <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<SignIn />} />
        <Route path="/User" element={<User />} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
    
  );
}

export default Router;