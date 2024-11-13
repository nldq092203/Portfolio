import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Popover, Button, Modal, Image, Tooltip } from '@mantine/core';
import { motion } from 'framer-motion';
import UML from '/movienight-uml.drawio.png';
import SwaggerUI from '/swaggerUI.png'; 
import { useTranslation } from 'react-i18next';

function TaskItem({ task, index }) {
  const [opened, { close, open }] = useDisclosure(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const { t } = useTranslation();

  const handleTaskClick = () => {
    if (task.label === t("movienightDescription.tasks.0.label")) {
      setSelectedImage(UML);
      setModalOpened(true);
    } else if (task.label === t("movienightDescription.tasks.9.label")) {
      setSelectedImage(SwaggerUI);
      setModalOpened(true);
    }
  };

  return (
    <>
      <Modal opened={modalOpened} fullScreen onClose={() => setModalOpened(false)} title={task.label}>
        {selectedImage && <Image src={selectedImage} alt="Diagram" />}
      </Modal>

      <motion.div
        key={index}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.3 }}
        style={{ flex: '1 1 22%', maxWidth: '22%', margin: '10px' }}
        onClick={handleTaskClick}
      >
        <Popover width={300} position="top" withArrow shadow="md" opened={opened}>
          <Popover.Target>
            <Tooltip
              label="Click to view"
              disabled={task.label !== t("movienightDescription.tasks.0.label") && task.label !== t("movienightDescription.tasks.9.label")}
              position="bottom"
              withArrow
            >
              <motion.div
                onMouseEnter={open}
                onMouseLeave={close}
                whileHover={{ scale: 1.05, boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)' }}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '200px',
                  height: '100px',
                }}
              >
                <Button
                  variant="light"
                  style={{
                    padding: '10px',
                    width: '100%',
                    height: '100%',
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ fontSize: '2em', marginBottom: '5px' }}>
                    {task.icon}
                  </div>
                  <div style={{ fontWeight: 700, color: 'white', textAlign: 'center' }}>
                    {task.label}
                  </div>
                </Button>
              </motion.div>
            </Tooltip>
          </Popover.Target>
          <Popover.Dropdown style={{ pointerEvents: 'none' }}>
            {task.action}
          </Popover.Dropdown>
        </Popover>
      </motion.div>
    </>
  );
}

export default TaskItem;
