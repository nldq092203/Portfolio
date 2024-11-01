import React from "react";
import { Container, Grid, Title, Text, Image } from "@mantine/core";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section" px={0}>
      <Particle />
      <Container>
        <Grid justify="center" align="center" gutter="lg">
          <Grid.Col md={7} style={{ paddingTop: "30px", paddingBottom: "50px" }}>
            <Title order={1} style={{ fontSize: "2.5em", paddingBottom: "20px" }}>
              Know Who <Text component="span" className="blue" inherit weight={700}>I'M</Text>
            </Title>
            <Aboutcard />
          </Grid.Col>
          <Grid.Col md={5} style={{ paddingTop: "120px", paddingBottom: "50px" }}>
            {/* <Image src={laptopImg} alt="about" fit="contain" radius="md" /> */}
          </Grid.Col>
        </Grid>

        <Title order={1} className="project-heading" style={{ marginTop: "40px", paddingBottom: "20px" }}>
          What can I do ?
        </Title>
        <Techstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;