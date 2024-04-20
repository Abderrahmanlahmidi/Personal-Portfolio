

const Skills = () => {

  const Skills = [

    "HTML", 
    "CSS", 
    "Javascript", 
    "Typescript", 
    "Reactjs", 
    "Nextjs", 
    "MongoDb", 
    "Bootstrap", 
    "Figma", 
    "Illustrator", 
    "InDesign", 
    "Git", 
    "Github", 
    "TailwindCss",
    "Express",
    "Nodejs",
    "Mui",
    

  ];


    return (
      <div className="px-[216px] max-[640px]:px-[16px] bg-[#04091B]">
        <div className="py-[74px] max-[640px]:py-[40px] space-y-[20px]" >
          <h2 className="font-[600] text-[32px] tracking-[-0.6px] text-[#ffff] max-[640px]:text-[24px]">Skills</h2>
          <div className="flex flex-wrap gap-[10px]" >
            {Skills.map((item, index) => (
              <button key={index} className="border border-1 border-[#273353] rounded p-[10px] text-[20px] font-medium text-[#fff]">{item}</button>
            ))}
          </div>
        </div>
      <div className="h-[1px] w-full bg-[#18264E]"></div>
      </div>
    )

}

export default Skills;