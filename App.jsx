import React from 'react'
import Sec1 from './components/section1/Sec1.jsx'

const App = () => {
  const Users=[
    {
      img:"https://tinyurl.com/5buzbhyf",
      bio:"Prime Customers, that have access to bank credit and are satisfied with the current product",
      value:"Satisfied",
      color:"blue"
    },
    {
      img:"https://tinyurl.com/5ytabe8f",
      bio:"Customers from near prime abd sub-prime segments with no access to bank credit",
      value:"Underbanked",
      color:"lightgreen"
    },
    {
      img:"https://images.unsplash.com/photo-1761576474603-57831333bd33?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio:"Prime Customers, that have access to bank credit and are satisfied with the current product",
      value:"Underserved",
      color:"orange"
    },
     {
      img:"https://images.unsplash.com/photo-1762803842029-5e34663d98be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzNXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
      bio:"Prime Customers, that have access to bank credit and are satisfied with the current product",
      value:"Underserved",
      color:"pink"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1761298779249-1165dd0f3fb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM5OXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
      bio:"Prime Customers, that have access to bank credit and are satisfied with the current product",
      value:"Underserved",
      color:"brown"
    },

   
  ]
  return (
    <div>
      <Sec1 Users={Users} />
    </div>
  )
}

export default App
