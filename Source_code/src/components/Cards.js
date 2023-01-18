import React from 'react';
import '../styles/cards.css'

const Cards = ({item, handleClick}) => {
    const {title, author, price, img} = item;
  return (
    <div className="cards">
        <div className="image_box">
            <img src={img} alt="Image" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>{author}</p>
            <p>價錢 - {price}HKD</p>
            <button onClick={()=>handleClick(item)} >加入購物車</button>
        </div>
    </div>
  )
}

export default Cards