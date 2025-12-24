import React from 'react'
import Nav from './Nav.jsx'
import Left from './Left.jsx'
import Right from './Right.jsx'

const Sec1 = (props) => {
  return (
    <div className='bg-white h-screen w-full'>
      <Nav/>
      <div className='flex flex-row px-4 '>
        <Left/>
       <Right arr={props.Users}/>
      </div>
    </div>
  )
}

export default Sec1
