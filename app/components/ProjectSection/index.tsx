import Image from "next/image";
import SemesterProgress from "../SemesterProgress";
import Socials from "../Socials";

const ProjectSection = ({ result }) => {
  const {
    name,
    semester,
    link_github,
    link,
    description,
    partner,
    members,
    tech,
    tools,
  } = result;
  const semesters = [
    { label: "1° SEM", color: "bg-[#F57461]" },
    { label: "2° SEM", color: "bg-[#B972AA]" },
    { label: "3° SEM", color: "bg-[#8A89DA]" },
    { label: "4° SEM", color: "bg-[#71A3DE]" },
    { label: "5° SEM", color: "bg-[#66BCB6]" },
    { label: "6° SEM", color: "bg-[#6FD998]" },
  ];
  const sem = semesters[semester - 1];
  const members_list = members
  return (
    <div className="flex md:h-48 h-[50vh] md:flex-row flex-col">
      <div className=" pl-10 items-center flex bg-[#2b3036] basis-1/2  text-white font-JetBrains font-bold overflow-hidden">
        <div className="relative select-none font-JetBrains scale-150">
          {/* Chevron Shape */}
          <div
            className={`
                  px-6 py-0 text-white font-bold relative flex items-center
                  ${sem.color} 
                `}
            style={{
              clipPath: "polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)",
            }}
          >
            {sem.label}
          </div>
          
        </div>
        <h1 className="text-xl">{name}</h1>
        <p>{description}</p>
        {
            members_list.map(result =>{
                const {id,description} = result
                return(
                    <div>
                    <p>{id}</p>
                    <p>{description}</p>
                    </div>
                )
            })
        }
      </div>
    </div>
  );
};

export default ProjectSection;
