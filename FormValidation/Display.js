import React from 'react'
import "./Display.css"

const Display = (item) => {

    const RemoveBtn = () => {
        item.RemoveBtn(item.product1)
    }
    const edit = () => {
        item.edit(item.product1)
    }

  return (
    <div >

      <div className='one'>
    <h3>Product : {item.product1.product}</h3>
    <h3>Rate : {item.product1.rate}</h3>
    <h3>Feature : {item.product1.feature}</h3>
    <button onClick={ () => RemoveBtn()}>Remove</button>
    <button onClick={ () => edit()}>Edit</button>
    </div>
    </div>
  )
}

export default Display