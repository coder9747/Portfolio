import React from 'react'
import { Link } from 'react-router-dom'

const Tabs = ({isActive,text,src,setActive,tabIndex,isLeft,link}) => {
    console.log(isLeft)
    return (
        <Link to={link} className={`google ${isActive?"active-tab":null}`} onMouseOver={(e)=>e.target} onClick={()=> setActive(tabIndex)}>
            <div className="logo-text">
                <img src={src} alt="" />
                <p className='text'>{text}</p>
            </div>
            <div className="cross"><i class="fa-solid fa-xmark"></i></div>
           { !isLeft &&   <div className="line"></div>}
        </Link>
    )
}

export default Tabs
// https://www.google.com/favicon.ico