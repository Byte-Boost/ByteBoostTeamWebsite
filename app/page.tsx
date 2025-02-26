import React from "react";

import members from '../json/membersInfo.json';
import MemberSection from "./components/MemberSection";

const App = () => {
  const data = members;

  return (
    <div>
      <section className="grid place-content-center">
        <div className="bg-[#191F29] lg:h-[10rem] h-fit lg:w-[50vw] w-[19rem] m-10 flex md:flex-row border-4 border-transparent" style={{ borderImage: 'linear-gradient(to right, #FDDE5C, #F8AB5C, #F56A62, #A176C8, #759BEB, #65BEB3, #70DB96) 1' }}>
          <div className="flex lg:flex-row flex-col items-center justify-center w-full">
            <a href="https://github.com/Byte-Boost" target="_blank" className="flex justify-center mb-4">
              <img src="/static/images/bb-logo-icon.png" className="hover:scale-125 transition-all aspect-square scale-[1.00] transform w-[135px] h-[135px]" alt="Byte-Boost Logo" />
            </a>
            <div className="text-center">
              <h1 className="font-extrabold font-JetBrains text-white text-[2.5rem]">BYTE-BOOST</h1>
              <p className="text-white opacity-40 font-JetBrains text-[1rem] mt-2 cursor-not-allowed">Projects</p> 
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[#191F29] border-t-8 border-transparent" style={{ borderImage: 'linear-gradient(to right, #FDDE5C, #F8AB5C, #F56A62, #A176C8, #759BEB, #65BEB3, #70DB96) 1' }}>
          <h1 className='font-JetBrains font-bold text-white text-center text-[2rem] p-5'>MEET THE TEAM</h1>
          {data.map(result => {
            const { userId } = result;
            return (
              <div className="py-9">
                <MemberSection key={userId} result={result}></MemberSection>
              </div>
            )
          })}
        </div>
      </section>
      <section>
        <footer className=" grid place-content-center p-10 backdrop-blur-2xl  border-t-4 border-transparent" style={{ borderImage: 'linear-gradient(to right, #FDDE5C, #F8AB5C, #F56A62, #A176C8, #759BEB, #65BEB3, #70DB96) 1' }}>
            <h1 className='font-JetBrains text-white font-bold'>Copyright © 2025 Byte-Boost.</h1>
            <a className=' text-center font-JetBrains text-gray-400'>Version: v0.6.0-alpaca</a>
        </footer>
      </section>
    </div>
  );
};

export default App;
