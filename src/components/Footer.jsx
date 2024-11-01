import React from "react";
import { Container, Grid, Text, Group, Anchor } from "@mantine/core";
import { AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid py="md" className="footer" style={{ backgroundColor: "#333", color: "white" }}>
      <Grid justify="center" align="center">
        <Grid.Col span={4} style={{ textAlign: "center" }}>
          <Text size="lg" weight={500}>Developed by Quynh Nguyen</Text>
        </Grid.Col>
        <Grid.Col span={4} style={{ textAlign: "center" }}>
          <Group spacing="md" position="center" className="footer-icons">
            <Anchor href="https://github.com/nldq092203" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
              <AiFillGithub size={24} />
            </Anchor>
            <Anchor href="https://www.linkedin.com/in/le-diem-quynh-nguyen-453749309/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
              <FaLinkedinIn size={24} />
            </Anchor>
            <Anchor href="mailto:lnguye220903@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
              <FaEnvelope size={24} />
            </Anchor>
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Footer;