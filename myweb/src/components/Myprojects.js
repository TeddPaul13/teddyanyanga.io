import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom"

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

import fts from "../Tractor2.png";
import afl from "../AFL.png";
import logo from "../HandymanLogo.png";


function Myprojects() {

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  }


  const optimal = "https://optimalhandyman.com.au/"
  return (
    <div>
      <Container>
        
        <div className="row d-flex justify-content-center">
          <div className="col-md-3 mb-4">
          <Button className="linkToPage" onClick={() => openInNewTab("https://github.com/TeddPaul13/FarmerTractorShare.git")}>
            <Card className="iframeCard">
              <Card.Img variant="top" src={fts} />
              <Card.Body>
                <Card.Title>Farmer Tractor Share</Card.Title>
                <Card.Text>
                  Ongoing project: A platform for farmers to share tractors.
                </Card.Text>
              </Card.Body>
            </Card>
            </Button>
          </div>
          <div className="col-md-3 mb-4 onhover">
            <Button className="linkToPage" onClick={() => openInNewTab("https://optimalhandyman.com.au/")}>
            <Card className="iframeCard">
              <Card.Img variant="top" className="cardImg mt-5" src={logo} />
              <Card.Body>
              <Card.Title>Optimal Handyman Services</Card.Title> 
                <Card.Text>
                  Hosted business website for Optimal Handyman Services (HTML,CSS,JS).
                </Card.Text>
              </Card.Body>
            </Card>
            </Button>
            {/* </Link> */}
          </div>
          <div className="col-md-3 mb-4">
          <Button className="linkToPage" onClick={() => openInNewTab("https://github.com/TeddPaul13/AFLTeamStats.git")}>
            <Card className="iframeCard">
              <Card.Img className="cardImg mt-5" variant="top" src={afl} />
              <Card.Body>
                <Card.Title>AFL Team Stats</Card.Title>
                <Card.Text>
                  A web application that shows statistics about all Australian
                  Football League teams (React,Bootstrap,JS).
                </Card.Text>
              </Card.Body>
            </Card>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Myprojects;
