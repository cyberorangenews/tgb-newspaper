import React from 'react'; 
import Nav from './portions/Nav'; 
import { Link, useNavigate, useParams } from 'react-router-dom'; 
import Footer from './portions/Footer'; 
import { articles } from '../db/ArticleEditions'; 
import '../css/editions.scss'; 

function SingleEdition() { 

    //grabs parameters from url 
    const { edition } = useParams(); 

    const navigate = useNavigate(); 

    return (
        <div>
            
            <div className="back-img-container">
                <div className="back-img"></div>
            </div> 

            <Nav page="Editions" />

            <div className="editions-content-top-page">
                <button onClick={() => navigate('/')}>CYBER ORANGE</button>
            </div> 

            <div className="editions-content-page">
                <div className="grid-system">
                {
                    Object.keys(articles[edition].Articles).map((x, y) => 
                    <div key={y} className="grid-item-single-edition">

                        <Link to={"/article/" + x + "/" + edition}>
                            <h2>{x}</h2>
                        </Link>
                        <div className="img-container">
                            <Link to={"/article/" + x + "/" + edition}>
                                <img alt="" src={articles[edition].Articles[x].Image} />
                            </Link>
                        </div>
                        <p>By {articles[edition].Articles[x].Author}</p>
                        <p id="summary">{articles[edition].Articles[x].Summary}</p> 

                        <Link to={"/article/" + x + "/" + edition}>
                            <button>Full Story</button>
                        </Link>

                        <div className="ending-line"></div> 
                        
                    </div>
                    )
                }

                    <div className="grid-item-single-edition"></div>

                </div>
            </div> 

            <Footer />

        </div>
    )
}

export default SingleEdition
