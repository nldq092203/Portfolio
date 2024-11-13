import React, { useRef } from 'react';
import { Text, Container, Group, Paper, useMantineTheme } from '@mantine/core';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function MovienightDiagram() {
  const theme = useMantineTheme();
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const containerVariants = {
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const items = [
    { color: '#66c2ff', icon: '🔍', position: { top: '10%', left: '45%' } },
    { color: '#a569bd', icon: '📅', position: { top: '25%', right: '-22%' } },
    { color: '#f1c40f', icon: '👤', position: { bottom: '45%', right: '-27%' } },
    { color: '#ff7675', icon: '⏰', position: { bottom: '30%', left: '45%' } },
    { color: '#55efc4', icon: '🔔', position: { bottom: '45%', left: '-20%' }, lignInverse: true },
    { color: '#6c5ce7', icon: '💬', position: { top: '25%', left: '-20%' }, lignInverse: true },
  ];

  return (
    <Paper
      shadow="md"
      radius="md"
      className="project-card-view"
      style={{ width: 950, height: 750, position: 'relative', padding: '20px' }}
      ref={ref}
    >
      <Text fw={700} align="center" style={{ fontSize: "40px" }}>
        {t("movienightDiagram.objective")}
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
            {t("movienightDiagram.title")}
          </Text>
        </Paper>

        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
          style={{ position: 'relative', width: '100%', height: '100%' }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                transition: {
                  duration: 0.4,
                  ease: 'easeInOut',
                },
              }}
              style={{
                position: 'absolute',
                ...item.position,
                transform: 'translateX(-50%)',
                cursor: 'pointer',
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
                    align: 'center',
                    flexShrink: 0, // Keep the icon size fixed
                  }}
                >
                  <Text size="xl">{item.icon}</Text>
                </Paper>
                <Text fw={700} size="xl">
                  {t(`movienightDiagram.items.${index}`)}
                </Text>
              </Group>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Paper>
  );
}

export default MovienightDiagram;