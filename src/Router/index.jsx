
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import SignIn from '../Pages/SignIn'; 
import User from '../Pages/User';
import Layout from '../components/Layout';



function Router() {
  return (
    // Use the BrowserRouter component to define routing
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Signin" element={<SignIn />} />
          <Route path="User" element={<User />} />
        </Route>  
      </Routes>
    </BrowserRouter>
    
  );
}

export default Router;