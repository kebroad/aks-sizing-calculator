import React from "react";
import Section from "../UI/Section";
import Daemonset from "./Daemonset";
import classes from "./Daemonsets.module.css";
import NewDaemonsets from "./NewDaemonset";
const Daemonsets = (props) => {
  const daemonsets = props.daemonsets.map((item) => {
    return (
      <Daemonset onClick={props.removeDaemonsetHandler} item={item}></Daemonset>
    );
  });
  return (
    <Section title="Daemonsets" className={classes.section}>
      <ul>{daemonsets}</ul>
      <NewDaemonsets onClick={props.addDaemonsetHandler}></NewDaemonsets>
    </Section>
  );
};

export default Daemonsets;
