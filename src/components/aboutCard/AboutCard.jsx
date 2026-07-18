import React from 'react'
import "./aboutcard.css"

const AboutCard = ({img, title}) => {
  return (
    <div className='aboutcard'>
<div className="aboutcard-img">
  <img src={img} alt="" />
</div>
<div className="aboutcard-content">
<p>SOZO</p>
<h3>{title}</h3>
</div>
   
    </div>
  )
}

export default AboutCard