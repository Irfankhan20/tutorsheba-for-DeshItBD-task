import { Link, NavLink } from "react-router-dom";
import navLogo from "../../assets/tutor sheba logo.png";
import { HiMiniArrowRightStartOnRectangle } from "react-icons/hi2";
import { HiMiniArrowRightEndOnRectangle } from "react-icons/hi2";
const Navbar = () => {
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
    </>
  );

  return (
    <div className=" fixed z-50 w-full  bg-gradient-to-r from-[#600759] via-[#CB0D84] to-[#600759] shadow-sm">
      <div className="flex  justify-between items-center lg:w-10/12 w-11/12 mx-auto">
        <div className="">
          <img className="w-[180px] h-[58px]" src={navLogo} alt="" />
        </div>
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
