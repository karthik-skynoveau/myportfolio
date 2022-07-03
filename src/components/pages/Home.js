import React from 'react'
import { Link, } from 'react-router-dom'
import Footer from './Footer'
import './Home.css'
import { IoIosArrowForward, IoIosArrowBack, IoLocationSharp, IoMdMail } from 'react-icons/io'
import { AiOutlineGlobal, AiFillLinkedin, AiFillTwitterSquare, AiFillFacebook, AiOutlineInstagram, AiOutlineYoutube, AiOutlineWhatsApp } from 'react-icons/ai'
import { RiPhoneFill } from 'react-icons/ri'
import { MdLocationOn } from 'react-icons/md'
import { HiPhone } from 'react-icons/hi'
import Pdfpage from './Pdfpage'
import Slider from '../slider/Slider.js'

function Home() {
    return (

        <>
            <div className="home-container">
                {/* main-phone-container */}
                <div className="phone-no-main-container">

                    <div><HiPhone className='phone-main-icon' /></div>
                    <span> <a href="tel:9360375911">9360375911</a></span>

                </div>

                {/* social-media */}
                <div className="social-media-main-container">
                    <div className="social-media-container">
                        <div className="social-link">
                            <a href="https://www.linkedin.com/in/karthik-b-736308209"><AiFillLinkedin className='icons' /><span className='icon-name'>Linkedin</span> </a>
                        </div>
                        <div className="social-link">
                            <a href="https://twitter.com/Karthik10195337"><AiFillTwitterSquare className='icons' /><span className='icon-name'>Twitter</span></a>
                        </div>

                        <div className="social-link">
                            <a href="https://m.facebook.com/profile.php"><AiFillFacebook className='icons' /> <span className='icon-name'>Facebook</span></a>
                        </div>
                        <div className="social-link">
                            <a href="https://www.instagram.com/arrow_karthik_51/"><AiOutlineInstagram className='icons' /><span className='icon-name'>Instagram</span> </a>
                        </div>
                        <div className="social-link">
                            <a href="https://www.youtube.com/channel/UCnl4Bp2_kQkMfRasUMHamfA/playlists"><AiOutlineYoutube className='icons' /><span className='icon-name'>Youtube</span> </a>
                        </div>
                        <div className="social-link">
                            <a href="https://wa.link/y2gz6b"><AiOutlineWhatsApp className='icons' /> <span className='icon-name'>Whatsapp</span></a>
                        </div>
                    </div>
                </div>

                {/* Image-slider */}

                <Slider/>

                {/* <div className="slide-main-container">
                    <div className="slider-container">
                        <div className="prev"><IoIosArrowBack /></div>
                        <div className="next"><IoIosArrowForward /></div>
                        <div className="slider">
                            <div className="slider-image-container">
                                <img width='100%' src="./Assets/demo-slide.png" alt="image-1" />
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* resume-container */}
                <div className="resume-container">

                    {/* profile */}
                    <div className="name-container">
                        <div className="name-container-right">
                            <img src="./Assets/photos1.png" alt="profile" width='50px' />
                        </div>
                        <div className="name-container-left">
                            <div>
                                KARTHIK B
                            </div>
                            <div>
                                web & mobile  application developer
                            </div>
                            <button>
                               <a href="https://drive.google.com/uc?id=1PxWoRPtN0FIzZc46JDCRWdLx4h8gcck2"> Download CV</a>
                            </button>
                        </div>
                    </div>

                    {/* about-me */}
                    <div className="about-container">
                        <div className='about-me'><p>About Me</p></div>

                        <div className="education">
                            <div className="education-title">Education</div>
                            <table>

                                <tr>
                                    <td>B.E ECE</td>
                                    <td className='tdwidth' >Kongunadu Institutions</td>
                                    <td className='tdwidth-2'>8.76 CGPA</td>
                                </tr>
                                <tr>
                                    <td className='tdwidth-1'>HSC (Bio-Maths) </td>
                                    <td >SVB Konnayar</td>
                                    <td>79.8%</td>
                                </tr>
                                <tr>
                                    <td>SSLC </td>
                                    <td>MHSF Namakkal  </td>
                                    <td>92%</td>
                                </tr>
                            </table>
                        </div>

                        {/* personal */}

                        <div className="personal">
                            <div className="personal-title">Personal</div>
                            <table>

                                <tr>
                                    <td>Name</td>
                                    <td> Karthik B</td>
                                </tr>
                                <tr>
                                    <td>DOB </td>
                                    <td>05.11.2001</td>
                                </tr>
                                <tr>
                                    <td>Father's Name</td>
                                    <td>Balasubramaniyam R</td>
                                </tr>
                                <tr>
                                    <td>Strenghts</td>
                                    <td>Able to work more time</td>
                                </tr>
                                <tr>
                                    <td>Hobbies</td>
                                    <td>Learning and mentoring</td>
                                </tr>

                            </table>
                        </div>

                        {/* contact-info */}

                        <div className="contact-info">
                            <div className="contact-info-title">Contact Info</div>
                            <table>
                                <tr>
                                    <td>Mail</td>
                                    <td><a href="karthik51120001@gmail.com">karthik51120001@gmail.com</a></td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    {/* my-activities */}
                    <div className="my-acivities-title">Skills</div>

                    <div className="my-activities">

                        <div className="my-activities-container">


                            <div className="activ-imgs">
                                <img src="./Assets/java-logo.png" alt="java" />
                            </div>
                            <div className="activ-imgs">
                                <img src="./Assets/html-css3-logo.png" alt="html-css3" />
                            </div>
                            <div className="activ-imgs">
                                <img src="./Assets/js-logo.jpg" alt="html-css3" />
                            </div>
                            <div className="activ-imgs">
                                <img src="./Assets/boostrap-logo.png" alt="html-css3" />
                            </div>
                            <div className="activ-imgs">
                                <img src="./Assets/react-logo.png" alt="java" />
                            </div>
                            <div className="activ-imgs">
                                <img src="./Assets/react-native-logo.jpg" alt="java" />
                            </div>




                            <div className="activ-imgs">
                                <img src="./Assets/ant-design-logo.png" alt="java" />
                            </div>
                            <div className="activ-imgs">
                                <img src="./Assets/office-logo.png" alt="ai" />
                            </div>
                            <div className="activ-imgs">
                                <img src="./Assets/ai-logo.png" alt="ai" />
                            </div>
                            <div className="activ-imgs">
                                <img src="./Assets/ps-logo.png" alt="java" />
                            </div>
                            <div className="activ-imgs">
                                <img src="./Assets/v-editing-logo.png" alt="java" />
                            </div>
                            <div className="activ-imgs">
                                <img src="./Assets/windows10-logo.png" alt="java" />
                            </div>
                        </div>
                    </div>

                    {/* projects */}
                    <div className="projects-title">Projects</div>
                    <div className="project">
                        <div className="project-container">
                            <div className="project-container-1 ">
                                <div className='pro-text'><p>Counter Application</p></div>
                                <div className='pro-text'><p>Ant design UI</p></div>
                                <div className='pro-text'><p>Lessar security system</p></div>
                                <div className='pro-text'><p>Wirelsess switch controller</p></div>
                            </div>
                        </div>
                    </div>

                    {/* products */}
                    <div className="Products-title">Released Products</div>
                    <div className="Product">
                        <div className="Product-container">
                            <div className="Product-container-1 ">
                                <div className='produc-text'><p>Counter Application</p></div>
                                <div className='produc-text'><p>Age calculator</p></div> 
                                
                            </div>
                        </div>
                    </div>


                       

                </div>


            </div>
            <Footer />
        </>
    )
}

export default Home
