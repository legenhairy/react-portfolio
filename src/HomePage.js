import React, { useState } from "react";
 
function HomePage(props) {
  const [video, useVideo] = useState(`https://coverr.co/videos/golden-gate-traffic-g5U7SsXl9v`);
  
  return (
    <div>
      <nav class="breadcrumb is-right is-fullheight-with-navbar" aria-label="breadcrumbs">
        <ul>
          <li><a href="#">Bulma</a></li>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Components</a></li>
          <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
        </ul>
      </nav>
      <section class="hero is-link is-fullheight-with-navbar">
        <div class="hero-body">
          <div class="container">
            <p class="title">
              Welcome to Harry's Page!
            </p>
          </div>
        </div>
      </section>
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Portfolio</strong> by <a href="https://jgthms.com">Harry Zhang</a>. 
          </p>
        </div>
      </footer>
    </div>
  );
}
 
export default HomePage;