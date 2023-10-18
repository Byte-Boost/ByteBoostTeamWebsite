"use client";
import { motion } from "framer-motion";
import Backdrop from "../backdrop";

const dropIn ={
    hidden:{
        y:"-100vh",
        opacity:0,
    },
    visible:{
        y:0,
        opacity:1,
        transition:{
            duration:0.1,
            type:"spring",
            damping:25,
            stiffness:500,
        }
    },
    exit:{
        y:"100vh",
        opacity:0
    },
};

const Modal = ({handleClose}) =>{
    return(
    <Backdrop onClick={handleClose}>
        <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,   
            repeatDelay: 1
          }}
        >   
        <div className="bg-white"><p>A   </p></div>
        <button onClick={handleClose}>Close</button>
        </motion.div>
    </Backdrop>
    )
}

export default Modal;