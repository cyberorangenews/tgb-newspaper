import React, { useState, useEffect, useRef } from 'react'; 
import ReactTypingEffect from 'react-typing-effect'; 
import { articles } from '../db/ArticleEditions'; 
import { Link, useNavigate } from 'react-router-dom'; 
import '../css/main.scss'; 
import Footer from './portions/Footer'; 
import Nav from './portions/Nav'; 
import orange from '../images/Miscellaneous/orange.htm'; 
import bear from '../images/Miscellaneous/bear.gif'; 

function MainPage() { 

    //useState 
    const [recentEditionArticles, setRecentEditionArticles] = useState([]); 

    //useEffect 
    useEffect(() => {
        var artArr = []; 
        for (var i in articles["Edition 3"].Articles) {
            artArr.push(i); 
        } 

        setRecentEditionArticles(artArr); 
    }, []); 

  return (
      <div>
        <div className="back-img-container">
            <div className="back-img"></div>
        </div> 

        <Nav page="Home" />

        <div className="index-content-column">

            <div className="index-title-img-container">
                <h1>Cyber Orange</h1>
                <img alt="" className="orange" src={orange} />
            </div> 

            <h3>THE OFFICIAL TGB SCHOOL NEWSPAPER WEBSITE:</h3>

            <div className="img-container">
                <img alt="" className="bear" src={bear} />
            </div>

            <ReactTypingEffect
                text={["We write fun articles", "We write educational articles", "Write about any topic", "Also memes :)"]}
                cursorRenderer={cursor => <h1>{cursor}</h1>}
                typingDelay="1500ms"
                eraseDelay="2500ms"
                displayTextRenderer={(text, i) => {
                return (
                    <span>
                    {text.split('').map((char, i) => {
                        const key = `${i}`;
                        return (
                        <span
                            key={key}
                        >{char}</span>
                        );
                    })}
                    </span>
            )}}/> 
            
        </div> 

        <div className="articles-main-container">
            
            <h4>Latest Edition</h4> 

            <div className="line-container">
                <div id="line"></div>
            </div>

            <h2>Edition 3</h2>

            <div className="line-container">
                <div id="line"></div>
            </div>

            <div className="line-date-line-container">
                <div id="line"></div>
                <div id="date">{articles["Edition 3"].General.Date}</div> 
                <div id="line"></div>
            </div>

            <div className="grid-articles-container">
                
                {/* foreach item in set/nested array */} 

                {
                    recentEditionArticles.map((x, y) => 
                        <div className="grid-item" key={y}>

                            <Link to={"/article/" + x + "/Edition 3"}>
                                <h2>{x}</h2>
                            </Link>
                            
                            <p id="author">{articles["Edition 3"].Articles[x].Author}</p>

                            <div className="img-container">
                                <Link to={"/article/" + x + "/Edition 3"}>
                                    <img alt="" src={articles["Edition 3"].Articles[x].Image} />
                                </Link>
                            </div>

                            <p id="summary">
                                {articles["Edition 3"].Articles[x].Summary}
                            </p>

                            <Link to={"/article/" + x + "/Edition 3"}>
                                <button>Full Story</button>
                            </Link>

                            <div id="ending-line"></div> 

                        </div> 
                    ) 
                } 

                <div className="grid-item"></div>

            </div> 

            <div className="bottom-page-link-container">
                <Link to="/editions">View All Editions</Link>
            </div>

        </div> 

        <Footer />

      </div>
  )
}

export default MainPage
