import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BsArrowLeft, BsArrowRight, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const index = () => {
  const [login, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin(!login);
  };
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <img
        src="/assets/rice2-min.jpg"
        alt=""
        className=" absolute top-0 left-0 h-full w-full object-cover"
      />

      <div
        className={`h-full w-full flex justify-between items-center  relative `}
      >
        <div
          className={`h-screen w-[50%] flex justify-center items-center bg-white/10 backdrop-blur-lg fixed duration-500 ${
            login ? " translate-x-full" : ""
          } `}
        >
          {login ? (
            <Link
              href="/"
              className="z-50 w-36 h-10 bg-white absolute top-0 right-0 text-black flex justify-center items-center gap-3 text-xl"
              onClick={handleLogin}
            >
              <span className="text-sm font-medium">Go Back</span>
              <BsArrowRight />
            </Link>
          ) : (
            <button
              className="z-50 w-36 h-10 bg-white absolute top-0 left-0 text-black flex justify-center items-center gap-3 text-xl"
              onClick={handleLogin}
            >
              <BsArrowLeft />
              <span className="text-sm font-medium">Go Back</span>
            </button>
          )}

          {login ? (
            <div className="w-full h-auto px-20 z-50">
              <SignUpForm />
            </div>
          ) : (
            <div className="w-full h-auto px-32 z-50">
              <LogInForm />
            </div>
          )}
        </div>

        <div className="h-full w-3/6">
          {login ? (
            <motion.div
              className={`h-full w-full flex flex-col justify-center items-center text-white space-y-16`}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ x: 100 }}
            >
              <h1 className="text-5xl font-austin font-semibold text-center">
                Already Have An <br></br> Account
              </h1>
              <button
                className="w-[250px] h-[45px] bg-white/20 border-2 border-white rounded-md mx-auto"
                onClick={handleLogin}
              >
                Login
              </button>
            </motion.div>
          ) : null}
        </div>
        <div className="h-full w-3/6">
          {login ? null : (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ x: 100 }}
              className={`h-full w-full flex flex-col justify-center items-center text-white space-y-16`}
            >
              <h1 className="text-5xl font-austin font-semibold">
                Create An Account
              </h1>
              <button
                className="w-[250px] h-[45px] bg-white/20 border-2 border-white rounded-md mx-auto"
                onClick={handleLogin}
              >
                Sign Up
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default index;

const LogInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="text-white h-full">
      <h1 className="text-5xl font-austin font-semibold">Log In</h1>
      <form className="my-20 space-y-10 w-full" autoComplete="off">
        <input
          autoFocus={true}
          autoComplete="off"
          type="email"
          placeholder="Email Or Phone"
          className="w-full h-10 border-b-2 border-white bg-transparent outline-none placeholder:text-white"
        />
        <div className="flex items-center border-white border-b-2">
          <input
            autoComplete="off"
            type={showPassword ? "text" : "password"}
            placeholder="Enter Your Password"
            className="w-full h-10   bg-transparent outline-none placeholder:text-white"
          />
          {showPassword ? (
            <FaRegEyeSlash
              onClick={() => setShowPassword((preState) => !preState)}
              className=" cursor-pointer"
            />
          ) : (
            <FaRegEye
              onClick={() => setShowPassword((preState) => !preState)}
              className=" cursor-pointer"
            />
          )}
        </div>
      </form>
      <div className="flex flex-col space-y-5 justify-start items-center text-center">
        <button className="w-3/6 h-[45px] bg-white/10 backdrop-blur-xl border-2 border-white rounded-md">
          Log In
        </button>
        <p>OR</p>
        <div className=" w-3/6 h-auto flex justify-between items-center">
          <button className="h-12 w-12 rounded-full border-2 border-white flex justify-center items-center text-2xl text-sky-500">
            <FaFacebookF />
          </button>
          <button className="h-12 w-12 rounded-full border-2 border-white flex justify-center items-center text-2xl ">
            <FcGoogle />
          </button>
          <button className="h-12 w-12 rounded-full border-2 border-white flex justify-center items-center text-2xl text-sky-500">
            <BsTwitter />
          </button>
        </div>
      </div>
    </div>
  );
};

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="text-white h-full">
      <h1 className="text-5xl font-austin font-semibold">Sign Up</h1>
      <form className="my-16 space-y-10 w-full" autoComplete="on">
        <div className="w-full flex justify-between items-center gap-x-10">
          <input
            autoFocus={true}
            autoComplete="off"
            type="text"
            placeholder="First Name"
            className="w-3/6 h-10 border-b-2 border-white bg-transparent outline-none placeholder:text-white"
          />
          <input
            autoFocus={true}
            autoComplete="off"
            type="text"
            placeholder="Last Name"
            className="w-3/6 h-10 border-b-2 border-white bg-transparent outline-none placeholder:text-white"
          />
        </div>
        <input
          autoFocus={true}
          autoComplete="off"
          type="email"
          placeholder="Email Or Phone"
          className="w-full h-10 border-b-2 border-white bg-transparent outline-none placeholder:text-white"
        />
        <div className="flex items-center border-white border-b-2">
          <input
            autoComplete="off"
            type={showPassword ? "text" : "password"}
            placeholder="Create New Password"
            className="w-full h-10   bg-transparent outline-none placeholder:text-white"
          />
          {showPassword ? (
            <FaRegEyeSlash
              onClick={() => setShowPassword((preState) => !preState)}
              className=" cursor-pointer"
            />
          ) : (
            <FaRegEye
              onClick={() => setShowPassword((preState) => !preState)}
              className=" cursor-pointer"
            />
          )}
        </div>
        <div className="flex items-center border-white border-b-2">
          <input
            autoComplete="off"
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full h-10   bg-transparent outline-none placeholder:text-white"
          />
          {showPassword ? (
            <FaRegEyeSlash
              onClick={() => setShowPassword((preState) => !preState)}
              className=" cursor-pointer"
            />
          ) : (
            <FaRegEye
              onClick={() => setShowPassword((preState) => !preState)}
              className=" cursor-pointer"
            />
          )}
        </div>
      </form>

      <div className="flex flex-col space-y-5 justify-start items-center text-center">
        <button className="w-3/6 h-[45px] bg-white/10 backdrop-blur-xl border-2 border-white rounded-md">
          Log In
        </button>
        <p>OR</p>
        <div className=" w-3/6 h-auto flex justify-between items-center">
          <button className="h-12 w-12 rounded-full border-2 border-white flex justify-center items-center text-2xl text-sky-500">
            <FaFacebookF />
          </button>
          <button className="h-12 w-12 rounded-full border-2 border-white flex justify-center items-center text-2xl ">
            <FcGoogle />
          </button>
          <button className="h-12 w-12 rounded-full border-2 border-white flex justify-center items-center text-2xl text-sky-500">
            <BsTwitter />
          </button>
        </div>
      </div>
    </div>
  );
};
