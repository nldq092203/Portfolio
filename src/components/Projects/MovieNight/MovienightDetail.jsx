import React from 'react';
import { Container, Paper, Text, SimpleGrid, Button, Box } from '@mantine/core';
import { FaDocker, FaReact, FaPython, FaGoogle, FaNodeJs } from 'react-icons/fa';
import { SiDjango, SiPostgresql, SiCelery, SiRedis, SiFirebase, SiTailwindcss, SiPostman, SiPytest } from 'react-icons/si';
import Movie from '../../../assets/Demo.mp4';
import MovienightDescription from './MovienightDescription';
import MovienightDiagram from './MovienightDiagram';

function MovienightDetail() {
  const techStack = [
    { name: 'Python', icon: <FaPython size={50} color="#0A9EDC" /> },
    { name: 'Django', icon: <SiDjango size={50} color="#3CB043" /> },
    { name: 'Django Rest Framework', icon: <SiDjango size={50} color="#EF4444" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql size={50} color="#336791" /> },
    { name: 'Celery', icon: <SiCelery size={50} color="#37814A" /> },
    { name: 'Redis', icon: <SiRedis size={50} color="#D82C20" /> },
    { name: 'Pytest', icon: <SiPytest size={50} color="#0A9EDC" /> },
    { name: 'Docker', icon: <FaDocker size={50} color="#2496ED" /> },
    { name: 'Ably', icon: <Button size="xs" color="red" variant="light">Ably</Button> },
    { name: 'Firebase', icon: <SiFirebase size={50} color="#FFCA28" /> },
    { name: 'ReactJS', icon: <FaReact size={50} color="#61DAFB" /> },
    { name: 'Mantine', icon: <FaNodeJs size={50} color="#339933" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss size={50} color="#38B2AC" /> },
    { name: 'Postman', icon: <SiPostman size={50} color="#FF6C37" /> },
    { name: 'Google Cloud', icon: <FaGoogle size={50} color="#4285F4" /> },
  ];

  return (
    <Container fluid className="project-section" style={{ position: "relative" }}>
      {/* Video Section */}
      <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
        <video
          width="1000"
          controls
          style={{
            borderRadius: '12px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <source src={Movie} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <a 
        href="https://movienight-ui-550865855378.europe-west9.run.app/" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ 
            fontWeight: 'bold', 
            textDecoration: 'underline', 
            fontSize: '20px', 
            paddingTop: '10px', 
            marginTop: '40px',
            display: 'inline-block',
            color: 'white'
        }}
      >
        View Project
      </a>
      {/* Diagram Section */}
      <Paper shadow="md" className="project-section" align="center" radius="md">
        <MovienightDiagram />
      </Paper>

      {/* Description Section */}
      <Paper
        shadow="md"
        className="project-section"
        radius="md"
        p="md"
        style={{
          maxWidth: '900px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto',
        }}
      >
        <MovienightDescription />
      </Paper>

      {/* Tech Stack Section */}
      <Paper shadow="md" radius="md" p="md" className="project-card-view" style={{ margin: '40px auto', maxWidth: '1000px' }}>
        <Text fw={700} align="center" style={{ fontSize: "40px", marginBottom:"50px" }}>
          Tech Stack Used
        </Text>
        <SimpleGrid cols={2} spacing="xl">
          {techStack.map((tool, index) => (
            <Box key={index} display="flex" alignItems="center" p="md">
              {tool.icon}
              <Text ml="xl" size="xl">{tool.name}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Paper>
    </Container>
  );
}

export default MovienightDetail;