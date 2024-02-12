import React from 'react'
import logoLight from '../../public/Images/logoLight.png'

function Header() {
  return (
    <React.Fragment>
        <section className=' header w-full h-[90px] font-sans border-b border-[#D9DBE9] px-8 py-[30px] flex items-center justify-between '>
            <div>
                <ul className=' flex items-center justify-center w-fit gap-[26px] '>
                    <li className=' text-secondary font-[600] cursor-pointer'>Home</li>
                    <li className=' font-[500] cursor-pointer'>About</li>
                    <li className=' font-[500] cursor-pointer'>Pricing</li>
                    <li className=' font-[500] cursor-pointer'>FAQs</li>
                </ul>
            </div>
            <img src={`${logoLight}`} alt="" className=' cursor-pointer' />
            <div className=' flex items-center justify-center gap-5 w-fit'>
                <button className=' px-[22px] py-[12px] border-black border rounded-full text-[14px] font-[600] '>Register</button>
                <button className=' px-[32px] py-[12px] bg-secondary text-white rounded-full text-[14px] font-[600] '>Login</button>
            </div>
        </section>
    </React.Fragment>
  )
}

export default Header
