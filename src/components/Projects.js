import React from "react";
import { FaGithub } from 'react-icons/fa';

function Projects({ id }) { //this will be columns of projects i have worked on
  //the level will be a brief visual list of the tech stack icons 
  return (
        <section className="hero is-dark is-bold is-fullheight">
			<div className="container is-fluid" >
				<h1 className="title is-1">Portfolio</h1>
				<h1 className="title is-3" id={id}>Latest Work</h1>
			</div>
			<div className="hero-body">
			  <div className="container is-fluid">
				<div className="columns">
					<div className="column">
						<article className="media notification is-info">
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-2">Hairy Clothing</h1>
									<nav className="level">
										<div className="level-item">
											<span className="tag is-link is-medium">React</span>
										</div>	
										<div className="level-item">
											<span className="tag is-primary is-medium">Redux</span>
										</div>
										<div className="level-item">
											<span className="tag is-danger is-medium">Firebase</span>
										</div>  										
									</nav>
									<div className="container">
										<figure className="image is-4by3">
											<img src="https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt='nice clothes' />
										</figure>
									</div>

								</div>
							</div>
						</article>
						<div className="container">
							<nav className="level">
								<div className="level-item has-text-centered">
									<a className="button is-info is-large is-fullwidth" href="https://github.com/legenhairy/hairy-clothing">
										<FaGithub />
									</a>
								</div>
							</nav>
						</div>
					</div>

					<div className="column">
						<div className="notification is-primary">
							<h1 className="title is-size-2">Face Recognition</h1>
							<nav className="level">
								<div className="level-item">
									<span className="tag is-link is-medium">React</span>
								</div>	
								<div className="level-item">
									<span className="tag is-primary is-medium">Node.js</span>
								</div>
								<div className="level-item">
									<span className="tag is-danger is-medium">PostgresSQL</span>	
								</div>  	
								<div className="level-item">
									<span className="tag is-danger is-medium">Express</span>	
								</div>									
							</nav>
							<div className="container">
								<figure className="image is-4by3">
									<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0Tjve8zohIluKSyAV3aqQzgjznr8pJFhOeg&usqp=CAU" alt='face app' />
								</figure>
							</div>
						</div>
						
						<div className="container">
							<nav className="level">
								<div className="level-item has-text-centered">
									<a className="button is-info is-large is-fullwidth" href="https://github.com/legenhairy/front-face">
										<FaGithub />
									</a>
								</div>
							</nav>
						</div>
						
					</div>
					<div className="column">
						<div className="notification is-warning">
							<h1 className="title is-size-2">GatorList</h1>
							<nav className="level">
								<div className="level-item">
									<span className="tag is-link is-medium">EJS(templates)</span>
								</div>	
								<div className="level-item">
									<span className="tag is-primary is-medium">Node.js</span>
								</div>
								<div className="level-item">
									<span className="tag is-danger is-medium">Express</span>	
								</div>									
							</nav>
							<div className="container">
								<figure className="image is-4by3">
									<img src="https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt='nice clothes' />
								</figure>
							</div>
						</div>
						<div className="container">
							<nav className="level">
								<div className="level-item has-text-centered">
									<a className="button is-info is-large is-fullwidth" href="https://github.com/CSC-648-SFSU/csc648-fa18-Team12">
										<FaGithub />
									</a>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div> 			
		  </div>  
		</section>
   );
}
 
export default Projects;