import React from "react";

interface SemesterProgressProps {
  activeSemesters: boolean[];
}

const SemesterProgress: React.FC<SemesterProgressProps> = ({ activeSemesters }) => {
  const semesters = [
    { label: "1° SEM", color: "bg-[#F57461]" },
    { label: "2° SEM", color: "bg-[#B972AA]" },
    { label: "3° SEM", color: "bg-[#8A89DA]" },
    { label: "4° SEM", color: "bg-[#71A3DE]" },
    { label: "5° SEM", color: "bg-[#66BCB6]" },
    { label: "6° SEM", color: "bg-[#6FD998]" },
  ];

  return (
    <div className="flex items-center">
      {semesters.map((sem, index) => {
        const isActive = activeSemesters[index];
        return (
          <div
            key={index}
            className="relative select-none font-JetBrains"
            style={{
              marginLeft: index === 0 ? "0" : "-20px", // Distance between chevrons
            }}
          >
            {/* Chevron Shape */}
            <div
              className={`
                px-6 py-0 text-white font-bold relative flex items-center
                ${isActive ?   sem.color : 'bg-[#45474B]'} ${isActive ? "" : "bg-[#45474B] text-[#FFFFFF80]"} 
              `}
              style={{
                clipPath: "polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)", 
                zIndex: `${semesters.length - index}`, 
              }}
            >
              {sem.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const App = () => {
  const activeSemesters = [false, false,  true, false, true, false,]; 

  return (
    <div className=" bg-gray-900 flex ">
      <SemesterProgress activeSemesters={activeSemesters} />
    </div>
  );
};

export default App;
