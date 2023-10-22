
import {motion} from "framer-motion"
import Image from 'next/image'
import { useState } from "react";
import SocialMedia from "../socialmedia";

const Card = ({result,variants}) => {

    const [flipped,setFlip] = useState(false);

    const unflip = () => setFlip(false);
    const flip = () => setFlip(true);

    const {userId, name,subtitle,quote,backquote,socials} = result;
    
    var src = `/static/images/${userId}.jpg`;

    let hasGit = socials.github? true : false ;

    let hasLinkend = socials.linkedin? true : false;

    let hasInstagram = socials.instagram? true: false;

    let hasGmail = socials.gmail? true:false;

    let hasTwitter = socials.twitter? true:false;


    return(
        <motion.div className={ `rounded-2xl grid  w-72 h-[24rem] text-center ${flipped? null:"cursor-pointer"} team-card`} key={userId} id={userId} initial="hidden" animate={flipped? "rotate":"visible"} whileHover={{ scale: 1.2 }}  whileTap={{scale:1.1}}  onClick={(e) =>  {flipped? setFlip(false):setFlip(true) ; console.log(flipped)}} variants={variants} >
        {/* back-card */}
    <motion.div className=' w-72 h-[24rem] team-card-back absolute grid ' key={userId} id={userId} initial="hidden" animate={flipped?"rotate":"rotate_180"}  whileTap={{zIndex:1}}  variants={variants}>
            <div>
            <h2 className=' font-JetBrains card-title p-3'>{name}</h2>
            <p className='font-JetBrains text-[#9F9F9F] text-[0.85rem]'>{subtitle}</p>
          
            {hasGit && <SocialMedia link={socials.github } social="github" className="visible social-icon z-50"></SocialMedia>}
            {hasLinkend && <SocialMedia link={socials.linkedin} social="linkedin"  className="visible  social-icon z-50"></SocialMedia>}
            {hasInstagram && <SocialMedia link={socials.instagram} social="instagram"  className="visible  social-icon"></SocialMedia>}
            {hasGmail && <SocialMedia link={socials.gmail} social="gmail"  className="visible  social-icon" ></SocialMedia>}
            {hasTwitter && <SocialMedia link={socials.twitter} social="twitter"  className="visible  social-icon"></SocialMedia>}
            
            
            <p className="font-JetBrains text-white">{backquote}</p>
             <button className="text-center font-JetBrains text-gray-400 text-sm" >Click to flip</button>
            </div>
            
    </motion.div>
        
    <motion.div className={`rounded-2xl grid  w-72 h-[24rem] text-center team-card-front ${flipped? "hidden":null}`} animate={flipped?"hidden":"visible"} variants={variants}>
        <div>
            <h2 className=' font-JetBrains card-title p-3'>{name}</h2>
            <p className='font-JetBrains text-[#9F9F9F] text-[0.85rem]'>{subtitle}</p>
        </div>
        <div className='text-center grid place-content-center'>

        <Image
        src={src} 
        className='rounded-[3.5rem] pointer-events-none'
        alt="userprofile" 
        width={150} 
        height={150}
        />
    
        </div>
        <p className='font-JetBrains text-white p-3  '>"{quote}"</p>
        <p className="text-center font-JetBrains text-gray-400 text-sm">Click to see contacts</p>
    </motion.div> 
    </motion.div>
    )
}


export default Card;