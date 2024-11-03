import React, { useRef } from 'react';
import { Text } from '@mantine/core';
import { motion, useInView } from 'framer-motion';
import {
  AiOutlineDatabase,
  AiOutlineAppstore,
  AiOutlineUser,
} from 'react-icons/ai';
import { FiKey } from 'react-icons/fi';
import { SiPytest } from 'react-icons/si';
import {
  MdMovie,
  MdNotifications,
  MdChat,
  MdIntegrationInstructions,
} from 'react-icons/md';
import TaskItem from './TaskItem';

function MovienightDescription() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' }); // Trigger when component is in view

  const tasks = [
    {
      label: 'Database Construction',
      icon: <AiOutlineDatabase />,
      action: (
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
          <li>Design and build the database schema using PostgreSQL.</li>
          <li>Create tables, relationships, and indexes for optimized data access.</li>
          <li>Ensure data integrity and normalization to maintain efficiency and reliability.</li>
        </ul>
      ),
    },
    {
      label: 'Division into Apps',
      icon: <AiOutlineAppstore />,
      action: (
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
          <li>Organize the project into modular apps for better code management.</li>
          <li>Apps include:</li>
          <ol style={{ listStyleType: 'decimal', paddingLeft: '20px', marginTop: '10px' }}>
            <li>Auth: User authentication and management.</li>
            <li>Movie: Handling movie data and interactions.</li>
            <li>Profile: User customization features.</li>
            <li>Notification: Managing and sending notifications.</li>
            <li>Chat: Real-time messaging capabilities.</li>
          </ol>
        </ul>
      ),
    },
    {
      label: 'Authentication',
      icon: <FiKey />,
      action: (
        <ul>
          <li>Implement secure authentication using:</li>
          <ol style={{ listStyleType: 'decimal', paddingLeft: '20px', marginTop: '10px' }}>
            <li>JWT (JSON Web Tokens) for token-based authentication.</li>
            <li>Google OAuth2 for third-party login options.</li>
          </ol>
        </ul>
      ),
    },
    {
      label: 'Movie Management',
      icon: <MdMovie />,
      action: (
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
          <li>Integrate the OMDB API to fetch and display movie data.</li>
          <li>Allow users to search for and view movie details.</li>
          <li>Use Celery tasks for background processing and data updates.</li>
          <li>Organize events related to movies (movienight, invitation).</li>
        </ul>
      ),
    },
    {
      label: 'Profile',
      icon: <AiOutlineUser />,
      action: (
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
          <li>Enable users to customize and manage their profiles.</li>
          <li>Support updating personal information and avatar.</li>
        </ul>
      ),
    },
    {
      label: 'Notifications',
      icon: <MdNotifications />,
      action: (
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
          <li>Implement a notification system using Celery for asynchronous tasks.</li>
          <li>Send scheduled alerts to keep users informed.</li>
        </ul>
      ),
    },
    {
      label: 'Chat',
      icon: <MdChat />,
      action: (
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
          <li>Develop a real-time chat feature using WebSockets.</li>
          <li>Integrate Ably for seamless real-time messaging.</li>
          <li>Use webhooks for event handling and Firebase for file storage and archiving.</li>
        </ul>
      ),
    },
    {
      label: 'Testing',
      icon: <SiPytest />,
      action: (
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
          <li>Ensure code quality with comprehensive testing using Pytest.</li>
          <li>Cover unit and integration tests for models, APIs, and integrations.</li>
          <li>Identify and fix potential issues early to maintain stability.</li>
        </ul>
      ),
    },
    {
      label: 'CI/CD',
      icon: <MdIntegrationInstructions />,
      action: (
        <ol style={{ listStyleType: 'decimal', paddingLeft: '20px', marginTop: '10px' }}>
          <li>Set up continuous integration (CI) with GitHub Actions that runs tests.</li>
          <li>Use Docker for containerization to streamline development and deployment.</li>
        </ol>
      ),
    },
    {
      label: 'Other Features',
      icon: <MdIntegrationInstructions />,
      action: (
        <ul>
          <li>Add support for:</li>
          <ol style={{ listStyleType: 'decimal', paddingLeft: '20px', marginTop: '10px' }}>
            <li>CORS (Cross-Origin Resource Sharing) for secure API access.</li>
            <li>Request throttling to manage traffic and prevent overuse.</li>
            <li>SwaggerUI for comprehensive API documentation.</li>
            <li>TypeScript for better code maintainability and type safety.</li>
          </ol>
        </ul>
      ),
    },
  ];

  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Text size="xl" fw={700} align="center" c="white" style={{ fontSize: "40px", marginBottom: '30px' }}>
          Project Workflow Path
        </Text>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2, // Stagger animations for child components
            },
          },
        }}
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', width: '100%' }}
      >
        {tasks.map((task, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6, // Adjust for smoother animation
                  ease: [0.25, 0.1, 0.25, 1], // Custom easing for smooth movement
                },
              },
            }}
          >
            <TaskItem key={index} task={task} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default MovienightDescription;