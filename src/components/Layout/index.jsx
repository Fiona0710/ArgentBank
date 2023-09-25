
import { Outlet } from 'react-router-dom';
import './index.css'
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* Renders the child routes */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;