import React from "react";
 
function Projects(props) { //this will be columns of projects i have worked on
  return (
    <div>
	    <nav class="navbar is-link">
            <div class="container">
              <div class="navbar-brand">
                <a class="navbar-item">
                  <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                </a>
                <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" class="navbar-menu">
                <div class="navbar-end">
                  <a class="navbar-item">
                    Home
                  </a>
                  <a class="navbar-item">
                    About
                  </a>
                  <a class="navbar-item is-active">
                    Projects
                  </a>
                </div>
              </div>
            </div>
          </nav>


	    <section class="hero is-dark is-bold">
		  <div class="hero-body">
		    <div class="container is-widescreen has-text-centered">
		      <figure class="image center">
				<img src="images/bulma-logo.png"  />
			  </figure>
		      <h1 class="title is-1 is-spaced">
		        Projects
		      </h1>

		      <h2 class="subtitle is-3 is-muted">
		        Projects that I have worked on
		      </h2>
		  	</div>
		  </div>  
		</section>

	{/*	section for the project images goes here, columsn*/}
	<section class="section has-background-light">
			<div class="container">
				<div class="columns">
					<div class="column">
						<article class="media notification is-info">
							<figure class="media-left">
								<span class="icon">
									<i class="fab fa-css3-alt"></i>
								</span>
							</figure>
							<div class="media-content">
								<div class="content">
									<h1 class="title is-size-4">Bulma?</h1>
									<p class="is-size-5">
										Bulma is a modern CSS framework from @jgthms, based on Flexbox.
										Using Bulma, we can describe our website's design using just classes. <span class="emoticon">ᕕ( ᐛ )ᕗ</span>
									</p>
								</div>
							</div>
						</article>
					</div>
					<div class="column">
						<div class="notification is-primary">
							<h1 class="title is-size-4">…Flexbox?</h1>
							<p class="is-size-5">
								Flexbox is a CSS spec that makes sectioning and aligning more natural.
								We don't need to know Flexbox but it's how Bulma works behind-the-scenes. <span class="emoticon">⦤(^ー^)⦥</span>
							</p>
						</div>
					</div>
					<div class="column">
						<div class="notification is-warning">
							<h1 class="title is-size-4">…Classes?</h1>
							<p class="is-size-5">
								Instead of writing our CSS per-element, we can use predefined classes.
								With enough classes, we can describe our website design using semantics. <span class="emoticon">٩(^ᴗ^)۶</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>


	</div>
  );
}
 
export default Projects;