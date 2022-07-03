import React from 'react'
import './Creations.css'
import Footer from './Footer'


function Creations() {
    return (
        <>
            <div className="creationsContainer-1">
                <div className="creationsContainer">
                    <p>Web Sites</p>
                    <p>React Web Applications</p>
                    <p>React Native Apps</p>
                    <p>PS & AI templates</p>
                </div>

               
            </div>
            <div className="dummy-div" style={{height:'5px',width:'100%'}}>

            </div>
            <div className="cre-page-footer">
            <Footer/>
            </div>
             
        </>
    )
}

export default Creations
