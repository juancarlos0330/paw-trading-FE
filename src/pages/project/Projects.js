import React from "react";

// import style
import "./Projects.scss";

// temp data
const data = [
  {
    id: 1,
    name: "Balancer",
    desciption:
      "Balancer is a community-owned and -governed decentralized exchange",
    imgUrl:
      "https://www.dextools.io/resources/tokens/logos/ether/0x594daad7d77592a2b97b725a7ad59d7e188b5bfa.png?1713003345519",
  },
];

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="title">Projects</div>
    </div>
  );
};

export default Projects;
