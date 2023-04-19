import React from "react";

const experienceContent = [
  {
    year: " April 2021  to Present",
    position: "Lead Frontend Developer",
    compnayName: "OneStaff Medical | Omaha, NE",
    details: `Got Promoted to Lead Frontend Developer on a team of four`,
  },
  {
    year: " April 2021  to Present",
    position: "React | Full Stack | Frontend Developer",
    compnayName: "OneStaff Medical | Omaha, NE",
    details: `Interpret the needs of the company and its customers and create easy-to-use, interactive web apps. Front-end developers must be adept at both programming languages and design techniques`,
  },
  {
    year: "March 2020 – April 2021",
    position: "Interactive UX/UI Website Developer",
    compnayName: "Sandhills Global | Lincoln, NE ",
    details: `Created websites small companies that focused on selling Semi Trucks, Farm Equipment, and Auction Houses `,
  },
  {
    year: "September 2013 – March 2020",
    position: "Operations Project Specialist",
    compnayName: "Marriott Reservations Center  | Omaha, NE ",
    details: `Internal marketing and maintaied internal logged in website for every Marriott Canter around the world`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            </h5>
            <h5><span className="place open-sans-font">{val.compnayName}</span></h5>
          
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
