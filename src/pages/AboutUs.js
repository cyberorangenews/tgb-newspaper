import React from 'react'
import Nav from './portions/Nav'; 
import { Link, useNavigate } from 'react-router-dom'; 
import '../css/aboutus.scss'; 
import Footer from './portions/Footer'; 

function AboutUs() { 

  const navigate = useNavigate(); 

  return (
    <div>
      <div className="back-img-container">
        <div className="back-img"></div>
      </div> 

      <Nav page="About Us" /> 

      <div className="about-us-content-top-page">
        <button onClick={() => navigate('/')}>CYBER ORANGE</button>
      </div> 

      <div className="about-us-content-page">

        <div className="top-section-container">
          <div className="about-us-container">
            <div className="about-us-section">

              <h1>ABOUT NEWSPAPER</h1> 

              <img alt="" src="/among-us-everyone.png" /> 

              <div id="content">
                <p style={{margin: '0px'}}>
                  Well... here we are! The Orange Juice News! We are the Trevor Browne Newspaper Club, 
                  and we are the ones that run this website. We hope you all enjoy our editions 
                  and come back for more!
                </p>
              </div>

              <div id="content">
                <p style={{margin: '0px'}}>
                  The club has been ongoing for 4 years now, and we decided to make this website in order 
                  to continue publishing during the pandemic and virtual school. Thank you so much for 
                  checking the website out and reading our articles! 😃
                </p>
              </div> 

              <div id="content">
                <h3 style={{margin: '0px'}}>Website Contributors:</h3>
              </div> 

              <div id="content" style={{margin: '0px'}}>
                <ul>
                  <li>Programmers: Jason Rubio, Steven Le, and Brian Chavez</li> 
                  <li>Illustrator: Jair Carrizal and Brian Chavez</li> 
                  <li>Writers: Brian Chavez, Steven Le, Jenna Nguyen, Lacey Schaumloeffel-Slezak, and Danilley Silva</li> 
                  <li>Editors: Steven Le and Jenna Nguyen</li>
                </ul>
              </div> 

              <div id="content" style={{borderTop: '2px solid rgba(0, 0, 0, 0.2)'}}>
                <h2>WILLIAM REIMERS (SPONSOR/FOUNDER)</h2> 
                <h3>JOINED IN 2017, FOUNDED IN 2017</h3> 
                <img alt="" src="/reimers-among-us.png" /> 
                <p>
                  This is my 15th year at Trevor G Browne High School. I Currently teach World History AP and 
                  Honors, and I am the faculty co-sponsor of TGB's newspaper, "The Orange Juice." I hold a 
                  Master's Degree in International Studies/Political Science from the University of Queensland, 
                  Australia, and a Master's Degree in Secondary Education from Arizona State University. I earned 
                  certification in 2019 as a National Board Certified Teacher and as an Arizona Master Teacher. I 
                  am also a National World War I Museum Teacher Fellow, National Geographic Certified Teacher, 
                  Past-President of the Arizona Council for Social Studies, and is 2019 Golder-Lerhman Arizona 
                  History Teacher of the Year  
                </p>
              </div> 

              <div id="content" style={{borderTop: '2px solid rgba(0, 0, 0, 0.2'}}>
                <h2>ANGELICA PELAGIO (SPONSOR)</h2> 
                <h3>JOINED IN 2019</h3> 
                <img alt="" src="/pelagio-among-us.png" /> 
                <p>
                  Hello! My name is Ms. Pelagio and I teach US History. This is my 5th year teaching at Trevor 
                  Browne and 2nd in the Orange Juice. I love teaching AMerican Hisotry because it is the story 
                  of how our country camem to be. I have also enjoyed the past 2 years in newspaper because it's 
                  allowed me to get to know students in my class outside of that environment. 
                </p> 
                <p>
                  Fun Fact: I am also a Trevor Browne graduate. 
                </p>
              </div>

              <div id="content" style={{borderTop: '2px solid rgba(0, 0, 0, 0.2)'}}>
                <h2>BRIAN CHAVEZ (PRESIDENT)</h2> 
                <h3>JOINED IN 2019, PRESIDENT SINCE 2020, FOUNDED CYBER ORANGE IN 2020</h3> 
                <img alt="" src="/brian-among-us.png" /> 
                <p>
                  Hello! My name is Brian! :) First thing I would like to mention is that I'm a breed between 
                  white and Mexican so I guess you can say Whitexican? I love technology. I been thinking about 
                  inventions and thinking of ways to interact with technology itself. TOday, I find myself 
                  knowing alotttttt about technology with sometimes surprising myself with how much I know. 
                  I love anime, but I don't watch too much of it, however, because I like to also stay very 
                  productive as I leave my day with a whole schedule put in place. 
                </p>
                <p>
                  I have been in Orange Juice News since December 2019. I am a Junior, and I becamse the 
                  President as I find myself to be able to easily help groups ofo people. I have helped in 
                  making this website with the help of Steven Le. We both know about coding so we have both 
                  contributed to making this website. I hope this website gets to go far because we put lots 
                  of determination into making it :D. 
                </p>
              </div> 

              <div id="content" style={{borderTop: '2px solid rgba(0, 0, 0, 0.2)'}}>
                <h2>JENNA NGUYEN (VICE PRESIDENT)</h2> 
                <h3>JOINED IN 2018, STARTED BAKING COLUMN IN 2019, VICE PRESIDENT SINCE 2020, EDITOR-IN-CHIEF SINCE 2020</h3> 
                <img alt="" src="/jenna-among-us.png" /> 
                <p>
                  Hey everyone! I'm Jenna, a senior at TGB :). If you can picture a Vietnamese girl that's just 
                  over five feet and lvoes to get creative, then yuo would be picturing me! I love spending my 
                  free time painting, baking, or anything else that gets my gears turning. I dislike being bored 
                  haha. Other than my personal hobbies, I have played basketball since the 6th grade, and I'm even 
                  a part of TGB's varsity basketball team. Although I have played basketball for so long, I would 
                  have to say that Badminton is my favorite sport even though I've only played since sophomore year. 
                  Since becoming the varsity captain of TGB's badminton team during my junior year, I have led my 
                  team to two consecutive Metro Region Champions titles, and I am proud to be able to say that! 
                  I am an avid anime watcher if I do say so myself. Here are some of my anime-related achievements: 
                </p>
                <ul>
                  <li>
                    Watching every single episode of Naruto and Naruto Shippudent without skipping any fillers 
                  </li> 
                  <li>
                    Being over halfway done with One Piece 
                  </li> 
                  <li>
                    Being able to read subtitiles and actually watch the anime simultaneously! 
                  </li>
                </ul> 
                <p>
                  My all-time favorite anime is Haikyu with Hunter x Hunter coming in at a close second. I love 
                  meeting new people, so if you're reading this, and you see me in person, come talk to me! 
                  Hopefully, you've leared enough about me in this short biography that can instigate some type 
                  of conversation :). Until we meet again, reader... 
                </p>
              </div> 

              <div id="content" style={{borderTop: '2px solid rgba(0, 0, 0, 0.2)'}}>
                <h2>STEVEN LE (TREASURER)</h2> 
                <h3>JOINED IN 2018, TREASURER SINCE 2019, EDITOR-IN-CHIEF SINCE 2020, FOUNDED CYBER ORANGE IN 2020</h3> 
                <img alt="" src="/steven-among-us.png" /> 
                <p>
                  HEYYOO!!! I’m Steven Le! o/ ← (me waving). First thing I have to say is that I have no idea 
                  how to make bios… SO LET'S WING IT!!! (^_^’) I am Vietnamese-American, and I have been gaming 
                  since I was 5; I LOVE gaming. The first game I ever played was MapleStory, and I still visit 
                  that game every once in a while haha (pls tell me someone here played Maple too ;-;). Fun Fact: 
                  My personal statement was about video games! Right now, I’m playing quite a bit of League of 
                  Legends. I’m also a big anime fan. My favorite shows are Sword Art Online and Demon Slayer. 
                  I even finished the whole Demon Slayer Manga. Can’t wait till the movie comes out, so I can see 
                  it all animated!
                </p> 
                <p>
                  Oh yeah, I should probably talk about the Orange Juice News and my contributions to the club lmao. 
                  So I've been in the Orange Juice News since sophomore year, and I am currently a senior. I became 
                  the treasurer my junior year of high school. During my 11th to 12th-grade summer, I took the Brandeis 
                  App Design Pre-College program, where I learned about HTML and coding. This is where I got the 
                  necessary skills to start making this website. I hope you enjoyed what I started and I'm praying 
                  this continues on after my graduation!
                </p> 
                <p>
                  Haha, did I just successfully make a bio? (͡o‿O͡) If you want to talk and get to know me or the 
                  others in the club, email us at theorangejuicenews@gmail.com
                </p>
              </div> 

              <div id="content" style={{borderTop: '2px solid rgba(0, 0, 0, 0.2)'}}>
                <h2>LACEY SCHAUMLOEFFEL-SLEZAK (SECRETARY ALUMN)</h2> 
                <h3>JOINED IN 2018, SECRETARY IN 2020, EDITOR IN 2020, GRADUATED IN 2020</h3> 
                <img alt="" src="/lacey-among-us.png" /> 
                <p>
                  Hello! My name is Lacey, and I am a mix of German and Czechoslovakian. I love writing and running. 
                  They both give me peace of mind when I am stressed, and they help me cope with uneasy situations. 
                  I have been drawing and painting since I was 10 and have won a few awards since then.
                </p> 
              </div>

              <div id="content" style={{borderTop: '2px solid rgba(0, 0, 0, 0.2)'}}>
                <h2>JAIR CARRIZAL (ILLUSTRATOR)</h2> 
                <h3>JOINED IN 2020, ILLUSTRATOR SINCE 2020</h3> 
                <img alt="" src="/jair-among-us.png" /> 
                <p>
                  Hey, what’s up! I’m Jair Carrizal, and you’re watching Disney channel. The first thing I would 
                  like to say is that I am a mix of Mexican and Philipino. I always had a passion for music, which 
                  has made me the odd one out of my family at times. One of the first CDs I ever owned was Drake's 
                  Thank Me Later album. Sometimes, I find myself writing lyrics randomly, and that's a gift that 
                  I just can't explain. I later fell in love with emo rap. One of my favorite artists is Sub 
                  Urban. I'm also a big fan of Matt Groening's shows The Simpsons, Disenchanted, and Futurama. 
                  I have probably spent too much time watching all of those shows, but I love the animation 
                  in each show.
                </p> 
                <p>
                  I joined the Orange Juice News in September 2020, and I am a Junior. I originally joined 
                  because I liked writing, but things changed. I ended up being an illustrator... wait no 
                  an animator. Honestly, I don't know haha. I just draw stuff, so yeah! I ended up drawing 
                  the mascot, Ozzie, and I realized that I love drawing; So, now, I’m just working on more 
                  drawings and on a couple of articles! :D
                </p> 
              </div> 

              <div id="content" style={{borderTop: '2px solid rgba(0, 0, 0, 0.2)'}}>
                <h2>DANILLEY SILVA (MEMBER)</h2> 
                <h2>JOINED IN 2020</h2> 
                <img alt="" src="/danilley-among-us.png" /> 
                <p>
                Hello! My name is Danilley Silva, and I am Junior. I am a member of the Newspaper Club, Drama 
                Club, and the vice president of Be A Leader and AVID Club. I love learning new languages. I 
                currently speak English, Spanish, and a little French. Hopefully, in the future, I will be 
                able to speak many more languages. I love being involved in school clubs and activities as 
                well as traveling, but due to the situation of the world, it has been difficult doing these 
                activities.
                </p> 
              </div> 

              <div id="content" style={{borderTop: '2px solid rgba(0, 0, 0, 0.2)'}}>
                <h2>IRAIS AGUILAR COCONI (MEMEBER)</h2> 
                <h3>JOINED IN 2020</h3> 
                <img alt="" src="/irais-among-us.png" /> 
                <p>
                  Hi! My name is Irais, and I’m a sophomore. I’ve been in the Newspaper since the start of 
                  the 2020 school year. I joined because I thought I could try a different form of writing 
                  rather than the essays most students do for their English class. I never really liked 
                  writing essays, but it turns out that I enjoy writing when I have the ability to choose 
                  my topic. Anyway, a little bit about me is that I love listening to music, and I love 
                  exploring new genres and finding out what other people like to listen to. I feel you 
                  can really get to know a person by their music taste. I also enjoy being on my phone 
                  as anyone would, especially playing games like Roblox and Minecraft (I’m not quite 
                  the gamiest though). I also like watching TV shows and movies. Some of my favorites 
                  are Stranger Things, Superbad, Mean Girls, and White Chicks. Another thing about me 
                  is that I enjoy drawing and coloring. Although I’m not the best at drawing, I like 
                  to display what’s on my mind on paper. Well, there’s really not that much to me as 
                  a person, so that’s all I can think of lol. :)
                </p>  
              </div> 

              <div id="content" style={{borderTop: '2px solid rgba(0, 0, 0, 0.2)'}}>
                <h2>OZZIE (MASCOT)</h2> 
                <h3>JOINED IN 2017</h3> 
                <img alt="" src="/ozzie-among-us.png" /> 
                <p>Hi! I'm the Newspaper Club Mascot!</p> 
                <p>
                  I was born in Flagstaff, Arizona, but after moving to Trevor Browne, I finally found 
                  my home! With all the cookies, oatmeal, chips, and coffee Mr. Reimers give me on a 
                  daily basis, my stomach never fails me! (っˆڡˆς)
                </p> 
                <p>Here is a list of my favorites!</p> 
                <ul>
                  <li>Place: River</li> 
                  <li>Food: Fish</li> 
                  <li>Drink: Orange Juice</li> 
                  <li>News: Orange Juice News (of course haha)</li> 
                </ul> 
                <p>
                  Thank you all so much for supporting me and the Orange Juice News! I recommend you 
                  joining the Newspaper Club. I know you all would love it! After all, you get free 
                  food! Love you all! ❤
                </p>
              </div>

            </div>
          </div>
        </div>

      </div> 

      <Footer />

    </div>
  )
}

export default AboutUs
