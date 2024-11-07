import React from "react";
import { Container, Title } from "@mantine/core";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import { useTranslation} from "react-i18next";

function Skills() {
  const { t } = useTranslation();
  return (
    <Container fluid className="skills-section" px={0}>
      <Particle />
      <Container>
        <Title order={1} className="project-heading" style={{ marginTop: "40px", paddingBottom: "20px" }}>
        {t('skills.title')}
        </Title>
        <Techstack />

        <Github />
      </Container>
    </Container>
  );
}

export default Skills;