import React from 'react'
import collage from "../images/collage.jpg"

function Hero() {
  return (
      <section className='hero'>
          <img className='hero-img-collage' src={collage} alt="collage" />
          <h1>Online Experiences</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto iste labore, optio voluptas, minus culpa ipsum voluptatibus dolor officiis nam facilis sapiente illo fugit. Iure magni dolorem tempora quos praesentium.</p>
    </section>
  )
}

export default Hero