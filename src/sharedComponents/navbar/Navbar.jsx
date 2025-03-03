import { Link, NavLink } from "react-router-dom";
import navLogo from "../../assets/tutor sheba logo.png";
import { HiMiniArrowRightStartOnRectangle } from "react-icons/hi2";
import { HiMiniArrowRightEndOnRectangle } from "react-icons/hi2";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import bellIcon from "../../assets/bell-icon.png";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import "animate.css";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const modalRef = useRef(null);
  const modalRef1 = useRef(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const toggleModal1 = () => {
    setIsModalOpen1(!isModalOpen1);
  };

  const handleLogout = () => {
    logOut();
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);
  console.log(user);
  const navlinks = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "underline text-md font-bold text-white"
              : " text-md font-bold text-white"
          }
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/tutionJobs"}
          className={({ isActive }) =>
            isActive
              ? "underline text-md font-bold text-white"
              : " text-md font-bold text-white"
          }
        >
          TUTION JOBS
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/premiumTutors"}
          className={({ isActive }) =>
            isActive
              ? "underline text-md font-bold text-white"
              : " text-md font-bold text-white"
          }
        >
          PREMIUM TUTORS
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/tutorRequest"}
          className={({ isActive }) =>
            isActive
              ? "underline text-md font-bold text-white"
              : " text-md font-bold text-white"
          }
        >
          TUTOR REQUEST
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/courses"}
          className={({ isActive }) =>
            isActive
              ? "underline text-md font-bold text-white"
              : " text-md font-bold text-white"
          }
        >
          COURSES
        </NavLink>
      </li>
      <div className="" ref={modalRef1}>
        {user ? (
          <div className="flex pb-2 items-center flex-col justify-center gap-1 lg:hidden">
            <h1
              className="flex items-center cursor-pointer text-[16px] lg:leading-[24px] font-bold text-[#FFFFFF]"
              onClick={toggleModal1}
            >
              {user?.displayName}
              <MdOutlineArrowDropDown />
            </h1>
            {isModalOpen1 && (
              <div className="w-10/12 mx-auto px-2 mt-2 bg-white rounded-xl shadow-lg py-2">
                <Link
                  to="/profile"
                  className="flex items-center gap-1 px-4 py-2  hover:bg-gray-200 justify-center text-[#800080]"
                >
                  <FaUser></FaUser>
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className=" flex gap-1 justify-center items-center px-4 py-2 w-full  hover:bg-gray-200 text-[#800080]"
                >
                  <TbLogout></TbLogout>
                  Logout
                </button>
              </div>
            )}
            <img className="w-[35px] h-[35px]" src={bellIcon} alt="" />
          </div>
        ) : (
          <div className="flex md:flex-col justify-center items-center gap-2 lg:hidden">
            {/* Register button with hover:mb-2 effect */}
            <Link>
              <button className="flex gap-1 items-center px-3 hover:cursor-pointer py-2 border-white border text-white rounded-md transition-all duration-300 hover:mb-2">
                <span className="font-bold">
                  <HiMiniArrowRightStartOnRectangle />
                </span>
                Register
              </button>
            </Link>

            {/* Login button with independent hover effect */}
            <Link>
              <button className="flex gap-1 items-center px-3 hover:cursor-pointer py-2 border-white border text-white rounded-md bg-[#800080] transition-all duration-300 hover:mb-2">
                <span className="font-bold">
                  <HiMiniArrowRightEndOnRectangle />
                </span>
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );

  return (
    <div className=" fixed z-50 w-full  bg-gradient-to-r from-[#600759] via-[#CB0D84] to-[#600759] shadow-sm">
      <div className="flex  justify-between items-center lg:w-10/12 w-11/12 mx-auto">
        <Link to="/" className="">
          <img className="w-[180px] h-[58px]" src={navLogo} alt="" />
        </Link>
        <div className="hidden lg:flex gap-5">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>

        <div className="flex items-end">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="min-w-screen text-center space-y-3 right-0 dropdown-content bg-base-100 rounded-box  shadow bg-gradient-to-r from-[#600759] via-[#CB0D84] to-[#600759] pt-5 pb-3"
            >
              {navlinks}
            </ul>
          </div>
          <div className="flex items-center relative" ref={modalRef}>
            {user ? (
              <div className="lg:flex items-center gap-1 hidden">
                <h1
                  className="flex items-center cursor-pointer text-[16px] lg:leading-[24px] font-bold text-[#FFFFFF]"
                  onClick={toggleModal}
                >
                  {user?.displayName}
                  <MdOutlineArrowDropDown />
                </h1>
                <img className="w-[35px] h-[35px]" src={bellIcon} alt="" />
              </div>
            ) : (
              <div className="navbar-end lg:flex gap-2 hidden">
                {/* Register button with hover:mb-2 effect */}
                <Link to="/register">
                  <button className="flex gap-1 items-center px-3 hover:cursor-pointer py-2 border-white border text-white rounded-md transition-all duration-300 hover:mb-2">
                    <span className="font-bold">
                      <HiMiniArrowRightStartOnRectangle />
                    </span>
                    Register
                  </button>
                </Link>

                {/* Login button with independent hover effect */}
                <Link to="/login">
                  <button className="flex gap-1 items-center px-3 hover:cursor-pointer py-2 border-white border text-white bg-[#800080] rounded-md transition-all duration-300 hover:mb-2">
                    <span className="font-bold">
                      <HiMiniArrowRightEndOnRectangle />
                    </span>
                    Login
                  </button>
                </Link>
              </div>
            )}
            {isModalOpen && (
              <div className="absolute left-0 top-8 mt-2 w-40 bg-white rounded-xl shadow-lg py-2 animate__animated animate__fadeInDown">
                <Link
                  to="/profile"
                  className=" flex  justify-center items-center gap-1 px-4 py-2 hover:bg-gray-200 text-[#800080]"
                >
                  <FaUser></FaUser>
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className=" flex justify-center  items-center gap-1 px-4 py-2 text-[#800080] hover:bg-gray-200 w-full text-left"
                >
                  <TbLogout></TbLogout>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
