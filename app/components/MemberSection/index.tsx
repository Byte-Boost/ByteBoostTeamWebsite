import Image from "next/image";
import SemesterProgress from "../SemesterProgress"
import Socials from "../Socials";

const MemberSection = ({ result }) => {
  const {
    userId,
    name,
    subtitle,
    quote,
    quote_author,
    backquote,
    socials,
    active,
    active_semesters
  } = result;

  var pic_src = `/static/images/${userId}.jpg`;
  return (
    <div className="flex h-48">
      <div className=" pl-10 items-center flex bg-[#2b3036] basis-1/2  text-white font-JetBrains font-bold overflow-hidden">
        <div className="transform scale-110">
          <Image
            src={pic_src}
            width={100}
            height={100}
            className="rounded-2xl pointer-events-none select-none"
            alt={userId + 'pic'}
          />
        </div>
        <div className="flex flex-col pl-10 transform scale-110"> {/* Scale the text content */}
          <p className="text-xl">{name}</p>
          <br />
          {subtitle ?
            <div className="relative text-white font-bold  px-6 py-2">
              <div
                className="absolute inset-0 bg-[#f8f3f2] transform z-0"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 100%)',
                }}
              ></div>
              <span className="relative z-10 text-[#F57461] pt-2">{subtitle}</span>
            </div>
            :
            <div className="relative text-white font-bold  px-6 py-2">
              <div
                className="absolute inset-0 bg-[#f8f3f2] w-[210px] transform z-0"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 100%)',
                }}
              ></div>
              <span className="relative z-10 text-[#1d77ff] ">Dev Team</span>
            </div>
          }
          {active ?
            <div className="relative text-white font-bold inline-block px-6 py-2">
              <div
                className="absolute inset-0 bg-[#040011] w-[190px] transform z-0"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 100%)',
                }}
              ></div>
              <span className="relative z-10 text-[#22DDA2] pt-2">Active Member</span>
            </div>
            :
            <div className="relative text-white font-bold inline-block px-6 py-2">
              <div
                className="absolute inset-0 bg-[#040011] w-[190px] transform z-0"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 100%)',
                }}
              ></div>
              <span className="relative z-10 text-[#22DDA2] opacity-40">Inactive Member</span>
            </div>
          }
        </div>
      </div>
      <div className="bg-[#232730] basis-2/3 flex flex-col">{/*right*/}
        <SemesterProgress activeSemesters={active_semesters} />
        <div className="basis-2/3 text-center place-content-center">
          {quote ?
            <div className="font-JetBrains text-white text-pretty font-bold">
              <p>“{quote}”</p>{quote_author ? <p>- {quote_author}</p> : null}

              {backquote}
            </div>
            :
            <div className="flex justify-center text-center place-content-center">
              <Image
                src='/static/images/bb-logo-icon.png'
                width={100}
                height={100}
                alt="bb-logo"
                className="select-none pointer-events-none"
              />
            </div>
          }
        </div>
        <div className="basis-1/3">{/*socials/bottom-div*/}
          <Socials className={''} socials={socials}></Socials>
        </div>
      </div>
    </div>

  )
}



export default MemberSection;