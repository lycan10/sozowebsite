import React from 'react'
import "./homebutton.css"
import { FaChevronRight } from "react-icons/fa6";

const HomeButton = ({title}, style) => {
  return (
    <div className="home-button" style={style}>
        <p>{title}</p>
        <FaChevronRight />
    </div>
  )
}

export default HomeButton