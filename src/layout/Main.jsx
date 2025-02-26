import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../sharedComponents/navbar/Navbar";
import Footer from "../sharedComponents/footer/Footer";
const Main = () => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <div className="flex-grow">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <div className="flex-shrink-0">
        <Footer></Footer>
      </div>
      <ToastContainer autoClose={2000} position="top-center" />
    </div>
  );
};

export default Main;
