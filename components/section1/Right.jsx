import React from 'react'
import Card from './Card'

const Right = (props) => {
  
  return (
    <div className=" 
  max-h-screen w-5/7 content-center px-5 overflow-x-auto
  [&::-webkit-scrollbar]:hidden
">   {/* i have copied this div from chatgpt to hide the scrollbar which was earlier present */}


      <div id='container' className='  h-9/10 flex flex-row '>
      {
        props.arr.map(function(elm,idx){
          return(
            <Card img={elm.img} bio={elm.bio} res={elm.value} idx={idx} col={elm.color}/>
          )
        })
      }
      </div>
    </div>
  )
}

export default Right
