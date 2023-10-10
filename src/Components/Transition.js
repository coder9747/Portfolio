import React from 'react'
import { motion } from "framer-motion"

const Transition = (Component) => {
    const newComoponent = () => {
        return (<div className='t'>
            <Component />
            <motion.div className='up'
            initial={{}}
            animate={{height:0,transition:{ease:[0.23,1,0.56,1],duration:1.1}}}
            exit={{}}
             />
            <motion.div className='down' 
            initial={{}}
            exit={{height:"100%",transition:{ease:[0.23,1,0.90,1],duration:1.1}} 
        }
            />
        </div>)
    }
    return newComoponent;
}

export default Transition
