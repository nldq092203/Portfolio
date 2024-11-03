import React from "react";
import { Container, Grid, Title, Text, Image } from "@mantine/core";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
// import laptopImg from "../../Assets/skills.png";

function Skills() {
  return (
    <Container fluid className="skills-section" px={0}>
      <Particle />
      <Container>
        <Title order={1} className="project-heading" style={{ marginTop: "40px", paddingBottom: "20px" }}>
          What can I do ?
        </Title>
        <Techstack />

        <Github />
      </Container>
    </Container>
  );
}

export default Skills;