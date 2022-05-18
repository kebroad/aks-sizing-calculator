import React, { useState } from "react";
import Card from "../UI/Card";
import Section from "../UI/Section";
import Deployment from "./Deployment";
import classes from "./Deployments.module.css";
import NewDeployment from "./NewDeployment";
const Deployments = (props) => {
  const deployments = props.deployments.map((item) => {
    return (
      <Deployment
        onClick={props.removeDeploymentHandler}
        item={item}
      ></Deployment>
    );
  });
  return (
    <Section title="Deployments/Stateful Sets" className={classes.section}>
      <ul>{deployments}</ul>
      <NewDeployment onClick={props.addDeploymentHandler}></NewDeployment>
    </Section>
  );
};

export default Deployments;
