import React from 'react'
import data from './Imagedata.js'
import './Sliderdata.css'
import {Link} from 'react-router-dom'

function Sliderdata(props) {

    const slide = data.map((d, index) => {
    
        return <div key={index}
            className={index === props.sliderIndex
                ? "myslides" : "myslidesnone"} >
                     
            <Link to={d.link}>
               
                <img src={d.src} alt={d.caption}  />
                
            </Link>


        </div>
    })
    return slide
}

export default Sliderdata
