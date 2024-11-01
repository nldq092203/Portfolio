import React from "react";
import { Container, Grid, Text, Title, Anchor, Image } from "@mantine/core";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import myImg from "../../assets/avatar.jpg";

function Home2() {
  return (
    <Container className="home-about-section" id="about" px={0}>
      <Container>
        <Grid >
          <Grid.Col span={8} className="home-about-description">
            <Title order={1} style={{ fontSize: "2.6em", marginBottom: "1rem" }}>
              LET ME <span style={{ color: "dodgerblue" }}> INTRODUCE </span> MYSELF
            </Title>
            <Text className="home-about-body" size="lg" align="left">
                I fell in love with the world of <strong>web and software development</strong> and I have at least learnt
                something, I think… 🤷‍♂️
              <br />
              <br />My background is rooted in <strong>full-stack development</strong> with a solid foundation in 
              <Text component="span" className="blue" weight={500} style={{ fontStyle: "italic" }}>
                {" "}
                Python (Django, Django Rest Framework, ...), SQL (PostgreSQL, MySQL), and JavaScript (ReactJS).
              </Text>
              <br />
              <br />
              My interests lie in <strong>optimizing data flow</strong> and <strong>enhancing interactivity</strong>, 
              while also exploring <strong>advanced algorithms </strong> to strengthen backend development. 
              <br />
              <br />
              I’m passionate about {" "}
              <Text component="span" className="blue" weight={500}>
                API development, database management, and real-time network systems
              </Text>{" "}
                as well as mastering every layer of the software stack to build seamless, high-performance applications.
              <br />
              <br />
            </Text>
          </Grid.Col>
          <Grid.Col span={4} className="myAvtar">
            <Tilt>
              <Image src={myImg} className="img-fluid" alt="avatar" fit="contain" radius="xl" />
            </Tilt>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col md={12} className="home-about-social">
            <Title order={2} style={{ marginTop: "2rem", marginBottom: "0.5rem" }}>
              FIND ME ON
            </Title>
            <Text size="md">
              Feel free to <span style={{ color: "dodgerblue" }}>connect</span> with me
            </Text>
            <Grid justify="center" mt="lg">
              <Grid.Col span={1} className="social-icons">
                <Anchor
                  href="https://github.com/nldq092203"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub size={38} />
                </Anchor>
              </Grid.Col>
              <Grid.Col span={1} className="social-icons">
                <Anchor
                  href="https://www.linkedin.com/in/le-diem-quynh-nguyen-453749309/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn size={38} />
                </Anchor>
              </Grid.Col>
              <Grid.Col span={1} className="social-icons">
                <Anchor
                  href="mailto:lnguye220903@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaEnvelope size={38} />
                </Anchor>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </Container>
  );
}

export default Home2;