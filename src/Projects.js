import React from "react";
import Avatar from 'avataaars';
 
function Projects() { //this will be columns of projects i have worked on
  //the level will be a brief visual list of the tech stack icons 
  return (
    <div>
	    <section class="hero is-dark is-bold is-fullheight">
			<div class="container is-fluid">
				<h1 class="title is-1">Portfolio</h1>
				<h1 class="title is-1">Latest Work</h1>
			</div>
			<div class="hero-body">
			  <div class="container is-fluid">
				<div class="columns">
					<div class="column">
						<article class="media notification is-info">
							<div class="media-content">
								<div class="content">
									<h1 class="title is-size-2">Hairy Clothing</h1>
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
							<h1 class="title is-size-2">Face Recognition</h1>
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
							<h1 class="title is-size-2">Entry Dev Polling</h1>
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