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
  MdDescription
} from 'react-icons/md';
import TaskItem from './TaskItem';
import { useTranslation } from 'react-i18next';

function MovienightDescription() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const { t } = useTranslation();

  const tasks = [
    {
      label: t("movienightDescription.tasks.0.label"),
      icon: <AiOutlineDatabase />,
      action: (
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
          {t("movienightDescription.tasks.0.action", { returnObjects: true }).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      label: t("movienightDescription.tasks.1.label"),
      icon: <AiOutlineAppstore />,
      action: (
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
          {t("movienightDescription.tasks.1.action", { returnObjects: true }).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
          <ol style={{ listStyleType: 'decimal', paddingLeft: '20px', marginTop: '10px' }}>
            {t("movienightDescription.tasks.1.subActions", { returnObjects: true }).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        </ul>
      ),
    },
    {
      label: t("movienightDescription.tasks.2.label"),
      icon: <FiKey />,
      action: (
        <p style={{ paddingLeft: '20px', marginTop: '10px' }}>
          {t("movienightDescription.tasks.2.action")}
          <ol style={{ listStyleType: 'decimal', paddingLeft: '20px', marginTop: '10px' }}>
            {t("movienightDescription.tasks.2.subActions", { returnObjects: true }).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        </p>
      ),
    },
    {
      label: t("movienightDescription.tasks.3.label"),
      icon: <MdMovie />,
      action: (
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
          {t("movienightDescription.tasks.3.action", { returnObjects: true }).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      label: t("movienightDescription.tasks.4.label"),
      icon: <AiOutlineUser />,
      action: (
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
          {t("movienightDescription.tasks.4.action", { returnObjects: true }).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      label: t("movienightDescription.tasks.5.label"),
      icon: <MdNotifications />,
      action: (
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
          {t("movienightDescription.tasks.5.action", { returnObjects: true }).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      label: t("movienightDescription.tasks.6.label"),
      icon: <MdChat />,
      action: (
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
          {t("movienightDescription.tasks.6.action", { returnObjects: true }).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      label: t("movienightDescription.tasks.7.label"),
      icon: <SiPytest />,
      action: (
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
          {t("movienightDescription.tasks.7.action", { returnObjects: true }).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      label: t("movienightDescription.tasks.8.label"),
      icon: <MdIntegrationInstructions />,
      action: (
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
          {t("movienightDescription.tasks.8.action", { returnObjects: true }).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      label: t("movienightDescription.tasks.9.label"),
      icon: <MdDescription />,
      action: (
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
          {t("movienightDescription.tasks.9.action", { returnObjects: true }).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      label: t("movienightDescription.tasks.10.label"),
      icon: <MdIntegrationInstructions />,
      action: (
        <p style={{ paddingLeft: '20px', marginTop: '10px' }}>
          {t("movienightDescription.tasks.10.action")}
          <ol style={{ listStyleType: 'decimal', paddingLeft: '20px', marginTop: '10px' }}>
            {t("movienightDescription.tasks.10.subActions", { returnObjects: true }).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        </p>
      ),
    },
  ];

  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', align: 'center', marginTop: '50px' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Text size="xl" fw={700} align="center" c="white" style={{ fontSize: "40px", marginBottom: '30px' }}>
          {t("movienightDescription.title")}
        </Text>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
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
                transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
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