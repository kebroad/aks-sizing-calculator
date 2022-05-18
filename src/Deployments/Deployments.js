import React, { useState } from "react";
import Card from "../UI/Card";
import Section from "../UI/Section";
import Deployment from "./Deployment";
import classes from "./Deployments.module.css";
import NewDeployment from "./NewDeployment";
const Deployments = (props) => {
  const initialItems = [
    {
      name: "coredns",
      replicas: "2",
    },
    {
      name: "coredns-autoscaler",
      replicas: "1",
    },
    {
      name: "metrics-server",
      replicas: "1",
    },
    {
      name: "tunnelfront",
      replicas: "1",
    },
  ];
  const [items, setItems] = useState(initialItems);
  const AddItemHandler = (item) => {
    setItems((items) => {
      const newItem = {
        ...item,
        id: Math.random(),
      };
      const newItems = items + newItem;
      return newItems;
    });
  };

  const deployments = items.map((item) => {
    return <Deployment name={item.name} replicas={item.replicas}></Deployment>;
  });
  return (
    <Section title="Deployments/Stateful Sets" className={classes.section}>
      <ul>{deployments}</ul>
      <NewDeployment onClick={AddItemHandler}></NewDeployment>
    </Section>
  );
};

export default Deployments;
