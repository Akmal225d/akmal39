import React from 'react'
import './Card.scss'
const Card = ({ title="Пока не указано", price = "Не указано", photo="https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif"}) => {
  return (
 <>
 
 <div className="card">
        <img src={photo} alt="" />
        <h3>{title}</h3>
        <p>{price}</p>
        <button>Купить</button>
    </div>
 
 </>
  )
}

export default Card
