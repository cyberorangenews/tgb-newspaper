import React from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import Nav from './portions/Nav'; 
import '../css/studentprofiles.scss'; 
import { profiles } from '../db/ArticleEditions'; 
import Footer from './portions/Footer'; 

function StudentProfiles() { 

  const navigate = useNavigate(); 

  return (
    <div>
      <div className="back-img-container">
        <div className="back-img"></div>
      </div> 

      <Nav page="Student Profiles" />

      <div className="student-profiles-top-page">
        <button onClick={() => navigate('')}>CYBER ORANGE</button>
      </div> 

      <div className="student-profiles-content-page">

        <h1>Student Profiles</h1> 

        <div className="student-profiles-grid-container">
          {
            Object.keys(profiles).map((x, y) => 
              <div className="student-profile-card" key={y}>

                <Link to={"/tgb-newspaper/single-profile/" + x}>
                  <h2>{x}</h2> 
                </Link>
                
                <div className="img-container">
                  <Link to={"/tgb-newspaper/single-profile/" + x}>
                    <img alt="" src={profiles[x]["Img"][0]} /> 
                  </Link>
                </div>
                
                <Link to={"/tgb-newspaper/single-profile/" + x}>
                  <button>Full Student Profile</button> 
                </Link> 
              </div> 
            )
          }
        </div>

      </div> 

      <Footer />

    </div>
  )
}

export default StudentProfiles
