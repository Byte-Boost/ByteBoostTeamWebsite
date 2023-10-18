"use client";
import { motion } from "framer-motion";

const Backdrop = ({children,onClick }) => {
    return (
        <motion.div
        className="backdrop"
        onClick={onClick}
        initial={{opacity:0}}
        animate={{opacity:1}}
        >
        {children}
        </motion.div>
    )
}

export default Backdrop;