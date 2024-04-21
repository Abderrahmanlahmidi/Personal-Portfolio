"use client"
import React from 'react'

export default function Footer() {

    const handleOpenGmail = () => {
      
        const email = 'lahmidiusa@gmail.com';
        const gmailUrl = `mailto:${email}`;
        window.open(gmailUrl);

      };
    


  return (
  <div className="px-[216px] pt-[77px] pb-[100px] max-[640px]:px-[16px] bg-[#04091B]  justify-center">
    <div className="text-center space-y-[20px]" >
        <h2 className="font-[600] text-[32px] max-[640px]:text-[28px] text-[#ffff]" >Let's create awesome products!</h2>
        <p className='text-[24px]  max-[640px]:text-[20px] font-[300] text-[#DADDE7]' >efficient code, I strive to exceed expectations and deliver results that inspire. Let's build something amazing together! </p>
        <button onClick={handleOpenGmail} className='w-[214px] h-[56px] font-[500] text-[22px]  max-[640px]:text-[18px] text-[#ffff] rounded bg-[#1055EA] hover:bg-[#0000EE] transition delay-60' >Say Hello</button>

        <div className=' space-x-[50px] max-[640px]:space-x-[30px] pt-[30px]' >
            <a href='https://www.linkedin.com/in/abderrahmane-lahmidi/' className="underline text-[20px] max-[640px]:text-[16px] font-[500] text-[#BEDFFE]">Linkedin</a>
            <a href='https://twitter.com/Abderra47978756' className="underline text-[20px] max-[640px]:text-[16px] font-[500] text-[#BEDFFE]">Twitter</a>
            <a href='https://github.com/Abderrahmanlahmidi' className="underline text-[20px] max-[640px]:text-[16px] font-[500] text-[#BEDFFE]">Github</a>
            <a href='https://www.instagram.com/lahmidiabderrahman/' className="underline text-[20px] max-[640px]:text-[16px] font-[500] text-[#BEDFFE]">Instagram</a>
        </div>
     </div>
   </div>

  )
}
