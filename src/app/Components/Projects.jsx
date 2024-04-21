

const Projects = () => {

    return(

        <div className="px-[216px] max-[640px]:px-[16px] bg-[#04091B]">
        <div className="py-[74px] max-[640px]:py-[40px] space-y-[20px]" >
            <div className="flex justify-between items-end">
             <h2 className="font-[600] text-[32px] tracking-[-0.6px] text-[#ffff] max-[640px]:text-[24px]" >Projects</h2>
                <a className="text-[20px] font-[500] text-[#BEDFFE] underline decoration-solid" href="https://github.com/Abderrahmanlahmidi">See all</a>
            </div>
            
            <div className="space-y-[40px]" >
              <div className="space-y-[10px]">
                <h3 className="text-[#fff] text-[24px] max-[640px]:text-[20px] font-[500]" >E-Commerce</h3>
                <p className="text-[20px] max-[640px]:text-[16px] text-[#B6BCCE]">I am tasked with developing a professional and visually striking e-commerce website utilizing Node.js, Express, Next.js (v14), TypeScript, and Tailwind CSS. This project aims to leverage the robust capabilities of the MERN stack technologies</p>
                <a className="text-[18px] max-[640px]:text-[14px] text-[#BEDFFE] underline underline-offset-8 relative top-[10px]"  href="https://homedecor-eccomerce-website.vercel.app/">Project Link </a>
              </div>

              <div className="space-y-[10px]">
                <h3 className="text-[#fff] text-[24px] max-[640px]:text-[20px] font-[500]" >Bank-Modern</h3>
                <p className="text-[20px] max-[640px]:text-[16px] text-[#B6BCCE]">I’m excited to design and develop a sleek, responsive landing page using Next. js, TypeScript, and Tailwind CSS. By harnessing the power of Next.js, I’ll create a high-performance</p>
                <a className="text-[18px] max-[640px]:text-[14px] text-[#BEDFFE] underline underline-offset-8 relative top-[10px]"  href="https://bank-modern-ruby.vercel.app/">Project Link </a>
              </div>

              <div className="space-y-[10px]">
                <h3 className="text-[#fff] text-[24px] max-[640px]:text-[20px] font-[500]" >Admin-Dashboard</h3>
                <p className="text-[20px] max-[640px]:text-[16px] text-[#B6BCCE]">I’m tasked with developing a dynamic and intuitive dashboard using React and Material-UI (MUI). By harnessing the power of MUI’s pre-built components and styling capabilities.</p>
                <a className="text-[18px] max-[640px]:text-[14px] text-[#BEDFFE] underline underline-offset-8 relative top-[10px]"  href="https://admin-dashboard-ten-wheat.vercel.app/">Project Link </a>
              </div>
            </div>
          
        </div>
       <div className="h-[1px] w-full bg-[#18264E]"></div>
     </div>

    )
}


export default Projects;