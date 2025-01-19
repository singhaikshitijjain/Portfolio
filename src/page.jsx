import React from "react";
import SkillsTable from "./SkillsTable";
import PythonPackageDeveloper from "./PythonPackageDeveloper";
import Projects from "./projects";
import PublicationsAndCertifications from "./PublicationsAndCertifications";
import SocialLinks from "./SocialLink";

const Page = () => {
  const aspectRatio = window.innerWidth / window.innerHeight;

  const titleStyle = {
    fontWeight: 'bolder',
    fontSize: aspectRatio < 1.9 ? '4vh' : '7vh',
    margin: '5vh',
    marginTop:'5vh'
  }
  return (
    <>
    <div id="about" className="title" style={titleStyle}>
      <span style={{fontWeight:'bolder',color: 'white' }}>Singhai </span><span style={{fontWeight:'bolder',color: 'cyan' }}>Kshitij Jain</span>
      {/* <span>SINGHAI KSHITIJ</span> <span style={{ color: 'cyan' }}>JAIN</span> */}
      <div style={{color:'cyan',marginLeft:aspectRatio < 1.9 ? '7vh' : '15vh', fontSize: aspectRatio < 1.9 ? '10vh' : '20vh'}}>hi,</div>
      <div style={{padding:aspectRatio < 1.9 ? '5vh' : '20vh',paddingTop:'0vh',paddingBottom:'0vh',fontWeight:'normal', fontSize:aspectRatio < 1.9 ? '2.5vh' : '4vh', textAlign:'center'}}>I am Kshitij, a CSE Core TY student skilled in Software Engineering, Artificial Intelligence, Machine Learning and Deep Learning. I have been working with GenAI, LLM and OpenCV models and also build intelligent applications using the MERN stack and integrate AI/ML models, aiming to contribute to innovative, technology-driven solutions in dynamic environments.</div>
      </div>
      <div id="skills" className="title" style={titleStyle}>
      <span>SKIL</span><span style={{ color: 'cyan' }}>LS</span>
      <SkillsTable />
      </div>
      <div id="experience" className="title" style={titleStyle}>
      <span></span>EXPER<span style={{ color: 'cyan' }}>IENCE</span>
      <PythonPackageDeveloper />
      </div>
      <div id="projects" className="title" style={titleStyle}>
        <span>PROJ</span><span style={{ color: 'cyan' }}>ECTS</span>
        <Projects />
      </div>
      <div id="publications&certification" className="title" style={titleStyle}>
      <span>PUBLICATIONS</span> <span style={{ color: 'cyan' }}> & CERTIFICATIONS</span>
      <PublicationsAndCertifications />
      </div>
      <section id="contact" className="title" style={titleStyle}>
        <span>CONT</span><span style={{ color: 'cyan' }}>ACT</span>
        <SocialLinks />
      </section></>
  )
}

export default Page
