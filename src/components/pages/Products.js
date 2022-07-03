import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import './Products.css'
import {IoIosArrowDroprightCircle} from 'react-icons/io'

function Products() {
    return (
        <>
            <div className="Products-con"  >
                <div className='ProductsContainer' >
                    <span className='Productstitle'>
                        <p>Realsed Products</p>
                    </span>

                    <div className="container-1">

                    <div className="products-list-items">
                            <div className="products-list-title">
                               Age Calculator
                            </div>

                            <div className="products-list-img">
                                <img src="./Assets/p-img3.png" alt="p-img3" style={{height:'90%'}}/>
                            </div>
                            
                            <button>
                            <a  src='http://agecalc.unaux.com/?i=1'>
                               <IoIosArrowDroprightCircle className='checkout-btn-icon'/> <span className='checkout-btn-text' > <a href="http://agecalc.unaux.com/?i=1">try it</a></span> 
                               </a>
                            </button>
                           
                           
                        </div>

                        <div className="products-list-items">
                            <div className="products-list-title">
                                  PDFs collection
                            </div>

                            <div className="products-list-img">
                                <img src="./Assets/p-img1.png" alt="p-img1" />
                            </div>
                            <Link to='./Pdfpage'>
                            <button>
                               <IoIosArrowDroprightCircle className='checkout-btn-icon'/> <span className='checkout-btn-text' >try it</span> 
                            </button>
                            </Link>
                           
                        </div>

                         <div className="products-list-items">
                            <div className="products-list-title">
                                Counter Application
                            </div>

                            <div className="products-list-img">
                                <img src="./Assets/p-img2.png" alt="p-img2" style={{height:'90%'}}/>
                            </div>
                            <Link to='./Counterapp'>
                            <button>
                               <IoIosArrowDroprightCircle className='checkout-btn-icon'/> <span className='checkout-btn-text' >try it</span> 
                            </button>
                            </Link>
                           
                        </div>

                        

                        


                    </div>


                </div>
            </div>

             

            <div className='pro-footer'>
                <Footer />
            </div>

        </>
    )
}

export default Products