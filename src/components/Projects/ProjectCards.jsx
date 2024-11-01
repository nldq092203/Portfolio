import React from "react";
import { Card, Image, Text, Button, Group } from "@mantine/core";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card shadow="md" radius="md" p="lg" className="project-card-view">
      <Card.Section>
        <Image src={props.imgPath} alt="card-img" height={160} fit="cover" />
      </Card.Section>
      
      <Text weight={500} size="lg" mt="md">
        {props.title}
      </Text>
      
      <Text mt="xs" size="sm" color="dimmed" style={{ textAlign: "justify" }}>
        {props.description}
      </Text>
      
      <Group mt="md" spacing="sm">
        <Button
          component="a"
          href={props.ghLink}
          target="_blank"
          leftIcon={<BsGithub />}
          variant="light"
          color="blue"
        >
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>

        {/* If the component contains a Demo link and it's not a Blog, render the Demo button */}
        {!props.isBlog && props.demoLink && (
          <Button
            component="a"
            href={props.demoLink}
            target="_blank"
            leftIcon={<CgWebsite />}
            variant="light"
            color="blue"
          >
            Demo
          </Button>
        )}
      </Group>
    </Card>
  );
}

export default ProjectCards;