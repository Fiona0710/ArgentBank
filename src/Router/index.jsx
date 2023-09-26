import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../Pages/Home';
import SignIn from '../Pages/SignIn'; 
import User from '../Pages/User';


export default function Router() {
  return (
    // Use the BrowserRouter component to define routing
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="User" element={<User />} />
        </Route>  
      </Routes>
    </BrowserRouter>
    
  );
}
