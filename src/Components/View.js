import React from 'react'
import {motion} from "framer-motion"
const View = (Components) => {
  return function()
  {
    return(<div className='view'>
        <Components/>
        <motion.div className="cover"
        initial={{width:["100%"]}}
        animate={{width:"0%"}}
        transition={{delay:1}}
        ></motion.div>
    </div>)
  }
}

export default View
