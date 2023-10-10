import React from 'react'
import View from './View'

const Greet = () => {
  return (
    <p className='c-white'>   "Hi, my name is <span className='name'>Pratyush Karn"</span></p>
  )
}

export default View(Greet);
