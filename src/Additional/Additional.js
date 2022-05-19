import React, { useState } from "react";
import Section from "../UI/Section";
import classes from "./Additional.module.css";
import { FiSquare } from "react-icons/fi";
import Button from "../UI/Button";
const Additional = (props) => {
  const kvIntegrationClasses = props.kvIntegration
    ? `${classes.checkmark} ${classes.checkmarkchecked}`
    : `${classes.checkmark}`;

  const privateClusterClasses = props.privateCluster
    ? `${classes.checkmark} ${classes.checkmarkchecked}`
    : `${classes.checkmark}`;

  const osmEnabledClasses = props.osmEnabled
    ? `${classes.checkmark} ${classes.checkmarkchecked}`
    : `${classes.checkmark}`;

  const containerInsightsEnabledClasses = props.containerInsightsEnabled
    ? `${classes.checkmark} ${classes.checkmarkchecked}`
    : `${classes.checkmark}`;

  const onChangeIngressEndpoints = (e) => {
    props.onChangeIngressEndpoints(e.target.value);
  };

  const onChangeSystemPodsPerNode = (e) => {
    props.onChangeSystemPodsPerNode(e.target.value);
  };

  const onChangeUserPodsPerNode = (e) => {
    props.onChangeUserPodsPerNode(e.target.value);
  };

  return (
    <Section title="Additional">
      <div className={classes.col}>
        <Button onClick={props.kvIntegrationToggle}>
          <div className={classes.row}>
            <div className={classes.icon}>
              <FiSquare className={kvIntegrationClasses}></FiSquare>
            </div>
            <h2>Key Vault CSI Integration</h2>
          </div>
        </Button>
        <Button className={classes.button} onClick={props.privateClusterToggle}>
          <div className={classes.row}>
            <div className={classes.icon}>
              <FiSquare className={privateClusterClasses}></FiSquare>
            </div>
            <h2>Private Cluster</h2>
          </div>
        </Button>
        <Button className={classes.button} onClick={props.osmEnabledToggle}>
          <div className={classes.row}>
            <div className={classes.icon}>
              <FiSquare className={osmEnabledClasses}></FiSquare>
            </div>
            <h2>OSM Enabled</h2>
          </div>
        </Button>
        <Button
          className={classes.button}
          onClick={props.containerInsightsEnabledToggle}
        >
          <div className={classes.row}>
            <div className={classes.icon}>
              <FiSquare className={containerInsightsEnabledClasses}></FiSquare>
            </div>
            <h2>ContainerInsights</h2>
          </div>
        </Button>
        <div className={classes.row}>
          <input
            className={classes.input}
            type="number"
            name="name"
            onChange={onChangeIngressEndpoints}
            value={props.ingressEndpoints}
          ></input>
          <h2>Ingress Controller/AGIC Endpoints</h2>
        </div>
        <div className={classes.row}>
          <input
            className={classes.input}
            type="number"
            name="name"
            onChange={onChangeSystemPodsPerNode}
            value={props.systemPodsPerNode}
          ></input>
          <h2> System Pool Pods/Node</h2>
        </div>
        <div className={classes.row}>
          <input
            className={classes.input}
            type="number"
            name="name"
            onChange={onChangeUserPodsPerNode}
            value={props.userPodsPerNode}
          ></input>
          <h2> User Pool Pods/Node</h2>
        </div>
      </div>
    </Section>
  );
};

export default Additional;
