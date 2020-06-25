import React from "react";
import Avatar from 'avataaars';
import Projects from './Projects';
import './HomePage.css'; 

function HomePage(props) {
  
  //include the social media icons in nav or below the two columns
  return (
    <div>
      <section class="hero is-fullheight bg"> 
        <div class="hero-head">
          <nav class="navbar">
            <div class="container is-fluid">
              <div class="navbar-brand">
                <a class="navbar-item">
                  <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                </a>
              </div>
              <div id="navbarMenuHeroA" class="navbar-menu">
                <div class="navbar-end">
                  <a className="navbar-item">
                    Home
                  </a>
                  <a className="navbar-item">
                    About
                  </a>
                  <a className="navbar-item">
                    Projects 
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div class="hero-body"> 
         <div class="container is-fluid">
          <div class="columns is-vcentered">
            <div class="column">
              <p class="title is-1 has-text-black">
                Hi, I'm Harry!
              </p>
              <p class="subtitle is-3 has-text-black">  
                Front End Developer
                
              </p>
            {/*this row of buttons should be centered in the column on its own line/div**/}
              <div class="buttons is-centered">
                <a class="button is-primary" href="https://github.com/legenhairy">Github</a>
                <a class="button is-info" href="https://drive.google.com/file/d/1Et2cBZMcgGYz0AH6TocHxAz7n7XVZyex/view?usp=sharing">Resume</a>
                <a class="button is-danger" href="https://www.linkedin.com/in/harry-zhangsfsu/">LinkedIn</a>
              </div>
            </div>  

            <div class="column">
              <Avatar
                avatarStyle='Circle'
                topType='ShortHairShortFlat'
                accessoriesType='Prescription02'
                hairColor='Black'
                facialHairType='Blank'
                clotheType='Hoodie'
                clotheColor='Black'
                eyeType='Happy'
                eyebrowType='Default'
                mouthType='Smile'
                skinColor='Light'
              />
            </div>   
          </div>
         </div> 
        </div>

        
      </section>
      <Projects />
    </div>
  );
}
 
export default HomePage;