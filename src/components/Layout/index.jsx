
import { Outlet, useLocation} from 'react-router-dom';
import './index.css'
import Header from "../../components/Header";
import Footer from "../../components/Footer";



export default function Layout() {
  const location = useLocation();
  const mainClassName = location.pathname === '/SignIn' ? 'main bg-dark' : '';

  return (
    <>
      <Header />
      <main className={mainClassName}>
        <Outlet /> {/* Renders the child routes */}
      </main>
      <Footer />
    </>
  );
}
