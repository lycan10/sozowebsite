import React from 'react'
import "./discovercard.css"

const DiscoverCard = ({img, title, content, paddingTop}) => {
  return (
    <div className='discovercard' >
<img src={img} alt={title}  style={{paddingTop: paddingTop }}/>
<div className='discovercard-text' >
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
    </div>
  )
}

export default DiscoverCard