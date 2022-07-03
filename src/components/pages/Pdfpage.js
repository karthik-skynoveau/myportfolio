import React from 'react'
import './Pdfpage.css'
import { FiDownload } from 'react-icons/fi'
import  ScaleLoader from 'react-spinners/ScaleLoader'
function Pdfpage() {
    //     const slideshowImages=document.querySelectorAll(".slider .image");
    //     let currentImageCounter=0;

    //     if( slideshowImages[currentImageCounter]){
    //     slideshowImages[currentImageCounter].style.display='block';
    //     setInterval(() => {
    //         slideshowImages[currentImageCounter].style.display='none';  
    //         currentImageCounter=(currentImageCounter+1)% slideshowImages.length;
    //         slideshowImages[currentImageCounter].style.display='block';
    //     }, 3000);
    //  } 
    // var indexValue = 0;
    // function slideShow() {
    //     const image = document.querySelectorAll('image');
    //     for (let x = 0; x < image.length; x++) {
    //         image[x].style.display = 'none';
    //     }
    //     indexValue++;
    //     if (indexValue > image.length) {
    //         indexValue = 1
    //     }
    //     image[indexValue - 1].style.display = 'block'
    // }
    // slideShow();

    const informationSpace={
        display:'flex',
        justifyContent:'center',
        marginTop:'50px',
        color:'#313d4b'    
    }

    return (
        <>
            <div className="homeContianer">

               
 
                <div className="pdfContainer">
                    <span className="title">ECE-III SUBJECT PDF</span>

                    {/* subject-1 */}

                    <div className="subjectContainer">
                        <span className="subName">Digital Communication</span>

                        <div className="subUnitContainer">
                            <div className="unit-1-container">
                                <span className="unit-1-text">Unit 1 Pdf</span>
                                 <div className="btn-container">
                                <button className='btn-online' ><a  href="https://drive.google.com/uc?id=1PVEkFhiuA9KvK-IE2NkV-Kfce2hodyX6"><span style={{backgroundColor:'rgb(100, 143, 15)'}}>View Online</span></a></button>
                                <button className='btn-download' ><a href="https://docs.google.com/uc?export=download&id=1PVEkFhiuA9KvK-IE2NkV-Kfce2hodyX6" download><FiDownload /> <span>download</span></a></button>
                                </div>
                            </div>
                        </div>

                        <div className="subUnitContainer">
                            <div className="unit-1-container">
                                <span className="unit-1-text">Unit 2 Pdf</span>
                                 <div className="btn-container">
                                <button className='btn-online' ><a   href="https://drive.google.com/uc?id=1muzaG7hzrHYsUTtSunLz7Hq4cwqetTtN"  >View Online</a></button>
                                <button className='btn-download' ><a href="https://docs.google.com/uc?export=download&id=1muzaG7hzrHYsUTtSunLz7Hq4cwqetTtN" download><FiDownload /> download</a></button>
                                </div>
                            </div>
                        </div>
                
                    </div>

                    {/* subject-2 */}
                    
                    <div className="subjectContainer">
                        <span className="subName">BBI</span>

                        <div className="subUnitContainer">
                            <div className="unit-1-container">
                                <span className="unit-1-text">Unit 1 Pdf</span>
                                 <div className="btn-container">
                                <button className='btn-online' ><a  href="https://drive.google.com/uc?id=1YutXNj1SDMNBnTuAK18ffjr4FwURUm10  "><span style={{backgroundColor:'rgb(100, 143, 15)'}}>View Online</span></a></button>
                                <button className='btn-download' ><a href="https://docs.google.com/uc?export=download&id=1YutXNj1SDMNBnTuAK18ffjr4FwURUm10" download><FiDownload /> <span>download</span></a></button>
                                </div>
                            </div>
                        </div>

                        <div className="subUnitContainer">
                            <div className="unit-1-container">
                                <span className="unit-1-text">Unit 2 Pdf</span>
                                 <div className="btn-container">
                                <button className='btn-online' ><a   href="https://drive.google.com/uc?id=1WK1OFIOc2WfoS8WG6QymvJBC-FJY2nMc "  >View Online</a></button>
                                <button className='btn-download' ><a href="https://docs.google.com/uc?export=download&id=1WK1OFIOc2WfoS8WG6QymvJBC-FJY2nMc " download><FiDownload /> download</a></button>
                                </div>
                            </div>
                        </div>
                           
                    </div>
                    {/* subject-3 */}
                    
                    {/* subject-4 */}
                    
                    {/* subject-5 */}
                     
                    {/* subject-6 */}
                     <div style={informationSpace}> <p>Remaining Subject Unit  PDFs are<br/><span style={{marginLeft:'47px'}}> Coming Soon..</span><span style={{marginLeft:'5px'}}><ScaleLoader height={15} color={'#313d4b'} /></span></p> </div>
                    
                  
                </div>
            </div>
          



        </>
    )
}

export default Pdfpage



