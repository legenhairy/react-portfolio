import React from "react";
import Avatar from 'avataaars';
import Projects from './Projects';
import { FaGithub, FaGoogleDrive, FaLinkedin, FaAngleDoubleDown, FaLaptopCode } from 'react-icons/fa';
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
                  <span class="icon has-text-info is-medium">  
                    <FaLaptopCode />
                  </span>
                </a>
              </div>
              <div class="navbar-menu">
                <div class="navbar-end">
                  <a className="navbar-item">
                    Home
                  </a>
                  <a className="navbar-item" href="#proj-section">
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
            {/*this list of buttons should be centered in the column on its own line/div**/}
              <div class="buttons is-centered are-medium">
                <a class="button is-black" href="https://github.com/legenhairy">
                  <FaGithub />
                </a>
                <a class="button is-danger" href="https://drive.google.com/file/d/1Et2cBZMcgGYz0AH6TocHxAz7n7XVZyex/view?usp=sharing">
                  <FaGoogleDrive />
                </a>
                <a class="button is-info" href="https://www.linkedin.com/in/harry-zhangsfsu/">
                  <FaLinkedin />
                </a>
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

      {/* hero footer just has a nice visual*/}
        <div class="hero-foot">
          <div class="container is-fluid">
            <FaAngleDoubleDown />
          </div>
        </div>
      </section>
      <Projects id='proj-section'/>
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Website</strong> by <a href="https://jgthms.com">Harry Zhang</a>.
          </p>
        </div>
      </footer>
    </div>
  );
}
 
export default HomePage;