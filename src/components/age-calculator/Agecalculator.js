import React from 'react'
import './Agecalculator.css'

function Agecalculator() {
  
    let daysH=document.getElementById('date');
let monthH=document.getElementById('month');
let yearH=document.getElementById('year');

const btn =document.getElementById('calc-btn');
var today=new Date();
 let d=today.getDate();
 let m=today.getMonth()+1;
 let y=today.getFullYear();
console.log(y);
 


document.getElementById('btn').addEventListener('click',(days,month,year)=>{
        days=daysH.value; 
        month=monthH.value;
        year=yearH.value;

        if(daysH.value=="" || monthH.value=="" || yearH.value==""){
           return alert('please enter properly');

        }
    }
)
       
    return (
        <div>
            <div className="age-calc-container">

                <p className='age-calc-title'>Age Calculator</p>

                <h2 className='age-text-1'>Hey Beautiful, What's your name?<br />
                    <input type="text" placeholder='Enter Your name' />
                </h2><br />

                <h2>Enter Your Date of Birth <br />
                    <input type="number" id='date' placeholder='Days' className='input' /><br />
                    <input type="number" id='month' placeholder='Month' className='input' /><br />
                    <input type="number" id='year' placeholder='Year' className='input' />
                </h2>
                <div className="age-btns">
                    <div className="age-btns-1">
                        <button id='calc-btn'>Calculate</button>
                        <button type="reset" className='reset-btn'>Reset</button>
                    </div>
                </div>

                <div className="show-age-container">
                    <p></p>
                </div>

            </div>
        </div>
    )
}

export default Agecalculator
