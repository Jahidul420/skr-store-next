import Link from "next/link";
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";
import { IoLogoGooglePlaystore } from "react-icons/io5";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-black relative">
      <img
        src="/assets/pattern.png"
        alt=""
        className=" absolute top-0 left-0 object-cover h-full w-full opacity-10"
      />
      <div className="h-[80vh] w-full flex justify-between items-end gap-5 px-10 relative">
        <FirstDiv />
        <MiddelDiv />
        <LastDiv />
      </div>
      <div className="py-16 text-center text-white">
        <Link href="/">Copyright © 2023 Shukran. All rights reserved</Link>
      </div>
    </div>
  );
};

export default Footer;

const FirstDiv = () => {
  const IconArr = [
    { icon: <BsFacebook /> },
    { icon: <AiFillYoutube /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <FaLinkedinIn /> },
    { icon: <AiOutlineInstagram /> },
  ];
  return (
    <div className="w-[30%]">
      <h2 className="text-4xl text-white font-zen mb-8">FOLLOW US</h2>
      <div className="flex justify-between ie text-white text-4xl items-center group pr-3">
        {IconArr.map((item, index) => (
          <Link
            href="/"
            key={index}
            className=" hover:scale-150 duration-300 hover:drop-shadow-[0_0px_10px_rgb(255,255,255,0.7)]"
          >
            {item.icon}
          </Link>
        ))}
      </div>
      <div className="text-xs text-white space-x-5 mt-2">
        <Link href="/" className="border-b">
          PRIVACY & TERMS
        </Link>
        <Link href="/" className="border-b">
          PARTNERSHIPS
        </Link>
        <Link href="/" className="border-b">
          +88 017 0000 0000
        </Link>
        <Link href="/" className="border-b">
          CONTACT US
        </Link>
      </div>
    </div>
  );
};

const MiddelDiv = () => {
  return (
    <div className="w-[40%]">
      <div>
        <img
          src="/assets/shukranLogo.png"
          alt=""
          className="h-full w-full object-scale-down"
        />
      </div>
    </div>
  );
};

const LastDiv = () => {
  return (
    <div className="w-[30%] text-white">
      <div className=" space-y-5 md:mt-8 mt-4">
        <div className="flex items-center justify-between w-full">
          <AppStore
            icon={<IoLogoGooglePlaystore className="text-3xl" />}
            storeName="Google Play Store"
          />
          <AppStore
            icon={<GrAppleAppStore className="text-3xl" />}
            storeName="Apple App Store"
          />
        </div>

        <div className="w-full flex items-center border rounded-md">
          <input
            type="email"
            className="outline-none border-none h-12 text-white px-2 w-[70%] rounded-l-md bg-white/10 backdrop-blur-xs"
            placeholder="Enter your Email..."
          />
          <button className="h-12 bg-white font-semibold text-lg text-black/80 w-[30%] rounded-r-md">
            Subscribe
          </button>
        </div>
      </div>
      <p className="text-xs mt-3">
        Sign up to receive 10% off your first order. By signing up I agree to
        the Shukran
        <button className="border-b"> Terms & Conditions</button>
      </p>
    </div>
  );
};

const AppStore = ({ icon, storeName }: { icon: any; storeName: String }) => {
  return (
    <div className="py-3 px-2 rounded-lg border-2 border-white">
      <button className="flex items-center text-xl font-semibold justify-between w-full">
        {icon}
        {storeName}
      </button>
    </div>
  );
};



