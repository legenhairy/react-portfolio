import React from "react";
import { FaLaptop, FaReact } from 'react-icons/fa';
import { MdDirectionsBike } from "react-icons/md";

function About({ id }) {
  return (
    <section class="hero is-fullheight has-background-black">
      <h1 class="title is-1 has-text-white" id={id}>About Me</h1>
      <div class="hero-body">
        <div class="content">
          <ul>
            <li class="has-text-white is-size-3">I am a software engineer with experience building and developing mobile and web apps. I thrive in a fast-paced, agile enviornment where continuous learning is valued.</li>
            <li class="has-text-white is-size-3">
              I'm currently working with React and React Native and I'm always open to learning new technologies! 
              <FaReact />
            </li>
            <li class="has-text-white is-size-3">In the past, I have worked as the main front-end software engineer for a startup called FlashTryp, where I was responsible for the design and building out their core product from scratch.</li>
            <li class="has-text-white is-size-3">
              When I'm not coding, you can find me biking, hiking, watching movies/TV shows or spending valuable time with family and friends! 
              <MdDirectionsBike />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
 
export default About;