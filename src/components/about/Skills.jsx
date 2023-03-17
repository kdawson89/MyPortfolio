import React from "react";

const skillsContent = [
  { skillClass: "p75", skillPercent: "75", skillName: "REACT" }, 
  { skillClass: "p65", skillPercent: "65", skillName: "JAVASCRIPT" },
  { skillClass: "p80", skillPercent: "80", skillName: "UI/UX" },
  { skillClass: "p90", skillPercent: "90", skillName: "HTML/CSS" },
  { skillClass: "p45", skillPercent: "45", skillName: "JQUERY/SQL" },
  { skillClass: "p25", skillPercent: "25", skillName: "API" },
  { skillClass: "p25", skillPercent: "25", skillName: "C#" },
  { skillClass: "p25", skillPercent: "25", skillName: "JAVA" },
  { skillClass: "p55", skillPercent: "55", skillName: "Jira" },
  { skillClass: "p85", skillPercent: "85", skillName: "InDesign" },
  { skillClass: "p85", skillPercent: "85", skillName: "Illustrator" },
  { skillClass: "p75", skillPercent: "75", skillName: "Photoshop" },
  { skillClass: "p65", skillPercent: "65", skillName: "Figma" },
  { skillClass: "p55", skillPercent: "55", skillName: "Git/GitHub" },
  { skillClass: "p35", skillPercent: "35", skillName: "AWS" },
  { skillClass: "p35", skillPercent: "35", skillName: "SEO/Meta Tag" },
  
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
