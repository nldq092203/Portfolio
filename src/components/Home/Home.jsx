import React from "react";
import { Container, Grid, Title } from "@mantine/core";
import { IconHandStop} from "@tabler/icons-react";
import Particle from "../Particle";
import Type from "./Type";
import Home2 from "./Home2";

function Home() {
  return (
    <section>
      <Container fluid style={{ padding: 0 }} className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Grid>
            <Grid.Col span={7} className="home-header">
              <Title order={1} style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  <IconHandStop size={30} /> 
                </span>
              </Title>

              <Title order={2} className="heading-name">
                I'M <strong className="main-name"> Quynh</strong>
              </Title>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Grid.Col>

            <Grid.Col span={5} style={{ paddingBottom: 20 }}>
              {/* <IconHome size={24} stroke={2} className="img-fluid"/> */}
            </Grid.Col>
          </Grid>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;