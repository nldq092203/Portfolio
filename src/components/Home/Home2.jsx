import React from "react";
import { Container, Grid, Text, Title, Anchor, Image } from "@mantine/core";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { useTranslation, Trans } from "react-i18next";

function Home2() {
  return (
    <Container className="home-skills-section" id="skills" px={0}>
      <Container>
        <Grid >
          <Grid.Col span={8} className="home-skills-description">
            <Title order={1} style={{ fontSize: "2.6em", marginBottom: "1rem", paddingTop:"200px"}}>
              <Trans 
                i18nKey="home2.title" 
                components={{ highlight: <span style={{ color: "dodgerblue" }} /> }}
              />
            </Title>
          </Grid.Col>
          <Grid.Col span={4} className="myAvtar">
            <Tilt>
              <Image src="/avatar.jpg" className="img-fluid" alt="avatar" fit="contain" radius="xl" />
            </Tilt>
          </Grid.Col>
        </Grid>
        <Text className="home-skills-body" size="lg" align="left">
              <Trans 
                i18nKey="home2.introduction" 
                components={{ strong: <strong className="blue" /> }}
              />
              <br />
              <br />
              <Trans 
                i18nKey="home2.description" 
                components={{ strong: <strong className="blue" /> }}
              />              
              <br />
              <br />
              <Trans 
                i18nKey="home2.passion" 
                components={{ strong: <strong className="blue" /> }}
              /> 
              <span> </span>  
              <Trans 
                i18nKey="home2.skills" 
                components={{ text: <Text component="span" className="blue" weight={500} style={{ fontStyle: "italic" }}/> }}
              />   
              <br />
              <br />
              <Trans 
                i18nKey="home2.interests" 
                components={{ strong: <strong className="blue" /> }}
              /> 
              <br />
              <br />
              <Trans 
                i18nKey="home2.goals" 
                components={{ strong: <strong className="blue" /> }}
              /> 
              <br />
              <br />
              <Trans 
                i18nKey="home2.ambition" 
              /> 
            </Text>
        <Grid>
          <Grid.Col md={12} className="home-skills-social">
            <Title order={2} style={{ marginTop: "2rem", marginBottom: "0.5rem" }}>
              <Trans 
                i18nKey="home2.socialTitle" 
              /> 
            </Title>
            <Text size="md">
              <Trans 
                i18nKey="home2.socialMessage" 
                components={{ highlight: <span style={{ color: "dodgerblue" }} /> }}
              />
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