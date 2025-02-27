import Lottie from "lottie-react";
import animationData from "../../assets/login-lottie.json";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import tutor from "../../assets/teacher.webp";
import student from "../../assets/student.webp";

const Register = () => {
  const policeStations = {
    Dhaka: [
      "Adabor",
      "Badda",
      "Banani",
      "Bangshal",
      "Bhashantek",
      "Cantonment",
      "Chalkbazar",
      "Dakshinkhan",
      "Darus Salam",
      "Demra",
      "Dhanmondi",
      "Gandaria",
      "Gulshan",
      "Hazaribagh",
      "Jatrabari",
      "Kadamtali",
      "Kafrul",
      "Kamrangirchar",
      "Khilgaon",
      "Khilkhet",
      "Kotwali",
      "Lalbagh",
      "Mirpur Model",
      "Mohammadpur",
      "Motijheel",
      "New Market",
      "Pallabi",
      "Paltan",
      "Ramna",
      "Rampura",
      "Rupnagar",
      "Sabujbagh",
      "Shah Ali",
      "Shahbagh",
      "Sher-e-Bangla Nagar",
      "Shyampur",
      "Sutrapur",
      "Tejgaon",
      "Tejgaon Industrial Area",
      "Turag",
      "Uttara East",
      "Uttara West",
      "Uttarkhan",
      "Vatara",
      "Wari",
    ],
    Chattogram: [
      "Kotwali",
      "Panchlaish",
      "Double Mooring",
      "Bayezid",
      "Chawkbazar",
      "Patenga",
      "Bakalia",
      "Halishahar",
      "EPZ",
      "Akbar Shah",
      "Khulshi",
      "Karnaphuli",
      "Sadarghat",
      "Boalkhali",
      "Sitakunda",
      "Pahartali",
      "Anwara",
      "Lohagara",
      "Rangunia",
      "Hathazari",
      "Sandwip",
      "Mirsharai",
      "Raozan",
      "Satkania",
      "Fatikchhari",
      "Banshkhali",
    ],
    Rajshahi: [
      "Boalia",
      "Motihar",
      "Shah Makhdum",
      "Rajpara",
      "Paba",
      "Durgapur",
      "Godagari",
      "Tanore",
      "Bagmara",
      "Mohanpur",
      "Charghat",
      "Puthia",
    ],
    Khulna: [
      "Khalishpur",
      "Sonadanga",
      "Daulatpur",
      "Khan Jahan Ali",
      "Labanchara",
      "Rupsha",
      "Dighalia",
      "Phultala",
      "Terokhada",
      "Koyra",
      "Bagerhat",
      "Mollahat",
      "Chitalmari",
      "Shyamnagar",
    ],
    Barishal: [
      "Kotwali",
      "Kaunia",
      "Airport",
      "Bakerganj",
      "Muladi",
      "Mehendiganj",
      "Agailjhara",
      "Banaripara",
      "Ujirpur",
      "Wazirpur",
      "Babuganj",
      "Gournadi",
    ],
    Sylhet: [
      "Kotwali",
      "Shah Paran",
      "Airport",
      "Zakiganj",
      "Golapganj",
      "Kanaighat",
      "Moulvibazar",
      "Companiganj",
      "Jalalabad",
      "Osmaninagar",
      "Fenchuganj",
      "Jaintiapur",
      "Balaganj",
    ],
    Rangpur: [
      "Kotwali",
      "Mithapukur",
      "Gangachara",
      "Kaunia",
      "Pirganj",
      "Badarganj",
      "Rangpur Sadar",
      "Pirgacha",
      "Kawnia",
      "Ranishankail",
      "Pirgachha",
      "Sadar",
    ],
    Mymensingh: [
      "Kotwali",
      "Muktagacha",
      "Gafargaon",
      "Trishal",
      "Bhaluka",
      "Ishwarganj",
      "Nandail",
      "Haluaghat",
      "Dewanganj",
      "Phulpur",
      "Tarakanda",
    ],
    Cumilla: [
      "Kotwali",
      "Debidwar",
      "Muradnagar",
      "Daudkandi",
      "Chandina",
      "Homna",
      "Nangalkot",
      "Titas",
      "Burichang",
      "Laksham",
      "Comilla Adarsha Sadar",
      "Barura",
      "Chauddagram",
      "Meghna",
      "Kadhyapara",
      "Monohorgonj",
    ],
    Bogura: [
      "Sadar",
      "Shahjahanpur",
      "Shibganj",
      "Nandigram",
      "Sonatala",
      "Gabtali",
      "Kahaloo",
      "Dhunat",
      "Dhamairhat",
      "Sherpur",
      "Shajahanpur",
      "Bogra",
    ],
    Jessore: [
      "Kotwali",
      "Sharsha",
      "Jhikargacha",
      "Monirampur",
      "Bagherpara",
      "Keshabpur",
      "Chaugachha",
      "Abhaynagar",
      "Shivalaya",
    ],
    Narayanganj: ["Fatullah", "Siddhirganj", "Rupganj", "Sonargaon", "Bandar"],
    Gazipur: ["Joydebpur", "Kaliakoir", "Kapasia", "Sreepur", "Tongi"],
    Tangail: ["Sadar", "Bhuapur", "Gopalpur", "Basail", "Delduar"],
    Pabna: ["Sadar", "Ishwardi", "Sujanagar", "Atgharia", "Santhia"],
    Noakhali: ["Sadar", "Subarnachar", "Begumganj", "Chatkhil", "Companiganj"],
    Feni: ["Sadar", "Daganbhuiyan", "Fulgazi", "Parshuram"],
    Brahmanbaria: ["Sadar", "Ashuganj", "Sarail", "Kasba", "Bancharampur"],
    Chandpur: ["Sadar", "Haimchar", "Matlab North", "Matlab South"],
    Laxmipur: ["Sadar", "Raipur", "Ramganj", "Kamalnagar"],
    Moulvibazar: ["Sadar", "Kamalganj", "Kulaura", "Juri"],
    Habiganj: ["Sadar", "Madhabpur", "Nabiganj", "Bahubal"],
    Sunamganj: ["Sadar", "Jagannathpur", "Dhirai", "Tahirpur"],
    Sirajganj: ["Sadar", "Belkuchi", "Kazipur", "Shahjadpur"],
    Natore: ["Sadar", "Singra", "Gurudaspur", "Baraigram"],
    Naogaon: ["Sadar", "Manda", "Sapahar", "Badalgachhi"],
    Joypurhat: ["Sadar", "Panchbibi", "Khetlal", "Akkelpur"],
    Thakurgaon: ["Sadar", "Pirganj", "Baliadangi", "Haripur"],
    Dinajpur: ["Sadar", "Birganj", "Phulbari", "Nawabganj"],
    Kurigram: ["Sadar", "Ulipur", "Bhurungamari", "Nageshwari"],
    Lalmonirhat: ["Sadar", "Hatibandha", "Patgram"],
    Pirojpur: ["Sadar", "Nazirpur", "Kawkhali"],
    Jhenaidah: ["Sadar", "Kaliganj", "Maheshpur"],
    Kushtia: ["Sadar", "Bheramara", "Mirpur"],
    Meherpur: ["Sadar", "Mujibnagar"],
    Magura: ["Sadar", "Shalikha"],
    Narail: ["Sadar", "Kalia"],
    Satkhira: ["Sadar", "Tala", "Debhata"],
    Bagerhat: ["Sadar", "Rampal"],
    Patuakhali: ["Sadar", "Kalapara", "Galachipa", "Dumki", "Rangabali"],
    Bhola: ["Sadar", "Lalmohan", "Char Fasson"],
    Bandarban: ["Sadar", "Thanchi"],
    CoxsBazar: ["Sadar", "Teknaf", "Ukhia"],
    Khagrachari: ["Sadar", "Dighinala"],
    Rangamati: ["Sadar", "Baghaichhari"],
    Panchagarh: ["Sadar", "Tetulia"],
    Nilphamari: ["Sadar", "Domar"],
    Gaibandha: ["Sadar", "Gobindaganj"],
    Sherpur: ["Sadar", "Nalitabari"],
    Netrokona: ["Sadar", "Madan"],
    Gopalganj: ["Sadar", "Kotalipara"],
    Shariatpur: ["Sadar", "Bhedarganj"],
    Madaripur: ["Sadar", "Rajoir"],
    Manikganj: ["Sadar", "Singair"],
    Munshiganj: ["Sadar", "Sirajdikhan"],
    Faridpur: ["Sadar", "Nagarkanda"],
    Rajbari: ["Sadar", "Baliakandi"],
    Barguna: ["Sadar", "Patharghata"],
    Jhalokathi: ["Sadar", "Rajapur"],
    Narsingdi: ["Sadar", "Belabo", "Raipura"],
    Chuadanga: ["Sadar", "Damurhuda", "Jibannagar"],
    ChapaiNawabganj: ["Sadar", "Shibganj", "Nachole"],
  };

  //   console.log(Object.keys(policeStations).length);

  const [selectedStations, setSelectedStations] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleSelectStation = (station) => {
    setSelectedStations((prev) => [...prev, station]);
  };

  const handleRemoveStation = (station) => {
    setSelectedStations((prev) => prev.filter((item) => item !== station));
  };

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false); // Close the dropdown
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const districts = Object.keys(policeStations);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [userType, setUserType] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    if (!userType) {
      alert("Please select a user type.");
      return;
    }
    console.log("Form Data:", { ...data, userType });
    reset();
  };

  return (
    <div className=" flex lg:gap-12 md:gap-9 mt-10 lg:w-10/12 w-11/12 mx-auto ">
      {/* left side */}
      <motion.div
        animate={{ y: [70, 40, 70] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="lg:w-1/2 md:flex justify-start hidden"
      >
        <Lottie
          className="lg:w-[450px] lg:h-[450px] md:w-[303px] md:h-[303px] hidden md:block"
          animationData={animationData}
          loop={true}
        />
      </motion.div>
      {/* right side  */}

      <div className="bg-white p-6 rounded-lg border my-8 mb-12 w-full max-w-xl md:px-8">
        <h2 className="text-center text-2xl font-semibold mb-4">Register</h2>
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

        {/* register Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* name & gender  */}
          <div className="flex gap-5">
            {/* Name  */}
            <div className="w-1/2">
              <label className="text-gray-700 font-medium">
                Name <span className="text-[#FF3232]">*</span>
              </label>
              <input
                {...register("email", {
                  required: "Email or Phone is required",
                })}
                type="text"
                placeholder="your name"
                className="w-full p-2 border rounded mt-1"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            {/* gender  */}
            <div className="w-1/2">
              <label className="text-gray-700 font-medium">
                Gender <span className="text-[#FF3232]">*</span>
              </label>
              <select
                {...register("gender", {
                  required: "Gender is required",
                })}
                className="w-full p-2 border rounded mt-1"
              >
                <option value="">Choose One</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-sm">{errors.gender.message}</p>
              )}
            </div>
          </div>

          {/* email & phone  */}
          <div className="flex gap-5">
            {/* email  */}
            <div className="w-1/2">
              <label className="text-gray-700 font-medium">
                Email <span className="text-[#FF3232]">*</span>
              </label>
              <input
                {...register("email", {
                  required: "Email or Phone is required",
                })}
                type="text"
                placeholder="ex: user@gmail.com"
                className="w-full p-2 border rounded mt-1"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            {/* phone  */}
            <div className="w-1/2">
              <label className="text-gray-700 font-medium">
                Phone <span className="text-[#FF3232]">*</span>
              </label>
              <input
                {...register("email", {
                  required: "Email or Phone is required",
                })}
                type="text"
                placeholder="ex: 01........."
                className="w-full p-2 border rounded mt-1"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* District & Your Location */}
          <div className="flex gap-5">
            {/* District Selection */}
            <div className="w-1/2">
              <label className="text-gray-700 font-medium">
                Select District <span className="text-[#FF3232]">*</span>
              </label>
              <select
                {...register("district", { required: "District is required" })}
                className="w-full p-2 border rounded mt-1"
                onChange={(e) => setSelectedDistrict(e.target.value)}
              >
                <option value="">Select District</option>
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
              {errors.district && (
                <p className="text-red-500 text-sm">
                  {errors.district.message}
                </p>
              )}
            </div>

            {/* Your Location */}
            <div className="w-1/2">
              <label className="text-gray-700 font-medium">
                Your Location <span className="text-[#FF3232]">*</span>
              </label>
              <select
                {...register("policeStation", {
                  required: "Police Station is required",
                })}
                className="w-full p-2 border rounded mt-1"
                disabled={!selectedDistrict}
              >
                <option value="">Select Area</option>
                {selectedDistrict &&
                  policeStations[selectedDistrict]?.map((station) => (
                    <option key={station} value={station}>
                      {station}
                    </option>
                  ))}
              </select>
              {errors.policeStation && (
                <p className="text-red-500 text-sm">
                  {errors.policeStation.message}
                </p>
              )}
            </div>
          </div>

          {/* prefar tution area  */}
          <div>
            <label className="text-gray-700 font-medium">
              Preferred Tuition Area <span className="text-[#FF3232]">*</span>
            </label>
            <div className="relative">
              <input
                ref={inputRef}
                {...register("preferredTuitionArea", {
                  required: "At least one police station should be selected",
                })}
                type="text"
                className="w-full p-2 border rounded mt-1"
                value={selectedStations.join(", ")} // Display selected stations as comma-separated values
                readOnly
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown on click
              />
              {errors.preferredTuitionArea && (
                <p className="text-red-500 text-sm">
                  {errors.preferredTuitionArea.message}
                </p>
              )}
              {isDropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute z-10 top-full left-0 w-full mt-1 bg-white border rounded-md shadow-md"
                >
                  <ul className="max-h-60 overflow-y-auto">
                    {selectedDistrict &&
                      policeStations[selectedDistrict]?.map(
                        (station, index) => (
                          <li
                            key={index}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSelectStation(station)}
                          >
                            {station}
                          </li>
                        )
                      )}
                  </ul>
                </div>
              )}
            </div>
            <div className="mt-2">
              {selectedStations.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {selectedStations.map((station, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-gray-200 text-sm px-3 py-1 rounded-lg"
                    >
                      <span>{station}</span>
                      <button
                        type="button"
                        className="ml-2 text-red-500"
                        onClick={() => handleRemoveStation(station)}
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Password Fields */}
          <div className="flex gap-5">
            {/* Password */}
            <div className="w-1/2">
              <label className="text-gray-700 font-medium">
                Password <span className="text-[#FF3232]">*</span>
              </label>
              <div className="relative">
                <input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  type={showPassword ? "text" : "password"}
                  className="w-full p-2 border rounded mt-1 focus:ring focus:ring-pink-200"
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
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Re-Password */}
            <div className="w-1/2">
              <label className="text-gray-700 font-medium">
                Re-Password <span className="text-[#FF3232]">*</span>
              </label>
              <div className="relative">
                <input
                  {...register("rePassword", {
                    required: "Re-enter your password",
                  })}
                  type={showPassword ? "text" : "password"}
                  className="w-full p-2 border rounded mt-1 focus:ring focus:ring-pink-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-2 right-3 text-gray-600"
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>
              {errors.rePassword && (
                <p className="text-red-500 text-sm">
                  {errors.rePassword.message}
                </p>
              )}
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#B40C7B] transition-all duration-300 hover:-translate-y-1 cursor-pointer border-t-[1px] border-l-[1px] border-b-2 border-r-2 border-black shadow-xl hover:bg-[#8955A3] text-white py-2 rounded mt-3"
          >
            Submit & Register
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center lg:leading-[24px] text-sm mt-4 text-[#6C757D]">
          Already have an account?
          <span>
            <Link to="/login" className="text-[#05264E] hover:text-[#3c65f5]">
              Sign in
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
