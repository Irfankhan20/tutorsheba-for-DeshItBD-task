import Lottie from "lottie-react";
import animationData from "../../assets/login-lottie.json";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import tutor from "../../assets/teacher.webp";
import student from "../../assets/student.webp";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
// import useUserByEmail from "../../hooks/useUserByEmail";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const { aUser } = useUserByEmail(email);
  // console.log(aUser);
  const { signInUser, setEmailForForgot } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userType, setUserType] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    if (!userType) {
      toast.error("Please select user type!!!");
      return;
    }
    // if (userType !== aUser?.userType) {
    //   toast.error("Please select your correct user type!!!");
    //   return;
    // }

    signInUser(data.email, data.password)
      .then(() => {
        toast.success("Login Successful!");
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("Invalid Username or Password..!");
      });
    console.log("Form Data:", data, data.email, data.password);
  };

  return (
    <div className=" flex  lg:gap-12 md:gap-9 mt-10 lg:w-10/12 w-11/12 mx-auto">
      {/* left side */}
      <motion.div
        animate={{ y: [70, 40, 70] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="lg:w-1/2 md:flex justify-center hidden "
      >
        <Lottie
          className="lg:w-[450px] lg:h-[450px] md:w-[333px] md:h-[333px] hidden md:block"
          animationData={animationData}
          loop={true}
        />
      </motion.div>
      {/* right side  */}

      <div className="bg-white p-6 rounded-lg border my-8 mb-12 w-full max-w-xl">
        <h2 className="text-center text-2xl font-semibold mb-4">Login</h2>
        <div className="border-b-2 border-pink-500 w-16 mx-auto mb-4"></div>

        {/* User Type Selection */}
        <div className="flex justify-between bg-[#E0E6F6] p-3 mb-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <img src={tutor} alt="Tutor" className="w-10 h-10 rounded-full" />
            <input
              type="radio"
              name="userType"
              className="w-4 h-4 accent-pink-500"
              checked={userType === "Tutor"}
              onChange={() => setUserType("Tutor")}
            />
            <span className="text-gray-700">Tutor</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <img
              src={student}
              alt="Student"
              className="w-10 h-10 rounded-full"
            />
            <input
              type="radio"
              name="userType"
              className="w-4 h-4 accent-pink-500"
              checked={userType === "Student"}
              onChange={() => setUserType("Student")}
            />
            <span className="text-gray-700">Student</span>
          </label>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* email  */}
          <div>
            <label className="text-gray-700 font-medium">
              Email or Phone *
            </label>
            <input
              {...register("email", {
                required: "Email or Phone is required",
              })}
              onChange={
                (e) => setEmailForForgot(e.target.value)
                // setEmail(e.target.value);
              }
              type="text"
              className="w-full p-2 border rounded mt-1"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* password  */}
          <div>
            <label className="text-gray-700 font-medium">Password *</label>
            <div className="relative">
              <input
                {...register("password", { required: "Password is required" })}
                type={showPassword ? "text" : "password"}
                className="w-full p-2 border rounded mt-1 pr-10 focus:ring focus:ring-pink-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2 right-3 text-gray-600"
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center">
              <input type="checkbox" required className="mr-2" />
              Remember me
            </label>
            <Link
              to="/forgotPassword"
              className="text-[#05264E] hover:text-[#3c65f5]"
            >
              Forgot Password
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#B40C7B] transition-all duration-300 hover:-translate-y-1 cursor-pointer border-t-[1px] border-l-[1px] border-b-2 border-r-2 border-black shadow-xl hover:bg-[#8955A3] text-white py-2 rounded mt-3"
          >
            {userType ? `Login as a ${userType}` : "Login"}
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-sm mt-4">
          <Link to="/register" className="text-[#05264E] hover:text-[#3c65f5]">
            Click here to Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
