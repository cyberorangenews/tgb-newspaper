import React, { useState, useEffect, useRef } from 'react'; 
import '../css/editions.scss'; 
import { Link, useNavigate } from 'react-router-dom'; 
import gsap from 'gsap'; 
import Nav from './portions/Nav'; 
import { articles } from '../db/ArticleEditions'; 
import Footer from './portions/Footer'; 

function Editions() {

  const navigate = useNavigate(); 

  return (
    <div>

      <div className="back-img-container">
        <div className="back-img"></div>
      </div>

      <Nav page="Editions" />

      <div className="editions-content-top-page">
        <button onClick={() => navigate('')}>CYBER ORANGE</button>
      </div> 

      <div className="editions-content-page">
        <div className="grid-system">
          {
            Object.keys(articles).map((x, y) => 
              <div className="grid-item" key={y}>
                
                <Link to={"/edition/" + x}>
                  <h2>{x}</h2>
                </Link>
                <p>{articles[x].General.Date}</p> 
                <div className="img-container">
                  <Link to={"/edition/" + x}>
                    <img alt="" src={articles[x].General.Image} />
                  </Link>
                </div> 
                <p id="summary">{articles[x].General.Summary}</p> 

                <Link to={"/edition/" + x}>
                  <button>View this Edition</button>
                </Link> 

                <div className="ending-line"></div>
              
              </div>
            )
          }

          <div className="grid-item"></div>

        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Editions 
