import React from "react";
import { useState, useEffect } from "react";

// these are the icons resources
import hero from "../../public/Images/hero.png";
import mail from "../../public/Images/Mail.png";
import lock from "../../public/Images/Lock.png";
import { FaCircleCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";
import google from "../../public/Images/google.png";
import fb from "../../public/Images/fb.png";
import twitter from "../../public/Images/twitter.png";

// imports for dispatch and select
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../stateManager/httpMethodSlice";

// a toaster that handles middleware/error
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Hero() {

  // these are the state for controlling inputs value
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [validatedEMail, setValidatedEmail] = useState(null);
  const [isCheck, setIsCheck] = useState(false);

// for dispatching actions from httpMethodSlice.js
  const dispatch = useDispatch();

// basic email validation with regular expression
  const emailValidation = (e) => {
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var emailValue = e.target.value;
    setEmail(emailValue);
    if (emailValue.match(pattern)) {
      setValidatedEmail(true);
    } else {
      setValidatedEmail(false);
    }
  };

// functions for checkbox
  const unCheck = () => {
    setIsCheck(false);
  };
  const Check = () => {
    setIsCheck(true);
  };

// function to prevent page reload
  const submit = (e) => {
    e.preventDefault();
  };

  const Google = () => {
    window.open('http://localhost:4000/auth/google', "_self")
  }


  return (
    <React.Fragment>
      <section className=" w-full h-auto flex items-center justify-evenly gap-6 mt-[80px] ">
        <div>
          <h1 className=" text-[48px] font-semibold text-primary mb-[12px] ">
            Create Account{" "}
          </h1>
          <p className=" text-[18px] font-[500] text-[#5C6881] mb-[60px] ">
            Create your account & join with us for new incredible <br /> journey
            in AI technology
          </p>
          <form
            className=" bg-[#F8FAFB] rounded-3xl "
            onSubmit={(e) => submit(e)}
          >
            <div className=" w-full px-5 py-4 flex items-center gap-5 rounded-t-lg focus-within:bg-[#FFF1F1] ">
              <img
                src={`${mail}`}
                alt=""
                className=" text-[32px] text-[#292D32] "
              />
              <div className=" w-full flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="  text-[#B09191] text-[14px] "
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your email address"
                  autoComplete="off"
                  required
                  className=" w-[95%] outline-none border-none bg-transparent text-[17px] font-semibold text-[#FF0032] placeholder:text-[#FF0032]/30  "
                  value={email}
                  onChange={emailValidation}
                />
              </div>
              {validatedEMail ? (
                <FaCircleCheck className="text-[24px] text-[#00AC39]" />
              ) : (
                <MdError
                  className={` text-[32px] ${
                    validatedEMail === null ? "hidden" : "text-secondary"
                  }`}
                />
              )}
            </div>
            <div className=" w-full px-5 py-4 flex items-center gap-5 border border-[#F2F2F2] focus-within:bg-[#FFF1F1]">
              <img
                src={`${lock}`}
                alt=""
                className=" text-[32px] text-[#292D32] "
              />
              <div className="w-full flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="  text-[#B09191] text-[14px] "
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="password"
                  className="  w-[95%] outline-none border-none bg-transparent text-[17px] font-semibold text-[#FF0032] placeholder:text-[#FF0032]/30  "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className=" w-full px-5 py-4 flex items-center gap-5 focus-within:bg-[#FFF1F1] mb-[20px]">
              <img
                src={`${lock}`}
                alt=""
                className=" text-[32px] text-[#292D32] "
              />
              <div className="w-full flex flex-col gap-2">
                <label
                  htmlFor="confirm"
                  className="  text-[#B09191] text-[14px] "
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="pconfirm"
                  placeholder="confirm password"
                  className="  w-[95%] outline-none border-none bg-transparent text-[17px] font-semibold text-[#FF0032] placeholder:text-[#FF0032]/30  "
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                />
              </div>
            </div>
            <div className=" flex items-center justify-between">
              <div className=" flex items-center gap-4">
                {isCheck ? (
                  <FaCircleCheck
                    className="text-[20px] text-[#00AC39] cursor-pointer"
                    onClick={unCheck}
                  />
                ) : (
                  <div
                    className=" w-[20px] h-[20px] border-[1px] border-black/50 rounded-full cursor-pointer"
                    onClick={Check}
                  ></div>
                )}
                <span className=" text-[14px] text-[#5C6881] font-normal">
                  Remember Me
                </span>
              </div>
              <span className=" text-[14px] text-[#5C6881] font-normal cursor-pointer">
                Forgot Password ?
              </span>
            </div>
            <div className=" flex items-center justify-center gap-7 w-fit mt-[32px] mb-[48px]">
              <button
                onClick={() =>
                  dispatch(
                    userRegister({
                      email: email,
                      password: password,
                      confirmPass: confirmPass,
                      rememberMe: isCheck,
                    })
                  )
                }
                className=" px-[32px] py-[12px] bg-secondary text-white rounded-full text-[14px] font-[600] "
              >
                Register Now
              </button>
              <button className=" px-[56px] py-[12px] border-black border rounded-full text-[14px] font-[600]">
                Login
              </button>
            </div>
          </form>
          <div className="flex flex-col gap-3">
            <p className=" text-[14px] text-[#5C6881]">Or you can join with</p>
            <div className=" flex items-center gap-3">
              <img src={`${google}`} alt="" className=" cursor-pointer" onClick={Google} />
              <img src={`${fb}`} alt="" className=" cursor-pointer" />
              <img src={`${twitter}`} alt="" className=" cursor-pointer" />
            </div>
          </div>
        </div>
        <div>
          <img src={`${hero}`} alt="" className=" w-[600px] " />
        </div>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </section>
    </React.Fragment>
  );
}

export default Hero;
