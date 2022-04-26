import React, { useState, useRef, useEffect } from 'react'; 
import gsap from 'gsap'; 
import { Link } from 'react-router-dom'; 
import '../../css/portion/nav.scss'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faX } from '@fortawesome/free-solid-svg-icons'; 

function Nav(props) { 
  
  //useState 
  const [scroll, setScroll] = useState('scroll'); 

  //useRef 
  const navOpenAnim = useRef(); 
  const navBackground = useRef(); 

  //functions 
  const handleNavOpen = () => {
    gsap.fromTo(navOpenAnim.current, {width: "0%", display: "flex"}, 
      size.width < 1000 ? 
        {width: "100%", opacity: 1, display: "flex"} : 
      size.width < 1500 ? 
        {width: "50%", opacity: 1, display: "flex"} : 
      size.width < 2000 ? 
        {width: "35%", opacity: 1, display: "flex"} : 
      
        {width: "25%", opacity: 1, display: "flex"} 
        ); 

    gsap.fromTo(navBackground.current, {width: "100%", display: "flex"}, {width: "100%", opacity: 1, display: "flex"}); 

    setScroll('hidden'); 
  } 

  const handleNavClose = () => {
    gsap.to(navOpenAnim.current, {width: "0%", opacity: 0, display: "none"}); 
    gsap.to(navBackground.current, {opacity: 0, display: "none"}); 
    setScroll('scroll'); 
  } 

  //get window width 
  //window size 
  const size = useWindowSize();

  function useWindowSize() {
      const [windowSize, setWindowSize] = useState({
          width: undefined,
          height: undefined,
      });
      
      useEffect(() => {
          // Handler to call on window resize
          function handleResize() {
          // Set window width/height to state
          setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight,
          });
          }

          // Add event listener
          window.addEventListener("resize", handleResize);
          
          // Call handler right away so state gets updated with initial window size
          handleResize();
          
          // Remove event listener on cleanup
          return () => window.removeEventListener("resize", handleResize);
      }, []); // Empty array ensures that effect is only run on mount
      
      return windowSize;
  }

  //html dom 
  document.body.style.overflowY = scroll; 
  document.body.style.overflowX = "hidden"; 

  return (
    <div>
      <div className="see-through-background" ref={navBackground} onClick={handleNavClose}></div>
      <div className="nav-open-up" ref={navOpenAnim}>
        <div className="nav-open-up-top">
          <FontAwesomeIcon onClick={handleNavClose} icon={faX} />
        </div>
        <div className="nav-open-up-content-container">
          <Link className="nav-open-up-item" id="a" to="/tgb-newspaper">
            <div id="b" className={props.page === "Home" ? "orange-text" : "nav-item-click"}>Home</div>
          </Link>
          <Link className="nav-open-up-item" id="a" to="/tgb-newspaper/editions">
            <div id="b" className={props.page === "Editions" ? "orange-text" : "nav-item-click" }>Editions</div>
          </Link> 
          <Link className="nav-open-up-item" id="a" to="/tgb-newspaper/memes">
            <div id="b" className={props.page === "Memes" ? "orange-text" : "nav-item-click" }>Memes</div>
          </Link> 
          <Link className="nav-open-up-item" id="a" to="/tgb-newspaper/student-profiles">
            <div id="b" className={props.page === "Student Profiles" ? "orange-text" : "nav-item-click" }>Student Profiles</div>
          </Link> 
          <Link className="nav-open-up-item" id="a" to="/tgb-newspaper/about-us">
            <div id="b" className={props.page === "About Us" ? "orange-text" : "nav-item-click" }>About Us</div>
          </Link>
        </div>
      </div>

      <nav>
        <div onClick={handleNavOpen}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </div>
  )
}

export default Nav