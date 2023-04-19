import React from "react";

const educationContent = [
  {
    year: "2020",
    degree: "Associates Front-End Web Development",
    institute: "Metropolitan Community",
    details: `Complete Overview Of Learning Basic Frontend and Full Stack Development`,
  },
  {
    year: "2011",
    degree: "Bachelor of Arts in Marketing/ Advertising",
    institute: "Bellevue University",
    details: `Marketing / Advertising Management and Campaign Design`,
  },
  {
    year: "2009",
    degree: "Graphic Communication & Art Design ",
    institute: "Metropolitan Community",
    details: `Combine creative problem-solving with visual, technical, and artistic skills to communicate messages to a specific audience. Design for print is the emphasis of this program.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-graduation-cap"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
             </h5>
             
             <h5><span className="place open-sans-font">{val.institute}</span></h5>
         
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
