
import cv from "../../assets/CV.jpg";
import { Container,Image, Button } from "@mantine/core";
import Particle from "../Particle";
import { IconDownload } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
function Resume() {
  const { t } = useTranslation();
  return (
    <Container fluid className="project-section" style={{ position: "relative" }}>
      <Particle />
      <Image 
        src={cv} 
        className="img-fluid" 
        alt="CV" 
        fit="contain" 
        radius="xl" 
        w="60%" 
        h="auto" 
        style={{ margin: "50px auto", display: "block" }}
      />    
    <Button
      component="a"
      href="/CV.pdf" // Direct path to the PDF file in the public folder
      target="_blank"
      rel="noopener noreferrer"
      leftSection={<IconDownload />}
      variant="outline"
    >
     {t("resume.download")}
    </Button>
    </Container>
  );
}

export default Resume;