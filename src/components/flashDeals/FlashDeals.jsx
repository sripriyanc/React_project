import React from 'react'
import FlashCard from './FlashCard'

// function FlashDeals() {
//   return (
//     <div><h1>FlashDeals</h1></div>
//   )
// }

// export default FlashDealsimport React from "react"
// import FlashCard from "./FlashCard"
// import "./style.css"

const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Flash Delas</h1>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default FlashDeals
