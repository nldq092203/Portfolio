import React from "react";
import { Paper, Text, List, ThemeIcon } from "@mantine/core";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Paper shadow="md" p="lg" radius="md" className="quote-card-view">
      <Text align="center" size="lg" style={{ marginBottom: "20px" }}>
        <strong>Hi! </strong>I am <span className="blue">NGUYEN Le Diem Quynh</span> from{" "}
        <span className="blue">Vietnam.</span>
        <br />
        <br />
        I’m currently in my 4th year of engineering at INSA Centre Val de Loire, France.
        <br />
        <br />
        I’d describe myself as <strong className="blue">motivated</strong>,  <strong className="blue">meticulous</strong>, and <strong className="blue">independent</strong> - I love diving into new challenges and learning along the way!
        <br />
        <br />
        Building on the knowledge and skills I’ve gained, I am eager to find an opportunity where I can apply what I’ve learned, further develop my expertise, and add value to the company in an environment that fosters innovation and effective communication.
      </Text>
    </Paper>
  );
}

export default AboutCard;