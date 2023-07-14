import React, { StrictMode } from "react";
import  ReactDOM, { createRoot }  from "react-dom/client";
import './style.css'

function App(){
  return  <div className="card">
      <Avatar />
       <div className="data">
        <Intro />
        <SkillList/>
  </div>
  </div>
}

function Avatar(){
  return <img src="vijayImage.jpg" alt="Vijay Kumar" className="avatar"></img>
}

function Intro(){
  return <div>
    <h1>Vijay Kumar</h1>
    <p> I'm a web developer with a passion for HTML, CSS, 
    and JavaScript. I'm always curious about new technologies 
    and how they can be used to create amazing web experiences.</p>
  </div>
}
function SkillList(){
  return <div className="skill-list">
     <Skill Skill="HTML+CSS 💪" color="blue" />
     <Skill Skill="JavaScript 💪" color="yellow" />
     <Skill Skill="React JS 💪" color="lightblue" />
     <Skill Skill="Git & Github 💪" color="orangered" />
  </div>
}
function Skill(props){
  return <div className="skill" style={{backgroundColor:props.color}}>
     <span>{props.Skill}</span>
  </div>
}
const rootElement=document.getElementById('root');
const root=createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)