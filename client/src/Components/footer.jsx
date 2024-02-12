import React from "react";

// these are the icons
import fb from '../../public/Images/fb2.png'
import vk from '../../public/Images/vk.png'
import ig from '../../public/Images/ig.png'
import telegram from '../../public/Images/telegram.png'
import whatsapp from '../../public/Images/whatsapp.png'
import logoDark from '../../public/Images/logoDark.png'

function Footer() {
  return (
    <React.Fragment>
      <footer className=" w-full h-[750px] bg-primary mt-[200px] text-white font-sans flex flex-col justify-center pt-[100px] ">
        <div className=" flex items-start justify-around mb-[134px] ">
          <div className="">
            <div className="flex items-center gap-3 mb-[24px] ">
              <div className=" w-[10px] h-[10px] rounded-full bg-secondary "></div>
              <h5 className=" text-[10px] font-[500] tracking-[2px] ">MENU</h5>
            </div>
            <ul className=" flex flex-col gap-1">
              <li className=" font-[500] text-[26px] text-[#D0D0C8] cursor-pointer ">
                Home
              </li>
              <li className=" font-[500] text-[26px] text-[#D0D0C8] cursor-pointer ">
                About
              </li>
              <li className=" font-[500] text-[26px] text-[#D0D0C8] cursor-pointer ">
                Pricing
              </li>
              <li className=" font-[500] text-[26px] text-[#D0D0C8] cursor-pointer ">
                FAQs
              </li>
            </ul>
          </div>
          <div>
            <div className=" w-[600px] h-[10px] bg-secondary mb-[24px] "></div>
            <div className="flex items-center gap-3 mb-[24px] ">
              <div className=" w-[10px] h-[10px] rounded-full bg-secondary "></div>
              <h5 className=" text-[10px] font-[500] tracking-[1px] ">
                CONTACT US
              </h5>
            </div>
            <div className=" flex items-start justify-between mb-[64px] ">
              <div>
                <h5 className=" mb-[4px]">+1 980 971-24-19</h5>
                <h5>hello@logoipsum.com</h5>
              </div>
              <div className=" w-[150px] flex flex-wrap justify-end gap-2">
                <img src={`${fb}`} alt="" className=" cursor-pointer " />
                <img src={`${vk}`} alt="" className=" cursor-pointer " />
                <img src={`${ig}`} alt="" className=" cursor-pointer " />
                <img src={`${telegram}`} alt="" className=" cursor-pointer " />
                <img src={`${whatsapp}`} alt="" className=" cursor-pointer " />
              </div>
            </div>
            <div className="flex items-center gap-3 mb-[24px] ">
              <div className=" w-[10px] h-[10px] rounded-full bg-secondary "></div>
              <h5 className=" text-[10px] font-[500] tracking-[1px] ">
                LOCATION
              </h5>
            </div>
            <h5 className=" text-[14px] text-[#FFFFFF]/75 tracking-[1px] mb-[12px] ">1901 Thornridge Cir. Shiloh, Hawaii 81063</h5>
            <h5 className=" text-[20px] mb-[8px] ">10am—6pm</h5>
            <h5 className=" text-[14px] text-[#FFFFFF]/50 tracking-[1px] ">/ Everyday</h5>
          </div>
        </div>
        <div className=" flex items-center justify-around">
            <img src={`${logoDark}`} alt="" className=" cursor-pointer" />
            <h5 className=" text-[12px] text-white/40 ">© 2023 — Copyright</h5>
            <h5 className=" text-[12px] text-white/40 ">Privacy</h5>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
