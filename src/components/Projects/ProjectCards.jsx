import React, { useState } from "react";
import { Card, Text, Button, Group, Tooltip } from "@mantine/core";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

function ProjectCards(props) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  const handleCardClick = () => {
    if (props.detailLink) {
      navigate(props.detailLink);
    }
  };

  return (
    <Card
      shadow="md"
      radius="md"
      p="lg"
      className="project-card-view"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Text fw={1000} style={{ fontSize: "30px" }} className="blue">
        {props.title}
      </Text>
      <Text fw={500} style={{ fontSize: "15px" }} className="blue">
        {props.subtitle}
      </Text>

      <Text mt="xs" size="xl" style={{ textAlign: "justify" }}>
        {props.description}
      </Text>

      {hovered && props.techStack && (
        <Group mt="md" spacing="xs" style={{ justifyContent: 'center' }}>
          {props.techStack.map((tech, index) => (
            <Tooltip key={index} label={tech.name} withArrow>
              <div>{tech.icon}</div>
            </Tooltip>
          ))}
          <p>...</p>
        </Group>
      )}

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0' }}>
        <Button
          component="a"
          href={props.ghLink}
          target="_blank"
          leftSection={<FaGithub />} 
          variant="light"
          color="blue"
          size="lg"
        >
          Github
        </Button>

        {props.detailLink && (
          <Button
            component="a"
            onClick={handleCardClick}
            target="_blank"
            leftSection={<CgWebsite />} 
            variant="light"
            color="blue"
            size="lg"
          >
            Detail
          </Button>
        )}
      </div>
    </Card>
  );
}

export default ProjectCards;