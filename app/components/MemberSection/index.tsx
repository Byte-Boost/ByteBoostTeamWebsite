import SemesterProgress from "../SemesterProgress"

interface MemberSection {
    activeSemesters:boolean[];

}
const MemberSection = ({activeSemesters}) =>{
    return (
        <div className="flex  h-48">
        <div className=" bg-[#2b3036] basis-1/2">{/*left*/}
        A
        </div>
        <div className="bg-[#232730] basis-1/2 flex flex-col">{/*right*/}
          <SemesterProgress activeSemesters={activeSemesters} />
          <div className="bg-red-500 basis-2/3 text-center place-content-center">  {/*middletext/mid-div*/}
            <p className="font-JetBrains text-white font-bold">
            "Magic is just science we don't understand. Which is why i'll start calling myself a wizard from now on"
            </p>
          </div>
          <div className="bg-green-600 basis-1/3">{/*socials/bottom-div*/}
  
          </div>
        </div>
      </div>
    )
}



