import React from "react";
import Avatar from 'avataaars';
 
function Projects({ id }) { //this will be columns of projects i have worked on
  //the level will be a brief visual list of the tech stack icons 
  return (
        <section className="hero is-dark is-bold is-fullheight">
			<div className="container is-fluid" >
				<h1 className="title is-1" id={id}>Portfolio</h1>
				<h1 className="title is-3">Latest Work</h1>
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
											<span className="tag is-link">React</span>
										</div>	
										<div className="level-item">
											<span className="tag is-primary">Redux</span>
										</div>
										<div className="level-item">
											<span className="tag is-danger">Firebase</span>
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
					</div>

					<div className="column">
						<div className="notification is-primary">
							<h1 className="title is-size-2">Face Recognition</h1>
							<nav className="level">
								<div className="level-item">
									<span className="tag is-link">React</span>
								</div>	
								<div className="level-item">
									<span className="tag is-primary">Node.js</span>
								</div>
								<div className="level-item">
									<span className="tag is-danger">PostgresSQL</span>	
								</div>  	
								<div className="level-item">
									<span className="tag is-danger">Express</span>	
								</div>									
							</nav>
							<div className="container">
								<figure className="image is-5by3">
									<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0Tjve8zohIluKSyAV3aqQzgjznr8pJFhOeg&usqp=CAU" alt='face app' />
								</figure>
							</div>
						</div>
					</div>
					<div className="column">
						<div className="notification is-warning">
							<h1 className="title is-size-2">Entry Dev Polling</h1>
							<nav className="level">
								<div className="level-item">
									<span className="tag is-link">React</span>
								</div>	
								<div className="level-item">
									<span className="tag is-primary">Node.js</span>
								</div>
								<div className="level-item">
									<span className="tag is-danger">Express</span>	
								</div>
								<div className="level-item">
									<span className="tag is-danger">Redis</span>	
								</div>  	  										
							</nav>
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
		  </div>  
		</section>
   );
}
 
export default Projects;