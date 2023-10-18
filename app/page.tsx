
import * as data from '../public/json/membersInfo.json';
import Image from 'next/image'

const Home = () =>{
    return(
      
    <main className="flex min-h-screen flex-col">
    <div className="bg-[#291A35]/30 backdrop-blur-bg min-w-screen h-10"></div>
    <section className="grid place-content-center">
        <div className="bg-[#291A35]/50 backdrop-blur-bg h-fit lg:w-fit w-[19rem] m-10 rounded-3xl flex md:flex-row ">
            <div className="flex lg:flex-row flex-col ">
                <img src="/favicon.ico" className=" aspect-square scale-[0.75] rounded-3xl relative pointer-events-none"  ></img>
                <div className="p-12 ">
                    <h1 className="font-extrabold font-JetBrains text-white text-[3.5rem]">BYTE-BOOST</h1>
                    <p className="font-JetBrains text-gray-300">"Quotes here mate"</p>
                </div>
            </div>
        </div>
    </section>
    <section>
    <div className="bg-[#291A35]/50 backdrop-blur-bg min-h-screen grid place-content-center">
        <h1 className='font-JetBrains font-bold text-white text-center text-[2rem] p-5'>MEET THE TEAM</h1>
        <div className="grid gap-20 lg:grid-cols-4 lg:p-20 md:grid-cols-1 p-24">
            {data.map(result => {
                const {userId, name,subtitle,quote,socials} = result;
                var src = `/static/images/${userId}.jpg`;
                return ( 
                    
                <div className='rounded-2xl grid  w-72 h-[24rem] text-center teamcard' key={userId}>
                    <div>
                        <h2 className=' font-JetBrains text-[#22DDA2] p-3'>{name}</h2>
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
                    <p className='font-JetBrains text-white p-3'>"{quote}"</p>
                </div>
                 )
            })}
        </div>
  
    </div> 
    </section>  
    <section className='p-10'></section>
    <section id='footer'>
        <div className="bg-[#291A35]/30 backdrop-blur-bg min-w-screen h-fit grid place-content-center">
            <h1 className='font-JetBrains text-white font-bold'>Copyright © 2023 Byte-Boost.</h1>
            <a className='text-center font-JetBrains text-gray-400'>Version: v0.0.3-komodo</a>

        </div>

    </section>
    </main>
    )
  }
  
  
  export default Home