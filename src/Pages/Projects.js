import React from 'react'
import Transition from '../Components/Transition'
import { motion } from "framer-motion";


const Projects = () => {
  const container = {
    hidden: {

    },
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 1},
    }
  }
  const child = {
    visible: {
      opacity: [0,0,0,0,0.7,1],
      x:0,
      y:0,
      scale:1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      scale:0.8,
      x: 90,
      y:90,
      transition: {
        type: "spring",
        damping: 5,
        stiffness: 50,
      },
    },
    exit: {
      y: -30,
      opacity: 0,
    }
  };
  return (
    <motion.div className="box"
      variants={container}
      animate="visible"
      initial="hidden"
    >
      <motion.div className="box-items"
      style={{height:"400px",width:"300px"}}
      variants={child}
      >
        <img src="https://site.surveysparrow.com/wp-content/uploads/2020/08/How-to-type-faster-Tips-and-Tricks-to-be-a-Typing-Pro.png" alt="" />
        <h4 className='text-white'>Typing Website</h4>
        <p className='text-white'>This is Typing Website Where You Can Practce Touch Typing</p>
        <div className="tech">
          <span>React</span>
          <span>Css</span>
          <span>JavaScript</span>
        </div>
        <a href='https://coder9747.github.io/TypingSite/' target='__blank' id='link'>Live Demo</a>
      </motion.div>
      <motion.div className="box-items"
      style={{height:"400px",width:"300px"}}
      variants={child}
      >
        <img src="https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg" alt="" />
        <h4 className='text-white'>News Website</h4>
        <p className='text-white'>This is News Website Full featured With Admin Pannel</p>
        <div className="tech">
          <span>React</span>
          <span>Css</span>
          <span>JavaScript</span>
          <span>Firebase</span>
          <span>Jodi Rich Text Editor</span>
          <span>Tailwind</span>
        </div>
        <a href='https://coder9747.github.io/TypingSite/' target='__blank' id='link'>Live Demo</a>
      </motion.div>
      <motion.div className="box-items"
      style={{height:"400px",width:"300px"}}
      variants={child}
      >
        <img src="https://site.surveysparrow.com/wp-content/uploads/2020/08/How-to-type-faster-Tips-and-Tricks-to-be-a-Typing-Pro.png" alt="" />
        <h4 className='text-white'>Typing Website</h4>
        <p className='text-white'>This is Typing Website Where You Can Practce Touch Typing</p>
        <div className="tech">
          <span>React</span>
          <span>Css</span>
          <span>JavaScript</span>
        </div>
        <a href='https://coder9747.github.io/TypingSite/' target='__blank' id='link'>Live Demo</a>
      </motion.div>
      

    </motion.div>
  )
}

export default Transition(Projects);
