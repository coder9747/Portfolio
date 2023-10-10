import React, { useEffect, useState } from 'react'
import Tabs from '../Components/Tabs';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Main from './Main';
import Projects from './Projects';
import Skills from './Skills';


const Home = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);
  const [inputText, setInputText] = useState("");
  const [isFullScreen, setIsFullScreen] = useState(false);
  useEffect(() => {
    if (activeTab == 0) {
      setInputText("localhost:3000/home");
    }
    else if (activeTab == 1) {
      setInputText("localhost:3000/projects");
    }
    else if (activeTab == 2) {
      setInputText("localhost:3000/skills");
    }
    else {
      setInputText("localhost:3000/newtab")
    }

  }, [activeTab]);


  const [tabs, setTab] = useState([{
    text: "Home",
    src: "https://www.google.com/favicon.ico",
    link: "/"
  }, {
    text: "Projects",
    src: "https://img.icons8.com/?size=512&id=1TCX2ww987mj&format=png",
    link: "/project"
  }, {
    text: "Skills",
    src: "https://img.icons8.com/?size=512&id=eo7oyvlYn4yl&format=png",
    link: "/skills"
  },
  ]);
  function handleNewTab() {
    setTab((pre) => {
      const newTab = [...pre];
      newTab.push({
        text: "New Tab",
        src: "https://www.google.com/favicon.ico  ",
        link: "newtab"
      })
      return newTab;
    });
  }
  const handleFullScreen = () => {
    setIsFullScreen(true);
    document.body.requestFullscreen().catch((val) => console.log(val))
  };
  return (
    <div className='h-full'>
      <div className="top" style={{zIndex:1000,}}>
        <div className="tabs">
          {
            tabs.map((item, idx) => {
              return <Tabs
                isActive={idx === activeTab}
                tabIndex={idx}
                text={item.text}
                src={item.src}
                setActive={setActiveTab}
                isLeft={idx == activeTab || idx == activeTab - 1}
                link={item.link}
              />
            })
          }
          <i class="fa-solid fa-plus" onClick={handleNewTab}></i>
        </div>
        <div className="search">
          <div className="left">
            <i class="fa-solid fa-arrow-left"></i>
            <i class="fa-solid fa-arrow-right"></i>
            <i class="fa-solid fa-rotate-right"></i>
          </div>
          <div className="center">
            <i class="fa-solid fa-lock icon-1"></i>
            <input value={inputText} disabled type="text" />
            <i class="fa-regular fa-star icon-2"></i>
          </div>
          <div className="right">
            <i class="fa-solid fa-puzzle-piece"></i>
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      </div>
      {!isFullScreen && <button className='full-screen' onClick={handleFullScreen}>Go Full Screen</button>}
      <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<Main />} />
          <Route path='/project' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default React.memo(Home);
