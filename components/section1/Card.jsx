import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div
        id="Card"
        className="h-112 w-63 p-3 m-4 rounded-3xl bg-cover grid content-content-between"
        style={{
          backgroundImage: `url(${props.img})`
        }}>
          
        <div id="top" className="h-20 p-2">
          <div className="bg-white w-8 h-8 rounded-full">
            <p className="text-lg text-center">{props.idx+1}</p>
          </div>
        </div>

        <div id="center" className="h-60 content-center p-8">
          <p className="pt-15 text-white text-lg">{props.bio}</p>
        </div>

        <div
          id="bottom"
          className="h-15 px-5 text-white flex flex-row items-center justify-between"
        >
          <button style={{backgroundColor:props.col}} className=" w-35 py-2 rounded-full font-semibold">
            {props.res}
          </button>
          <button >
            <i style={{backgroundColor:props.col}} className="ri-arrow-right-line px-3 py-3 rounded-full "></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
