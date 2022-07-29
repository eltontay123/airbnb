import React from 'react'
import '../styles/Card.css'
import Star from '../images/Star.png'

export default function Card(props) {
  let badgeText
  if (props.openSpots === 0){
    badgeText="SOLD OUT"
  } else if (props.location === "Online"){
    badgeText = "ONLINE"
  }

  return (
    <section className='card'>
      {badgeText && <div className='card-badge'>{badgeText}</div>}
      <img className='card-img' src={`images/${props.img}`} alt="Card"/>
      <div className='card-rating'>
        <img className='star' src={Star} alt="star"/>
        {props.rating}
        <span className='card-rating-text'>({props.reviewCount}) • {props.location}</span>
      </div>
      <p className='card-title'>{props.title}</p>      
      <p className='card-price'><b>{props.price}</b> / person</p>
    </section>
  )
}
