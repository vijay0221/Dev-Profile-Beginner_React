import React, { StrictMode } from "react";
import  ReactDOM, { createRoot }  from "react-dom/client";
import './style.css'

const skills = [
  {
    skill: "HTML+CSS",
    level: "intermediate",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "Beginner",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "Beginner",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "Beginner",
    color: "#60DAFB"
  },
  {
    skill: "Java",
    level: "Beginner",
    color: "#FFD580"
  },
 
];


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
  const skill=skills;
  return <div className="skill-list">
    {skill.map((s)=> (<Skill Skill={s.skill} color={s.color} level ={s.level} key={s.skill} />))}
  </div>
}
function Skill({color,Skill,level}){
  return <div className="skill" style={{backgroundColor:color}}>
     <span>{Skill}</span>
     <span>{level==='Beginner'&&"👶"}
           {level==='advanced'&&"💪"}
           {level === 'intermediate'&&"👍"}
      </span>
  </div>
}
const rootElement=document.getElementById('root');
const root=createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)