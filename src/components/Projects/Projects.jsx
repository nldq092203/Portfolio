import React from "react";
import { Container, Grid, Title, Text } from "@mantine/core";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section" style={{ position: "relative" }}>
      <Particle />
      <Container>
        <Title order={1} className="project-heading" style={{ textAlign: "center", color: "white", marginTop: "20px" }}>
          My Recent <strong className="purple">Works</strong>
        </Title>
        <Text c="dimmed" size="lg" style={{ textAlign: "center", marginBottom: "30px" }}>
          Here are a few projects I've worked on recently.
        </Text>

        <Grid justify="center" gutter="xl">
          <Grid.Col span={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends, built with React.js, Material-UI, and Firebase. Features include real-time messaging, image sharing, and reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Grid.Col>

          <Grid.Col span={4} className="project-card">
            <ProjectCard
              // imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="A personal blog page built with Next.js and Tailwind CSS, which takes content from markdown files and renders it with Next.js. Supports dark mode and writing blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Grid.Col>

          <Grid.Col span={4} className="project-card">
            <ProjectCard
              // imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor built with React.js. Supports HTML, CSS, and JS with live preview, and markdown editing with toolbar. Features auto-save to local storage."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Grid.Col>

          <Grid.Col span={4} className="project-card">
            <ProjectCard
              // imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="A plant disease detection model trained with a Kaggle dataset using PyTorch and CNN. Achieved 98% accuracy in detecting diseases in various plant leaves with the ResNet34 model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Grid.Col>
        </Grid>
      </Container>
    </Container>
  );
}

export default Projects;