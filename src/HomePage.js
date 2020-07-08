import React from "react";
import Avatar from 'avataaars';
import Projects from './components/Projects';
import { FaGithub, FaGoogleDrive, FaLinkedin, FaAngleDoubleDown, FaLaptopCode } from 'react-icons/fa';
import { Link } from "react-scroll";
import './HomePage.css'; 

function HomePage() {
  
  //include the social media icons in nav or below the two columns
  return (
    <div>
      <section className="hero is-fullheight bg"> 
        <div className="hero-head">
          <nav className="navbar">
            <div className="container is-fluid">
              <div className="navbar-brand">
                <a className="navbar-item">
                  <span className="icon has-text-info is-medium">  
                    <FaLaptopCode />
                  </span>
                </a>
              </div>
              <div className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item">
                    Home
                  </a>
                  <a className="navbar-item">
                    <Link
                      activeClass="active"
                      to="proj-section"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Projects 
                    </Link>  
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body"> 
         <div className="container is-fluid">
          <div className="columns is-vcentered">
            <div className="column">
              <p className="title is-1 has-text-black">
                Hi, I'm Harry!
              </p>
              <p className="subtitle is-3 has-text-black">  
                Front End Engineer
              </p>
            {/*this list of buttons should be centered in the column on its own line/div**/}
              <div className="buttons is-centered are-medium">
                <a className="button is-black" href="https://github.com/legenhairy">
                  <FaGithub />
                </a>
                <a className="button is-success" href="https://drive.google.com/file/d/1Et2cBZMcgGYz0AH6TocHxAz7n7XVZyex/view?usp=sharing">
                  <FaGoogleDrive />
                </a>
                <a className="button is-info" href="https://www.linkedin.com/in/harry-zhangsfsu/">
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
        <div className="hero-foot">
          <div className="container is-fluid">
              <Link
                activeClass="active"
                to="proj-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                 <FaAngleDoubleDown />
              </Link>
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