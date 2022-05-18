import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Section from "../UI/Section";
import classes from "./Results.module.css";
import { FiDownload } from "react-icons/fi";
const Results = () => {
  return (
    <Section title="Results">
      <div className={classes.col}>
        <div className={classes.row}>
          <h2>System Nodes: </h2>
          <h2>3</h2>
        </div>
        <div className={classes.row}>
          <h2>User Nodes: </h2>
          <h2>3</h2>
        </div>
        <div className={classes.row}>
          <h2>Total IPs Needed:</h2>
          <h2>3</h2>
        </div>
        <div className={classes.row}>
          <h2>Subnet Size:</h2>
          <h2>/27</h2>
        </div>
        <Button>
          <Card className={classes.downloadcard}>
            <div className={classes.download}>
              <FiDownload className={classes.downloadicon}></FiDownload>
              <h2>Download as CSV</h2>
            </div>
          </Card>
        </Button>
      </div>
    </Section>
  );
};

export default Results;
