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
    <Container className="home-skills-section" id="skills" px={0}>
      <Container>
        <Grid >
          <Grid.Col span={8} className="home-skills-description">
            <Title order={1} style={{ fontSize: "2.6em", marginBottom: "1rem", paddingTop:"200px"}}>
              LET ME <span style={{ color: "dodgerblue" }}> INTRODUCE </span> MYSELF
            </Title>
          </Grid.Col>
          <Grid.Col span={4} className="myAvtar">
            <Tilt>
              <Image src={myImg} className="img-fluid" alt="avatar" fit="contain" radius="xl" />
            </Tilt>
          </Grid.Col>
        </Grid>
        <Text className="home-skills-body" size="lg" align="left">
              I am <strong className="blue">NGUYEN Le Diem Quynh</strong> from{" "}
              <strong className="blue">Vietnam.</strong>  I’m currently in my 4th year of engineering at INSA Centre Val de Loire, France.
              <br />
              <br />
              I’d describe myself as <strong className="blue">motivated</strong>,  <strong className="blue">curious</strong>, and <strong className="blue">meticulous</strong> - I love diving into new challenges and learning along the way!
              <br />
              <br />
              I fell in love with the world of <strong className="blue">web and software development</strong> and have gained a strong foundation in <strong className="blue">full-stack development</strong>.
              My expertise includes
              <Text component="span" className="blue" weight={500} style={{ fontStyle: "italic" }}>
                {" "}
                Python (Django, Django Rest Framework, ...), SQL (PostgreSQL, MySQL), and JavaScript (ReactJS).
              </Text>
              <br />
              <br />
              My interests lie in <strong className="blue">optimizing data flow</strong> and <strong className="blue">enhancing interactivity</strong>, 
              while also exploring <strong className="blue">advanced algorithms </strong> to strengthen backend development. 
              <br />
              <br />
              I’m passionate about {" "}
              <Text component="span" className="blue" weight={500}>
                <strong>API development </strong>, <strong>database management</strong>, and<strong> real-time network systems</strong>
              </Text>{" "}
                as well as mastering every layer of the software stack to build seamless, high-performance applications.
              <br />
              <br />
              Building on the knowledge and skills I’ve gained, I am eager to find an opportunity where I can apply what I’ve learned, continue developing my expertise, 
              and contribute value in an environment that fosters innovation and effective communication.
            </Text>
        <Grid>
          <Grid.Col md={12} className="home-skills-social">
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