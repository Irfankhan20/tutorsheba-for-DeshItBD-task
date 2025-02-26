import { Link } from "react-router-dom";
import navLogo from "../../assets/tutor sheba logo.png";
import fbLogo from "../../assets/icons8-facebook-48.png";
import whatsappLogo from "../../assets/icons8-whatsapp-48.png";
import ytLogo from "../../assets/icons8-youtube-48.png";
import bkashLogo from "../../assets/Bkash-Logo-removebg-preview.png";
import googlePayLogo from "../../assets/google_pay_btn-removebg-preview.png";
import qrCodeLogo from "../../assets/qr_code-removebg-preview.png";
import { FaHandshake } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#F8F9FA]">
      <div className="footer md:flex w-11/12 lg:w-10/12 mx-auto md:justify-between  text-base-content p-10">
        {/* logo  */}
        <aside className="md:w-5/12 w-full">
          <img src={navLogo} alt="" className="mx-auto md:mx-0" />
          <p className="text-[12px] lg:leading-[18px] font-medium text-[#66789c] text-center md:text-start">
            TutorSheba.com is a platform where parents, students and tutors can
            easily connect with each other. We provide qualified Home/Online
            tutors to help your child with studies and helping them perform
            better in exams. We are a group of 2,50,000+ Tutors and 30,000+
            satisfied parents/students in Dhaka, Chattagram, Rajshahi, Sylhet,
            Khulna, Barishal, Rangpur, Mymensingh cities for different academic
            and professional subjects.
          </p>
          <div className="flex w-full gap-3 justify-center md:justify-start mt-3">
            <Link>
              <img
                className="w-10 h-10 transition-all duration-300 hover:-translate-y-1"
                src={fbLogo}
                alt=""
              />
            </Link>
            <Link>
              <img
                className="w-10 h-10 transition-all duration-300 hover:-translate-y-1"
                src={whatsappLogo}
                alt=""
              />
            </Link>
            <Link>
              <img
                className="w-10 h-10 transition-all duration-300 hover:-translate-y-1"
                src={ytLogo}
                alt=""
              />
            </Link>
          </div>
        </aside>

        <div className="flex gap-10">
          {/* resoures  */}
          <nav className="flex flex-col space-y-2.5">
            <h6 className="font-bold text-[16px] lg:leading-[26px] text-[#05264E]">
              Resources
            </h6>
            <Link className="text-[14px] cursor-pointer lg:leading-[24px] font-normal hover:text-[#05264E] text-[#8A9498]">
              About us
            </Link>
            <Link className="text-[14px] cursor-pointer lg:leading-[24px] font-normal hover:text-[#05264E] text-[#8A9498]">
              Our Team
            </Link>
            <Link className="text-[14px] cursor-pointer lg:leading-[24px] font-normal hover:text-[#05264E] text-[#8A9498]">
              Products
            </Link>
            <Link className="text-[14px] cursor-pointer lg:leading-[24px] font-normal hover:text-[#05264E] text-[#8A9498]">
              Contact
            </Link>
            <Link className="text-[14px] flex gap-1 items-center cursor-pointer lg:leading-[24px] font-bold  text-[#800080]">
              <FaHandshake />
              Sheba Uddokta
            </Link>
          </nav>

          {/* more  */}
          <nav className="flex flex-col space-y-2.5">
            <h6 className="font-semibold text-[16px] lg:leading-[26px] text-[#05264E]">
              More
            </h6>
            <Link className="text-[14px] cursor-pointer lg:leading-[24px] font-normal hover:text-[#05264E] text-[#8A9498]">
              Privacy
            </Link>
            <Link className="text-[14px] cursor-pointer lg:leading-[24px] font-normal hover:text-[#05264E] text-[#8A9498]">
              Helps
            </Link>
            <Link className="text-[14px] cursor-pointer lg:leading-[24px] font-normal hover:text-[#05264E] text-[#8A9498]">
              Terms
            </Link>
            <Link className="text-[14px] cursor-pointer lg:leading-[24px] font-normal hover:text-[#05264E] text-[#8A9498]">
              FAQ
            </Link>
            <Link className="text-[14px] cursor-pointer lg:leading-[24px] font-normal text-[#05264E]">
              Pay Now
            </Link>
            <Link>
              <img className="w-[125px] h-[40px]" src={bkashLogo} alt="" />
            </Link>
          </nav>
        </div>

        {/* download  */}
        <nav className="md:w-3/12 w-full text-center md:text-start flex flex-col items-center md:items-start">
          <h6 className="font-semibold text-[18px] lg:leading-[26px] text-[#05264E]">
            Download Our Mobile App
          </h6>

          <img className="w-[120px] h-[120px]" src={qrCodeLogo} alt="" />

          <p className="text-[14px] lg:leading-[24px] text-[#8A9498]">
            Our Android App is available right now. Scan the QR Code or Click
            the Button to Download
          </p>

          <Link>
            <img className="w-[160px] h-[60px]" src={googlePayLogo} alt="" />
          </Link>
        </nav>
      </div>
      {/* divider  */}
      <div className="divider my-5 w-10/12 mx-auto"></div>

      {/* copy right  */}
      <div className="md:flex justify-between items-center w-10/12 mx-auto pb-8">
        <p className=" text-[14px] lg:leading-[18px] text-[#6c757d] font-semibold">
          Copyright © 2022. Tutor Sheba all right reserved
        </p>
        <div className="flex gap-2 justify-center md:justify-start">
          <Link className="text-[#05264E] text-[14px] lg:leading-[24px] hover:text-[#3c65f5]">
            Privacy Policy
          </Link>
          <Link className="text-[#05264E] text-[14px] lg:leading-[24px] hover:text-[#3c65f5]">
            Security
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
