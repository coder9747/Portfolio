import React, { useEffect, useState } from 'react';
import { Circle } from "rc-progress";
import {motion} from "framer-motion"

const ProgressComponents = ({ text, percent }) => {
    const [state, setState] = useState(0);
    useEffect(() => {
        const intervalid = setInterval(() => {
            console.log(state)
            setState((pre) => {
                if (pre == percent) { clearInterval(intervalid); return pre; }
                return pre + 1;
            })
        }, 30);
        return () => {
            clearInterval(intervalid);
        }
    }, [])
    return (
        <motion.div initial={{
            y:"-100px",
            scale:2,
            opacity:"0"
        }}
        whileInView={{"opacity":1,y:"0px",transition:{delay:0.1},scale:1,}} style={{ position: "relative", width: "max-content" }}>
            <Circle
                percent={state}
                style={style}
                strokeWidth={4}
                strokeColor={"#034e99"}
                trailWidth={4}
            />
            <span className='progress-text' style={{ position: "absolute", top: "50%", left: "50%", transform: 'translate(-50%,-50%)' }}>
                {text}
            </span>
        </motion.div>
    )
}

export default ProgressComponents


const style = {
    height: "200px",
    width: "200px"
}