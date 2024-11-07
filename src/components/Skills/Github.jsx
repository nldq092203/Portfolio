import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Container, Title, Text, Group } from "@mantine/core";
import { Trans } from 'react-i18next';

function Github() {
  return (
    <Container fluid style={{ paddingBottom: "10px" }}>
      <Group position="center">
        <Title order={1} style={{ paddingBottom: "20px", textAlign: "center" }}>
          <Trans
            i18nKey="skills.daysICode"
            components={{
              highlight: <Text component="span" className="blue" inherit weight={700} />
            }}
          />
        </Title>
      </Group>
      <Group position="center">
        <GitHubCalendar
          username="nldq092203"
          blockSize={12}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </Group>
    </Container>
  );
}

export default Github;