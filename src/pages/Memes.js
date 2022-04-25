import React, { useState, useEffect } from 'react'; 
import '../css/memes.scss'; 
import Nav from './portions/Nav';
import { useNavigate } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'; 
import { memes } from '../db/ArticleEditions'; 
import Footer from './portions/Footer'; 

function Memes() { 

  const navigate = useNavigate(); 

  //useState 
  const [currentEdition, setCurrentEdition] = useState("Edition 1 Memes"); 
  const [random, setRandom] = useState(false); 
  const [memeArr, setMemeArr] = useState([]); 

  //functions 
  const handlePrevious = () => {
    if (currentEdition === "Edition 2 Memes") {
      setCurrentEdition("Edition 1 Memes"); 
    } 

    else if (currentEdition === "Edition 3 Memes") {
      setCurrentEdition("Edition 2 Memes"); 
    }
  }; 

  const handleNext = () => {
    if (currentEdition === "Edition 1 Memes") {
      setCurrentEdition("Edition 2 Memes"); 
    } 

    else if (currentEdition === "Edition 2 Memes") {
      setCurrentEdition("Edition 3 Memes"); 
    }
  }; 

  //useEffect 
  useEffect(() => { 

    setRandom(false); 

    var newArr = []; 
    var ce = []; 

    if (currentEdition === "Edition 1 Memes") {
      ce = "Edition 1"; 
    } 

    else if (currentEdition === "Edition 2 Memes") {
      ce = "Edition 2"; 
    } 

    else if (currentEdition === "Edition 3 Memes") {
      ce = "Edition 3"; 
    } 


    for (var j = 0; j < memes[ce].length; j++) {
      newArr.push(memes[ce][j]); 
    }

    setMemeArr(newArr); 
  }, [currentEdition]); 

  //handle random 
  const handleRandom = () => { 

    setRandom(true); 

    var newArr = []; 
    var firstArr = []; 

    //get full array from db 
    for (var i = 0; i < memes["Edition 1"].length; i++) {
      firstArr.push(memes["Edition 1"][i]); 
      firstArr.push(memes["Edition 2"][i]); 
      firstArr.push(memes["Edition 3"][i]); 
    }; 

    //randomize array 
    for (let i = firstArr.length; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); 
      [firstArr[i], firstArr[j]] = [firstArr[j], firstArr[i]]; 
    }

      newArr = firstArr; 

      setMemeArr(newArr); 
  }

  return (
    <div>
      <div className="back-img-container">
        <div className="back-img"></div>
      </div> 

      <Nav page="Memes" /> 

      <div className="memes-content-top-page">
        <button onClick={() => navigate('')}>CYBER ORANGE</button>
      </div> 

      <div className="memes-content-page">
        
        {
          random ? 

            <h1>Random Memes</h1> 

          : 

            <h1>{currentEdition}</h1>
        }
        

        <div className="go-back-button-container">
          <button onClick={handlePrevious} style={ currentEdition === "Edition 1 Memes" ? {pointerEvents: 'none', opacity: '0.35'} : null}>
            <FontAwesomeIcon icon={faAngleLeft} color={'rgb(33, 41, 49)'} />
          </button>

          <div className="edition-button-container">
            <button onClick={() => setCurrentEdition('Edition 1 Memes')} style={ currentEdition === "Edition 1 Memes" ? {backgroundColor: 'rgb(235, 235, 235)'} : null}>1</button>
            <button onClick={() => setCurrentEdition('Edition 2 Memes')} style={ currentEdition === "Edition 2 Memes" ? {backgroundColor: 'rgb(235, 235, 235)', borderLeft: 'none', borderRight: 'none'} : {borderLeft: 'none', borderRight: 'none'}}>2</button>
            <button onClick={() => setCurrentEdition('Edition 3 Memes')} style={ currentEdition === "Edition 3 Memes" ? {backgroundColor: 'rgb(235, 235, 235)'} : null}>3</button>
          </div>

          <button onClick={handleNext} style={ currentEdition === "Edition 3 Memes" ? {pointerEvents: 'none', opacity: '0.35'} : null}>
          <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>

        <div className="random-button-container">
          <button onClick={handleRandom}>Randomize</button>
        </div>

        <div className="center">
          {
            memeArr === [] ? 

              <div>loading</div> 

            : 

              <div className="meme-grid-container">
                {
                  memeArr.map((x, y) => 
                    y > 18 ? 

                      null 

                    : 

                    <div className="meme-img-container" key={y}>
                      <img alt="" src={x} /> 
                    </div>
                  )
                }
              </div>
          }
        </div>

      </div> 

      <Footer />

    </div>
  )
}

export default Memes
