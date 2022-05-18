import React from "react";

const ListView = (props) => {
  const deployments = props.items.map((item) => {
    return (
      <Deployment
        onClick={removeItemHandler}
        name={item.name}
        replicas={item.replicas}
      ></Deployment>
    );
  });
  return (
    <Section title="Deployments/Stateful Sets" className={classes.section}>
      <ul>{deployments}</ul>
      <NewDeployment onClick={addItemHandler}></NewDeployment>
    </Section>
  );
};

export default ListView;


