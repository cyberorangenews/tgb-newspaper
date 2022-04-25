import React, { useState, useEffect } from 'react'; 
import { useParams } from "react-router-dom"; 
import Nav from './portions/Nav'; 
import { useNavigate } from 'react-router-dom'; 
import Footer from './portions/Footer'; 
import { articles } from '../db/ArticleEditions'; 
import '../css/article.scss'; 
import AuthorInfo from './portions/AuthorInfo';

function Child(props) { 

  //grabs parameters from url 
  const { name, edition } = useParams(); 

  //useState 
  const [articleArr, setArticleArr] = useState([]); 

  //useEffect 
  useEffect(() => { 
    //each paragraph 
    var newArr = []; 

    //how many paragraphs are in the article
    var arr = (props.text).split("<para>"); 

    for (var i = 0; i < arr.length; i++) { 
      //split 
      //sectioning out var arr(<para><para>) into  smaller sections
      newArr.push(arr[i].split("**")); 
    } 

    for (var j = 0; j < newArr.length; j++) {
      //handle paragraph length === 0 
      if (newArr.length === 0) { 
        //make arr non usable 
        setArticleArr(null); 
      } 

      //handle paragraph length === 1
      else if (newArr[j].length === 1) {
        //handle if var is a sub-string or list 
        newArr[j][0] = newArr[j][0].split("*li*"); 
      }
    }
    setArticleArr(newArr); 
  }, [props.text]); 

  return (
    <div className="article-container">
    {
      articleArr.map((x, y) => 
        
          x[0] === "" ? 

            null

          : 

            <div key={y} className="article-section">
            {
              x.length === 0 ? 

                null 

              : 

              x.length === 1 ? 

                x[0][0] === "" ? 

                  null 

                : 

                x[0][0] === "dotted" ? 

                  <ul key={y}>
                  {
                    x[0].map((xi, yi) => 
                      xi === "" ? 

                        null 

                      : 

                      xi !== "dotted" ? 
            
                        <li key={yi}>{xi}</li> 
                        
                      : 

                        null 
                    )
                  }
                  </ul> 

                : 

                x[0][0] === "numbered" ? 

                  <ol key={y}>
                    {
                      x[0].map((xi, yi) => 
                        xi === "" ? 

                          null 
                        
                        : 

                        xi !== "numbered" ? 

                          <li key={yi}>{xi}</li> 

                        : 

                          null
                      )
                    }
                  </ol>

                : 

                  <div id="content" key={y}>
                    <p>{x[0]}</p>
                  </div>

              : 

              x.length === 2 ? 

                x[0] === "center" ? 

                  <div id="content" key={y}>
                    <p style={{textAlign: 'center'}}>{x[1]}</p>
                  </div>

                : 

                x[0] === "title" ? 

                  <div id="content" key={y}>
                    <p>{x[1]}</p> 
                  </div> 

                : 

                  x[1] === "sub-string" ? 

                    <div id="content" key={y}>
                      <h3>{x[0]}</h3> 
                    </div> 

                : 

                  x[0].split("")[0] === "/" ? 
                    
                    <div id="content" key={y}>
                      <img alt="" src={x[0]} /> 
                      <span>{x[1]}</span>
                    </div>

                : 

                  <div id="content" key={y}>
                    <h3>{x[0]}</h3> 
                    <p>{x[1]}</p>
                  </div>

              : 

                x.length === 3 ? 

                  <div id="content">
                    <h3>{x[0]}</h3> 
                    <img alt="" src={x[1]} /> 
                    <p>{x[2]}</p>
                  </div>  

                : 

                x.length === 4 ? 
                  
                  <div id="content" key={y}>
                    <h3>{x[0]}</h3> 
                    <img alt="" src={x[1]} />
                    <span>{x[2]}</span> 
                    <p>{x[3]}</p> 
                  </div> 

                : 

                  null 

            }
            </div>
      )
    }

      <AuthorInfo author={articles[edition]["Articles"][name].Author} />

    </div>
  )

}

function Article() {  

    //grabs parameters from url 
    const { name, edition } = useParams(); 
    
    //useState 
    const [articleText, setArticleText] = useState(""); 
    const [articleAuthor, setArticleAuthor] = useState(""); 
    const [articleImg, setArticleImg] = useState(""); 

    //useEffect 
    useEffect(() => {
      setArticleText(articles[edition].Articles[name].Text); 
      setArticleAuthor(articles[edition].Articles[name].Author); 
      setArticleImg(articles[edition].Articles[name].Image); 
    }, [articleText, edition, name]); 

    const navigate = useNavigate(); 

  return (
    <div>
    {
      articleText === "" ? 

      <div>loading</div> 

      : 

      <div>

        <div className="back-img-container">
          <div className="back-img"></div>
        </div>

        <Nav page="Editions" />

        <div className="articles-content-top-page">
          <button onClick={() => navigate('/')}>CYBER ORANGE</button>
        </div>

        <div className="articles-content-page">

          <div className="top-section-container">
            <h1>{name}</h1> 

            <img alt="" src={articleImg} /> 

            <p>By {articleAuthor}</p>
          </div>

          <Child text={articleText} /> 

        </div> 

        <Footer />

      </div>
    }
    </div>
  )
}

export default Article
