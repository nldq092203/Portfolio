import React from "react";
import { Container, Grid, Title, Text } from "@mantine/core";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { FaDocker, FaReact, FaPython } from 'react-icons/fa';
import { SiDjango, SiPostgresql } from 'react-icons/si';

function Projects() {
  return (
    <Container fluid className="project-section" style={{ position: "relative" }}>
      <Particle />

      <Container>
        <Title order={1} className="project-heading" style={{ textAlign: "center", color: "white", marginTop: "20px" }}>
          My Recent <strong className="purple">Works</strong>
        </Title>
        <Text c="dimmed" size="lg" style={{ textAlign: "center", marginBottom: "30px" }}>
          Here are a few projects I've worked on recently.
        </Text>

        <Grid justify="center" gutter="xl">
          <Grid.Col span={6} className="project-card">
            <ProjectCard
              title="Movie Night"
              subtitle="Personal Project"
              description="A full-stack web application designed as a social platform to simplify organizing movie night events."
              ghLink="https://github.com/nldq092203/Movie-Night.git"
              detailLink="/project/movienight"
              techStack={[
                { name: 'Django', icon: <SiDjango size={50} color="#3CB043" /> },
                { name: 'PostgreSQL', icon: <SiPostgresql size={50} color="#336791" /> },
                { name: 'Reaact', icon: <FaReact size={50} color="#0A9EDC" /> },
                { name: 'Docker', icon: <FaDocker size={50} color="#2496ED" /> },
              ]}
            />
          </Grid.Col>
          <Grid.Col span={6} className="project-card">
            <ProjectCard
              title="Vaukazimut"
              subtitle="University Project"
              description="A mobile application designed to support the management and organization of orienteering sports at INSA University."
              ghLink="https://github.com/nldq092203/Project-Programmation-Version2.git"
              detailLink="/project/vaukazimut"
              techStack={[
                { name: 'Django', icon: <SiDjango size={50} color="#3CB043" /> },
                { name: 'PostgreSQL', icon: <SiPostgresql size={50} color="#336791" /> },
                { name: 'React', icon: <FaReact size={50} color="#0A9EDC" /> },
              ]}
            />
          </Grid.Col>
          <Grid.Col span={6} className="project-card">
            <ProjectCard
              title="Evolution Game"
              subtitle="University Project"
              description="A simulation of a multiplayer evolution game involves combining elements of strategy, simulation, and real-time or turn-based interaction among players."
              ghLink="https://github.com/nldq092203/Projet_Reseaux.git"
              techStack={[
                { name: 'Python', icon: <FaPython size={50} color="#0A9EDC" /> },
                { name: 'C', icon: <Text fw={1000} style={{fontSize:"40px", height:"100px", width:"100px", paddingTop:"20px"}} >C</Text> },
              ]}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </Container>
  );
}

export default Projects;