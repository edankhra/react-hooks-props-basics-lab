// import React from "react";
// import Links from "./Links";
// import { image } from '../data/user';
// function About = ({bio, github, linkedin}) =>{
//   return (
//     <div id="about">
//       <h2>About Me</h2>
//       <p>Put the bio in here</p>
//       <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
//       {/* add your <Links /> component here */}
//       <Links {"https://github.com/liza" }, { "https://www.linkedin.com/in/liza/" }/>
//     </div>
//   );
// }

// export default About;
import React from 'react';
import { image } from '../data/user';
import Links from './Links';

const About = ({ bio, github, linkedin }) => {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio ? <p>{bio}</p> : null}
      <img src={image} alt="I made this" />
      <Links github={github} linkedin={linkedin} />
    </div>
  );
};

export default About;
