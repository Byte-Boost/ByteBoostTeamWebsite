"use client";
import { motion } from "framer-motion";

import Image from 'next/image'
import { useState } from "react";
import members from '../json/membersInfo.json';

import Main from './components/main';
import SocialMedia from "./components/socialmedia";


const variants = {
    hidden: {
        scale: .8,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0.1
            },
    },
    rotate180:{
        scale:1,
        rotateY:180,
        opacity:0,
    }, 
    rotate: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0.1
            },
        rotateY:180,
    },
   
}

const Home = () =>{
    const data = members;
    const [flipped,setFlip] = useState(false);

    const unflip = () => setFlip(false);
    const flip = () => setFlip(true);

    return(

    <Main>
    <Image 
    className="opacity-25 pointer-events-none grid-1 bg-repeat "
    src="/grid.svg" 
    alt='grid' 
    objectFit='cover' 
    layout='fill' 
    objectPosition='center'
    />
     <Image 
    className="opacity-25 pointer-events-none grid-2 bg-repeat left-96 "
    src="/grid.svg" 
    alt='grid' 
    objectFit='cover' 
    layout='fill' 
    objectPosition='center'
    />
      <Image 
    className="opacity-25 pointer-events-none grid-3 bg-repeat left-96 "
    src="/grid.svg" 
    alt='grid' 
    objectFit='cover' 
    layout='fill' 
    objectPosition='center'
    />
    <div className="bg-[#291A35]/30 backdrop-blur-bg min-w-screen h-10"></div>
    <section className="grid place-content-center">
        <motion.div initial="hidden" animate="visible" whileHover={{ scale: 1.2 }} whileTap={{scale:1.0}} variants={variants} className="bg-[#291A35]/60 backdrop-blur-bg h-fit lg:w-fit w-[19rem] m-10 rounded-3xl flex md:flex-row team-header cursor-pointer">
            <div className="flex lg:flex-row flex-col ">
                <a className="flex lg:flex-row flex-col"href="https://github.com/Byte-Boost" target="_blank">
                <img src="/static/images/bb-logo-solid-green.png" className=" aspect-square scale-[0.75] rounded-3xl relative pointer-events-none w-[256px] h-[256px]"  ></img>
                <div className="p-12 ">
                    <h1 className="font-extrabold font-JetBrains text-white text-[3.5rem]">BYTE-BOOST</h1>
                    <p className="font-JetBrains text-gray-300">"Quotes here mate"</p>
                </div>
                </a>
            </div>
        </motion.div>
    </section>
    <section>
    <div className="bg-[#291A35]/50 backdrop-blur-bg min-h-screen grid place-content-center -z-10">
        <h1 className='font-JetBrains font-bold text-white text-center text-[2rem] p-5'>MEET THE TEAM</h1>
        <div className="grid gap-20 lg:grid-cols-4 lg:p-20 md:grid-cols-1 p-24" id='card-container'>
            {data.map(result => {
                const {userId, name,subtitle,quote,backquote,socials} = result;
                var src = `/static/images/${userId}.jpg`;

                let hasGit = socials.github? true : false ;

                let hasLinkend = socials.linkedin? true : false;

                let hasInstagram = socials.instagram? true: false;

                let hasGmail = socials.gmail? true:false;

                let hasTwitter = socials.twitter? true:false;
        
                return ( 
                <motion.div className={ `rounded-2xl grid  w-72 h-[24rem] text-center ${flipped? null:"cursor-pointer"} team-card`} key={userId} id={userId} initial="hidden" animate={flipped? "rotate":"visible"} whileHover={{ scale: 1.2 }}  whileTap={{scale:1.1}}  onClick={(e) =>  {flipped? setFlip(false):setFlip(true) ; console.log(flipped)}} variants={variants}>
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
                         <button className="text-center font-JetBrains text-gray-400 text-sm">Click to flip</button>
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
            })}
        </div>
  
    </div> 
    </section>  
    <section className='p-10'></section>
    <section>
        <footer className=" grid place-content-center">
            <h1 className='font-JetBrains text-white font-bold'>Copyright © 2023 Byte-Boost.</h1>
            <a className=' text-center font-JetBrains text-gray-400'>Version: v0.2.8-camel</a>
        </footer>

    </section>
    </Main>
    )
  }
  
  
  export default Home