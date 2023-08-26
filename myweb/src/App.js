import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { At, Linkedin, Geo, Github } from "react-bootstrap-icons";

import potrait from "./potrait.jpg";
import fts from "./Tractor2.png";
import Myskills from "./components/Myskills";
import Myprojects from "./components/Myprojects";
import ScrollButton from "./components/ScrollButton";
import resume from "./TeddyResume.pdf"

function App() {

  const scrollToContacts = () =>{
    window.scrollTo({
      bottom: 0
    })
  }
  return (
    <div className="App">
      <Container>
        <Navbar className="mb-4">
          <Container className="d-flex justify-content-center">
            <Nav className="d-flex justify-content-center">
              <Nav.Link href="#myprojects">Projects</Nav.Link>
              <Nav.Link href="#mycontacts">Contacts</Nav.Link>
              <a href={resume} download="Teddy's Resume" target="_blank" rel="noreferrer"><Button variant="outline-info">Download CV</Button></a>

              {/* <button id="cvPrint" onclick="location.href='TeddyResume.pdf';" target="blank">View Downloadable Pdf</button> */}
            </Nav>
          </Container>
        </Navbar>
        <div className="row">
          <div className="col-md-4 potraitDiv mb-4">
            <img
              src={potrait}
              alt="My Potrait"
              className=" img-fluid rounded-circle myportrait"
            ></img>
           
          </div>
          <div className="col-md-8 info">
            <h2>
              Hi there,
              <br />I am Teddy Paul Anyanga
            </h2>
            <p>
            An adaptable <span className="fs-4">Software Engineer</span> with knowledge of web application development, configuration management, RESTful API development and database design and development. 
            Recently completed a UTS industry accredited Certificate in Software Engineering, which has an emphasis on practical skills training and projects to design and implement software solutions. 
            I am also a Certified Associate in Project Management with a Bsc. of Mechatronic Engineering and a Master of Business and Project Management. 
            With great problem solving, critical and logical thinking skills, I enjoy creating solutions through programmming. 
            
            </p>
          </div>
        </div>
        {/* My skills */}
        <div className="headers mb-4 d-flex justify-content-center ">
        <h2>My Skills</h2>
      </div>
        <Myskills />
        {/* My porjects */}
        <div className="headers mb-4 d-flex justify-content-center">
          <h2 id="myprojects">My Projects</h2>
        </div>
        <Myprojects />
        {/* My contacts */}

        <div className="headers mb-4 d-flex justify-content-center">
          <h2 id="mycontacts">Lets connect</h2>
        </div>
        <div className="row mb-4">
          <div className="col-md-12">
            <p>
              <Geo /> Location: <a href="https://goo.gl/maps/ne6DQFdy1q8MLqDE7" target="_blank" rel="noreferrer">Riverstone, NSW</a>
            </p>
            <p>
              <Github /> Github:  <a href="https://github.com/TeddPaul13" target="_blank" rel="noreferrer">TeddPaul13</a>
            </p>
            <p>
              {/* Url not working correctly */}
              <Linkedin /> LinkedIn: <a href="https://au.linkedin.com/in/teddy-anyanga-197106143" target="_blank" rel="noreferrer"> Teddy Anyanga </a> 
            </p>
            <p>
              <At /> Email: <a href ="mailto:tedpaul13@gmail.com" target="_blank" rel="noreferrer">tedpaul13@gmail.com</a>
            </p>
          </div>
        </div>
        <ScrollButton />
      </Container>
    </div>
  );
}

export default App;
