import React, { useState } from 'react'; 
import { useNavigate, Link, useParams } from 'react-router-dom'; 
import Nav from './portions/Nav'; 
import '../css/singleprofile.scss'; 
import { profiles } from '../db/ArticleEditions'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'; 
import Footer from './portions/Footer'; 

function SingleProfile() { 

    //grabs parameters from url 
    const { studentname } = useParams(); 

    const navigate = useNavigate(); 

    const [currentImg, setCurrentImg] = useState(1); 

    //functions 
    const handlePastImg = () => {
        if (currentImg === 1) {
            setCurrentImg(3); 
        } 

        else if (currentImg === 2) {
            setCurrentImg(1); 
        } 

        else if (currentImg === 3) {
            setCurrentImg(2); 
        } 
    }; 

    const handleNextImg = () => {
        if (currentImg === 1) {
            setCurrentImg(2); 
        } 

        else if (currentImg === 2) {
            setCurrentImg(3); 
        } 

        else if (currentImg === 3) {
            setCurrentImg(1); 
        }
    }; 

  return (
    <div>
        <div className="back-img-container">
            <div className="back-img"></div>
        </div> 

        <Nav page="Student Profiles" /> 

        <div className="single-profile-top-page">
            <button onClick={() => navigate('')}>CYBER ORANGE</button>
        </div>

        <div className="single-profile-content-page">

            <h1>
                Student Profile 
                <br></br> 
                {studentname}
            </h1> 

            <div className="student-profile-presenter-container">
                <div className="left-content-img-right">
                    <button id="left" onClick={handlePastImg}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                    <img alt="" src={profiles[studentname]["Img"][currentImg - 1]} /> 
                    <button id="right" onClick={handleNextImg}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                </div>
                <div className="circle-button-navigator-container">
                    <div onClick={() => setCurrentImg(1)} style={ currentImg === 1 ? {backgroundColor: 'orangered'} : null }></div> 
                    <div onClick={() => setCurrentImg(2)} style={ currentImg === 2 ? {backgroundColor: 'orangered'} : null }></div> 
                    <div onClick={() => setCurrentImg(3)} style={ currentImg === 3 ? {backgroundColor: 'orangered'} : null }></div>
                </div>
            </div>

        </div> 

        <Footer />
    </div>
  )
}

export default SingleProfile