import React from 'react'
import ExampleComponent from './Name'
import View from './View'

const Para = () => {
    return (
        <p className='c-white'> I &nbsp; am &nbsp;
            <ExampleComponent />
        </p>
    )
}

export default View(Para);
