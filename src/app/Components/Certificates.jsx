import Image from "next/image";
import Figma from "../Assets/FIGMA.jpg";
import Git from "../Assets/GIT-GITHUB.jpg";
import HtmlCss from "../Assets/HTML-CSS.jpg";
import Javascript from "../Assets/JAVASCRIPT.jpg";
import React from "../Assets/REACT.jpg";
import Typscript from "../Assets/TYPSCRIPT.jpg";


const Certificates = () => {

    return (
  
      <div id="Certificates" className="px-[216px] max-[640px]:px-[16px] bg-[#04091B]">
        <div className="py-[74px] max-[640px]:py-[40px] space-y-[20px]" >
            <div className="flex justify-between items-end">
             <h2 className="font-[600] text-[32px] tracking-[-0.6px] text-[#ffff] max-[640px]:text-[24px]" >Certificates </h2>
                <a className="text-[20px] font-[500] text-[#BEDFFE] underline decoration-solid" href="https://drive.google.com/drive/folders/1xdxhFtXf6W8Sfua8SZp0J1Rk45xsYkq1">See all</a>
            </div>
            <div className="grid gap-[24px] max-[640px]:grid-cols-2 grid-cols-3 max-[500px]:grid-cols-1 justify-center " >
                <a href="https://www.coursera.org/account/accomplishments/verify/FERKX3V4GYBG"><Image src={Figma} /></a>
                <a href="https://www.coursera.org/account/accomplishments/verify/B36TMBB3PRQQ"><Image src={Git} /></a>
                <a href="https://www.coursera.org/account/accomplishments/verify/K4YVL7DVV4XS"><Image src={HtmlCss} /></a>
                <a href="https://www.coursera.org/account/accomplishments/verify/WU46BRYN7LGX"><Image src={Javascript} /></a>
                <a href="https://www.coursera.org/account/accomplishments/verify/5G4N28EJV2RV"><Image src={React} /></a>
                <a href="https://www.coursera.org/account/accomplishments/verify/2CHKZ9M77X44"><Image src={Typscript} /></a>
            </div>
        </div>
       <div className="h-[1px] w-full bg-[#18264E]"></div>
     </div>

    )
}

export default Certificates;