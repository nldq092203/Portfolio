
import cv from "../../assets/CV.jpg";
import { Container,Image } from "@mantine/core";
import Particle from "../Particle";
function Resume() {

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
      </Container>
  );
}

export default Resume;