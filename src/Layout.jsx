import { Outlet } from "react-router-dom"
import NavbarIndex from "./components/navbar/NavbarIndex"
import FooterIndex from "./components/footer/FooterIndex"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Layout=()=>{
  return(
    <main className="relative">
       <ToastContainer position="top-right" close={3000} />
        <div>
            <NavbarIndex/>
        </div>
        <div>
            <Outlet/>
        </div>
        <div className="w-full">
          <FooterIndex/>
        </div>
    </main>
  )
}
export default Layout