import React from "react";
import Avatar from 'avataaars';
import Projects from './Projects';
import './HomePage.css'; 

function HomePage(props) {
  
  //include the social media icons in nav or below the two columns
  return (
    <div className="bg">
      <section class="hero is-fullheight"> 
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
                <button class="button is-primary">Github</button>
                <button class="button is-info">Resume</button>
                <button class="button is-danger">LinkedIn</button>
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
    </div>
  );
}
 
export default HomePage;