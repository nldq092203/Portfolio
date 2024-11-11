import cvEnglish from "../../assets/CV_en.jpg";
import cvFrench from "../../assets/CV_fr.jpg";
import { Container, Image, Button, Title } from "@mantine/core";
import Particle from "../Particle";
import { IconDownload } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

function Resume() {
  const { t, i18n } = useTranslation();
  
  // Determine the current language
  const isFrench = i18n.language === 'fr';

  return (
    <Container fluid className="project-section" style={{ position: "relative" }}>
      <Particle />

      {/* Display the CV image and download button based on the current language */}
      <Container style={{ textAlign: "center" }}>        
        <Image
          src={isFrench ? cvFrench : cvEnglish}
          alt={isFrench ? "CV French" : "CV English"}
          fit="contain"
          radius="xl"
          w="60%"
          h="auto"
          style={{ margin: "20px auto" }}
        />
        
        <Button
          component="a"
          href={isFrench ? "/CV_fr.pdf" : "/CV_en.pdf"} 
          target="_blank"
          rel="noopener noreferrer"
          leftSection={<IconDownload />}
          variant="outline"
        >
          {t("resume.download")}
        </Button>
      </Container>
    </Container>
  );
}

export default Resume;