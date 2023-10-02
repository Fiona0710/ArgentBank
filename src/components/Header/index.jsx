
import { Link } from 'react-router-dom'; 
import ArgentBankLogo from '../../assets/argentBankLogo.webp';
import './index.css'


export default function Header() {
  const token = window.localStorage.getItem("token");
  
  return (
    <nav className="main-nav">
    <Link to="./" className="main-nav-logo">
      <img
        className="main-nav-logo-image"
        src={ArgentBankLogo}
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </Link>
    <div>
      {token ?(
        <Link to="./SignIn" className="main-nav-item" 
            onClick={() => {window.localStorage.removeItem("token")}}>
          <i className="fa fa-sign-out"></i>
          {" "}Sign Out
        </Link>
      ) : (
        <Link to="./SignIn" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          {" "}Sign In
        </Link>
      )}
    
    </div>
  </nav>                  
  );
}



