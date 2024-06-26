import React from "react";
import Links from "./links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {props.github && props.linkedin && <Links github={props.github} linkedin={props.linkedin} />}
    </div>
  );
}

export default About;