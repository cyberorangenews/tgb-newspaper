import React, { useState, useEffect } from 'react'; 
import { writers } from '../../db/ArticleEditions'; 

function AuthorInfo(props) { 

    //useState 
    const [moreAuthors, setMoreAuthors] = useState([]); 
    const [loading, setLoading] = useState(true); 

    //useEffect 
    useEffect(() => { 
        var authors = []; 
        if (props.author.split(" & ").length === 2) { 
            for (var i = 0; i < props.author.split(" & ").length; i++) {
                authors.push(props.author.split(" & ")[i]); 
            }
        } 

        setMoreAuthors(authors); 
        setLoading(false); 
    }, []); 

  return (
    <div className="author-info-container">

        {
        loading ? 

            <div>loading</div> 

            : 

            moreAuthors.length > 0 ? 

                moreAuthors.map((x, y) => 
                    <div className="author-info-content" key={y}>
                        <div className="author-name-since-container">
                            <h2>{x}</h2> 
                            <h3>{writers[x]["Since"]}</h3>
                        </div>
                        <div className="author-about-container">
                            {
                                writers[x]["Info"].map((xi, yi) => 
                                    <p key={yi} style={{margin: '15px 0px'}}>{xi}</p>
                                )
                            }
                        </div>
                    </div>
                ) 

                : 

                    <div className="author-info-content">
                
                        <div className="author-name-since-container">
                            <h2>{props.author}</h2> 
                            <h3>{writers[props.author]["Since"]}</h3>
                        </div> 

                        <div className="author-about-container">
                            {
                                (writers[props.author]["Info"]).map((x, y) => 
                                    <p key={y} style={{margin: '15px 0px'}}>{x}</p> 
                                )
                            }
                        </div> 

                    </div>
        }

    </div>
  )
}

export default AuthorInfo 
