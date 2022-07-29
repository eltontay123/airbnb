import React from 'react'
import Photogrid from '../images/Photogrid.png'
import '../styles/Hero.css'

export default function Hero() {
  return (
    <section className="hero">
        <img src={Photogrid} alt='grid' />
        <div className='hero-text'>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    </section>
  )
}
