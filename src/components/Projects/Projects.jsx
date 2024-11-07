import React from "react";
import { Container, Grid, Title, Text } from "@mantine/core";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { FaDocker, FaReact, FaPython } from 'react-icons/fa';
import { SiDjango, SiPostgresql } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();

  return (
    <Container fluid className="project-section" style={{ position: "relative" }}>
      <Particle />

      <Container>
        <Title order={1} className="project-heading" style={{ textAlign: "center", color: "white", marginTop: "20px" }}>
          {t("projects.title")}
        </Title>
        <Text c="dimmed" size="lg" style={{ textAlign: "center", marginBottom: "30px" }}>
          {t("projects.subtitle")}
        </Text>

        <Grid justify="center" gutter="xl">
          <Grid.Col span={6} className="project-card">
            <ProjectCard
              title={t("projects.projectCards.0.title")}
              subtitle={t("projects.projectCards.0.subtitle")}
              description={t("projects.projectCards.0.description")}
              ghLink="https://github.com/nldq092203/Movie-Night.git"
              detailLink="/project/movienight"
              techStack={[
                { name: 'Django', icon: <SiDjango size={50} color="#3CB043" /> },
                { name: 'PostgreSQL', icon: <SiPostgresql size={50} color="#336791" /> },
                { name: 'React', icon: <FaReact size={50} color="#0A9EDC" /> },
                { name: 'Docker', icon: <FaDocker size={50} color="#2496ED" /> },
              ]}
            />
          </Grid.Col>
          <Grid.Col span={6} className="project-card">
            <ProjectCard
              title={t("projects.projectCards.1.title")}
              subtitle={t("projects.projectCards.1.subtitle")}
              description={t("projects.projectCards.1.description")}
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
              title={t("projects.projectCards.2.title")}
              subtitle={t("projects.projectCards.2.subtitle")}
              description={t("projects.projectCards.2.description")}
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