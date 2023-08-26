import React, { useState, useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function Myskills() {
  const [yearsOfExperience, setYearsOfExperience] = useState(" ");
  const [monthsOfExperience, setMonthsOfExperience] = useState(" ");
  const [daysOfExperience, setDaysOfExperience] = useState(" ");
  const [yearsOfExperienceForReact, SetYearsOfExperienceForReact] =
    useState(" ");
  const [monthsOfExperienceForReact, SetMonthsOfExperienceForReact] =
    useState(" ");

  function htmlCssJsExperience() {
    const today = new Date();

    const startDate = new Date(2022, 3, 4, 12, 0, 0);

    let experienceYears = today.getFullYear() - startDate.getFullYear();

    let experienceMonths = today.getMonth() - startDate.getMonth();

    let experienceDays = Math.abs(today.getDate() - startDate.getDate());

    if (
      experienceMonths < 0 ||
      (experienceMonths === 0 && today.getDate() < startDate.getDate())
    ) {
      experienceYears--;
      experienceMonths = 11 - startDate.getMonth() + 1 + today.getMonth();
    }
    setYearsOfExperience(experienceYears);
    setMonthsOfExperience(experienceMonths);
    setDaysOfExperience(experienceDays);
  }
  function reactExperience() {
    const today = new Date();
    const startDate = new Date(2023, 27, 4, 12, 0, 0);

    let experienceYearsForReact = today.getFullYear() - startDate.getFullYear();
    let experienceMonthsForReact = today.getMonth() - startDate.getMonth();

    if (experienceYearsForReact < 0) {
      experienceYearsForReact = 0;
    }

    SetYearsOfExperienceForReact(experienceYearsForReact);
    SetMonthsOfExperienceForReact(experienceMonthsForReact);
  }
  useEffect(() => {
    htmlCssJsExperience(); // Calculate the experience when the component mounts
    reactExperience();
  }, []);

  return (
    <div>
      
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="row ">
            <div className="col-md-3">
              <p>HTML</p>
            </div>
            <div className="col-md-9 ">
              <ProgressBar
                variant="success"
                now={40}
                label={`${yearsOfExperience} yr ${monthsOfExperience} mnths Experience`}
              />
            </div>
          </div>
          <div className="row ">
            <div className="col-md-3">
              <p>CSS</p>
            </div>
            <div className="col-md-9 ">
              <ProgressBar
                variant="success"
                now={40}
                label={`${yearsOfExperience} yr ${monthsOfExperience} mnths Experience`}
              />
            </div>
          </div>
          <div className="row ">
            <div className="col-md-3">
              <p>Bootstrap</p>
            </div>
            <div className="col-md-9 ">
              <ProgressBar
                variant="success"
                now={40}
                label={`${yearsOfExperience} yr ${monthsOfExperience} mnths Experience`}
              />
            </div>
          </div>{" "}
          <div className="row ">
            <div className="col-md-3">
              <p>JavaScript</p>
            </div>
            <div className="col-md-9 ">
              <ProgressBar
                variant="success"
                now={40}
                label={`${yearsOfExperience} yr ${monthsOfExperience} mnths Experience`}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="row ">
            <div className="col-md-3">
              <p>React JS</p>
            </div>
            <div className="col-md-9 ">
              <ProgressBar
                variant="info"
                now={20}
                label={`${yearsOfExperienceForReact} yr ${monthsOfExperienceForReact} mnths Experience`}
              />
            </div>
          </div>
          <div className="row ">
            <div className="col-md-3">
              <p>Node JS</p>
            </div>
            <div className="col-md-9 ">
              <ProgressBar
                variant="info"
                now={20}
                label={`${yearsOfExperienceForReact} yr ${monthsOfExperienceForReact} mnths Experience`}
              />
            </div>
          </div>
          <div className="row ">
            <div className="col-md-3">
              <p>MySQL</p>
            </div>
            <div className="col-md-9 ">
              <ProgressBar
                variant="info"
                now={20}
                label={`${yearsOfExperienceForReact} yr ${monthsOfExperienceForReact} mnths Experience`}
              />
            </div>
          </div>{" "}
          <div className="row ">
            <div className="col-md-3">
              <p>Git</p>
            </div>
            <div className="col-md-9 ">
              <ProgressBar
                variant="success"
                now={40}
                label={`${yearsOfExperience} yr ${monthsOfExperience} mnths Experience`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myskills;
