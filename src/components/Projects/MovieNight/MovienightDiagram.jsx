import React, { useRef } from 'react';
import { Text, Container, Group, Paper, useMantineTheme } from '@mantine/core';
import { motion, useInView } from 'framer-motion';

function MovienightDiagram() {
  const theme = useMantineTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' }); // Triggers once when 50px above the element is in view

  // Define animation variants for smoother animations
  const containerVariants = {
    show: {
      transition: {
        staggerChildren: 0.2, // Controls the delay between the appearance of each child
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6, // Adjust for smoother animation
        ease: [0.25, 0.1, 0.25, 1], // Custom easing for smooth movement
      },
    },
  };

  return (
    <Paper
      shadow="md"
      radius="md"
      className="project-card-view"
      style={{ width: 900, height: 750, position: 'relative', padding: '20px' }}
      ref={ref}
    >
      <Text fw={700} align="center" style={{ fontSize: "40px" }}>
        Objective
      </Text>

      <Container style={{ position: 'relative', width: 550, height: 800 }}>
        <Paper
          withBorder
          radius="xl"
          p="md"
          variant='light'
          style={{
            width: 200,
            height: 200,
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            left: '50%',
            top: '40%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: theme.colors[theme.primaryColor][5],
          }}
        >
          <Text size="xl" fw={700} className="white" align="center">
            Centralized Platform for Movie
          </Text>
        </Paper>

        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
          style={{ position: 'relative', width: '100%', height: '100%' }}
        >
          {[
            { label: '01. Movie Search', top: '10%', left: '45%', color: '#66c2ff', icon: '🔍', lignInverse: false },
            { label: '02. Event Creation', top: '25%', right: '-20%', color: '#a569bd', icon: '📅', lignInverse: false },
            { label: '03. Profile Management', bottom: '45%', right: '-30%', color: '#f1c40f', icon: '👤', lignInverse: false },
            { label: '04. Scheduling', bottom: '30%', left: '45%', color: '#ff7675', icon: '⏰', lignInverse: false },
            { label: '05. Notifications', bottom: '45%', left: '-20%', color: '#55efc4', icon: '🔔', lignInverse: true },
            { label: '06. Communication', top: '25%', left: '-20%', color: '#6c5ce7', icon: '💬', lignInverse: true },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                transition: {
                  duration: 0.4, // Adjust hover animation duration
                  ease: 'easeInOut', // Smooth easing
                  repeatType: 'reverse', // Reverses back to original state when hovering stops
                },
              }}
              style={{
                position: 'absolute',
                ...item,
                transform: 'translateX(-50%)',
                cursor: 'pointer', // Indicate interactiveness
              }}
            >
              <Group spacing="xs" style={{ flexDirection: item.lignInverse ? 'row-reverse' : 'row' }}>
                <Paper
                  radius="xl"
                  p="md"
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    backgroundColor: item.color,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text size="xl">{item.icon}</Text>
                </Paper>
                <Text fw={700} size="xl">{item.label.split('.')[1]}</Text>
              </Group>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Paper>
  );
}

export default MovienightDiagram;