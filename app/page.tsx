"use client";
import { motion } from "framer-motion";

import Image from 'next/image'
import { useState } from "react";
import members from '../json/membersInfo.json';

import Main from './components/main';
import SocialMedia from "./components/socialmedia";
import Card from "./components/card";


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
                const {userId} = result;
                return ( 
                    <Card result={result} variants={variants} key={userId}></Card>
                 )
            })}
        </div>
  
    </div> 
    </section>  
    <section className='p-10'></section>
    <section>
        <footer className=" grid place-content-center">
            <h1 className='font-JetBrains text-white font-bold'>Copyright © 2023 Byte-Boost.</h1>
            <a className=' text-center font-JetBrains text-gray-400'>Version: v0.3.0-frog</a>
        </footer>

    </section>
    </Main>
    )
  }
  
  
  export default Home