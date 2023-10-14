import React from 'react'
import Transition from '../Components/Transition';
import { motion } from "framer-motion";
import ProgressComponents from '../Components/ProgressBar/ProgressComponents';


const Skills = () => {
  const skillsItem = [
    {
      name: "JAVASCRIPT (LANGUAGE)",
      percent: 80,
    },
    {
      name: "C/C++ (LANGUAGE)",
      percent: 60,
    },

    {
      name: "HTML/CSS (FRONT-END)",
      percent: 60,
    },
    {
      name: "REACT (FRONT-END)",
      percent: 60,
    },
    {
      name: "TAILWIND (FRONT-END)",
      percent: 60,
    },
    {
      name: "FRAMER MOTION (FRONT-END ANIMATION)",
      percent: 60,
    },
    {
      name: "MONGO-DB (BACKEND)",
      percent: 60,
    },
    {
      name: "EXPRESS (BACKEND)",
      percent: 40,
    },
    {
      name: "SQL (BACKEND)",
      percent: 60,
    },

    {
      name: "NODE JS (BACKEND)",
      percent: 60,
    },

    {
      name: "GIT/GITHUB (TOOL)",
      percent: 60,
    },


    {
      name: "FIREBASE (BACKEND)",
      percent: 60,
    },
  ]
  return (
    <div className='skills'>
      <motion className="skills">
        <h1 className='skills-heading'>My <span className='text-violet'>Skills</span></h1>
      </motion>
      <div className='skills-box'>
        {skillsItem.map((item) => {
          return <ProgressComponents
            text={item.name}
            percent={item.percent}
          />
        })}
      </div>
    </div>

  )
}

export default Transition(Skills);