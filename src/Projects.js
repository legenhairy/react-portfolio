import React from "react";
import Avatar from 'avataaars';
 
function Projects() { //this will be columns of projects i have worked on
  return (
    <div>
	    <section class="hero is-dark is-bold">
		  <div class="hero-body">
		    <div class="container is-widescreen has-text-centered">
		      <h1 class="title is-1 is-spaced">
		        PROJECTS
		      </h1>

		      <h2 class="subtitle is-3 is-muted">
		        Latest work
		      </h2>
		  	</div>

			  <div class="container">
				<div class="columns">
					<div class="column">
						<article class="media notification is-info">
							<div class="media-content">
								<div class="content">
									<h1 class="title is-size-4">Hairy Clothing</h1>
									<p class="is-size-5">
										React, Redux, Firebase
									</p>
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
						</article>
					</div>
					<div class="column">
						<div class="notification is-primary">
							<h1 class="title is-size-4">Face Recognition</h1>
							<p class="is-size-5">
								React, Node.js, PostgresSQL, Express
							</p>
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
					<div class="column">
						<div class="notification is-warning">
							<h1 class="title is-size-4">Entry Dev Polling</h1>
							<p class="is-size-5">
								Material UI, React, Node.js, Redis
							</p>
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
	</div>
  );
}
 
export default Projects;