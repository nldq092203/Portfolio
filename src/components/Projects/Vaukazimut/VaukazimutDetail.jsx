import { Container, Image, Paper, SimpleGrid, Box, Text } from '@mantine/core';
import ImageViewer from './ImageViewer';
import React from 'react';
import poster from "/posterVaukazimut.png";
import { FaReact, FaPython } from 'react-icons/fa';
import { SiDjango, SiPostgresql, SiTailwindcss, SiPostman } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

function VaukazimutDetail() {
  const { t } = useTranslation();
  const techStack = [
    { name: 'Python', icon: <FaPython size={50} color="#0A9EDC" /> },
    { name: 'Django', icon: <SiDjango size={50} color="#3CB043" /> },
    { name: 'Django Rest Framework', icon: <SiDjango size={50} color="#EF4444" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql size={50} color="#336791" /> },
    { name: 'React Native', icon: <FaReact size={50} color="#61DAFB" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss size={50} color="#38B2AC" /> },
    { name: 'Postman', icon: <SiPostman size={50} color="#FF6C37" /> },
  ];

  // Construct URLs manually since the images are in the public folder
  const imageUrls = [
    '/Vaukazimut/1.jpg',
    '/Vaukazimut/2.jpg',
    '/Vaukazimut/3.jpg',
    '/Vaukazimut/4.jpg',
    '/Vaukazimut/5.jpg',
    '/Vaukazimut/6.jpg',
    '/Vaukazimut/7.jpg',
    '/Vaukazimut/8.jpg',
    '/Vaukazimut/9.jpg',
    '/Vaukazimut/10.jpg',
    '/Vaukazimut/11.jpg',
    '/Vaukazimut/12.jpg',
    '/Vaukazimut/13.jpg',
    '/Vaukazimut/14.jpg',
    '/Vaukazimut/15.jpg',
    '/Vaukazimut/17.jpg',
    '/Vaukazimut/18.jpg',
  ];

  return (
    <div style={{ backgroundColor: '#242424', minHeight: '100vh', paddingBottom: '50px' }}>
      <Container fluid className="project-section" style={{ position: "relative", display: "flex", gap: "0px", marginBottom: '50px' }}>
        <Image
          src={poster}
          alt="Poster"
          w="25%"
          h="auto"
          radius="md"
          withPlaceholder
          style={{ margin: '50px 100px 100px 100px' }}
        />
        <Container style={{ margin: '100px auto' }}>
          {imageUrls.length > 0 ? <ImageViewer images={imageUrls} /> : <div>Loading images...</div>}
        </Container>
      </Container>

      {/* Tech Stack Section */}
      <Paper shadow="md" radius="md" p="md" className="project-card-view" style={{ margin: '50px auto', maxWidth: '900px', paddingBottom: "50px" }}>
        <Text fw={700} align="center" style={{ fontSize: "40px", marginBottom: "50px" }}>
          {t("vaukazimutDetail.techStack")}
        </Text>
        <SimpleGrid cols={2} spacing="xl">
          {techStack.map((tool, index) => (
            <Box key={index} style={{ display: 'flex', align: 'center', padding: 'md' }}>
              {tool.icon}
              <Text ml="xl" size="xl">{tool.name}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Paper>
    </div>
  );
}

export default VaukazimutDetail;