
import { Outlet, useLocation} from 'react-router-dom';
import './index.css'
import Header from "../../components/Header";
import Footer from "../../components/Footer";



export default function Layout() {
  const location = useLocation();
  return (
    <>
      <Header />
      <main className={` ${location.pathname === '/' ? '' : 'main bg-dark'}`}>
        <Outlet/>
      </main>
      <Footer />
    </>
  );
}
