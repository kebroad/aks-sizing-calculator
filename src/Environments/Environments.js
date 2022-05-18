import React from "react";
import Section from "../UI/Section";
import Environment from "./Environment";
import classes from "./Environments.module.css";
import NewEnvironments from "./NewEnvironment";
const Environments = (props) => {
  const environments = props.environments.map((item) => {
    return (
      <Environment
        item={item}
        onClick={props.removeEnvironmentHandler}
      ></Environment>
    );
  });
  return (
    <Section title="Environments" className={classes.section}>
      <ul>{environments}</ul>
      <NewEnvironments onClick={props.addEnvironmentHandler}></NewEnvironments>
    </Section>
  );
};

export default Environments;
