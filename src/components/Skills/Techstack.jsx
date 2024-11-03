import React from "react";
import { Grid, Container, Text } from "@mantine/core";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiDocker,
  SiPostgresql,
  SiDjango,
  SiKubernetes,
  SiHtml5, 
  SiCss3
} from "react-icons/si";


function Techstack() {
  return (
    <Container fluid style={{ paddingBottom: "100px" }}>
      <Grid gutter={{ base: 20, xs: 'xl', md: 'xl', xl: 100 }} style={{padding :'100px'}} justify="center" align="center" >
        <Grid.Col span={1} className="tech-icons">
          <DiPython size={100} />
        </Grid.Col>        
        <Grid.Col span={1} className="tech-icons">
          <SiDjango size={100} />
        </Grid.Col>
        <Grid.Col span={1} className="tech-icons">
          <Text fw={1000} style={{fontSize:"30px", height:"100px", width:"100px", paddingTop:"20px"}} >Celery</Text> 
        </Grid.Col>
        <Grid.Col span={1} className="tech-icons">
          <SiRedis size={100} />
        </Grid.Col>
        <Grid.Col span={1} className="tech-icons">
          <DiJavascript1 size={100} />
        </Grid.Col>
        <Grid.Col span={1}  className="tech-icons">
          <DiReact size={100} />
        </Grid.Col>
        <Grid.Col span={1} className="tech-icons">
          <SiPostgresql size={100} />
        </Grid.Col>
        <Grid.Col span={1} className="tech-icons">
          <DiMongodb size={100} />
        </Grid.Col>
        <Grid.Col span={1} className="tech-icons">
          <SiHtml5 size={100} />
        </Grid.Col>
        <Grid.Col span={1} className="tech-icons">
          <SiCss3 size={100} />
        </Grid.Col>
        <Grid.Col span={1} className="tech-icons">
          <CgCPlusPlus size={100} />
        </Grid.Col>
        <Grid.Col span={1} className="tech-icons">
          <SiFirebase size={100} />
        </Grid.Col>
        <Grid.Col span={1} className="tech-icons">
          <DiGit size={100} />
        </Grid.Col>
        <Grid.Col span={1} className="tech-icons">
          <SiDocker size={100} />
        </Grid.Col>
        <Grid.Col span={1} className="tech-icons">
          <SiKubernetes size={100} />
        </Grid.Col>
        <Grid.Col span={1} className="tech-icons">
          <DiJava size={100} />
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Techstack;