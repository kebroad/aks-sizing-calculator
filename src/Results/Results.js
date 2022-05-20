import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Section from "../UI/Section";
import classes from "./Results.module.css";
import { FiDownload } from "react-icons/fi";
import { CSVLink } from "react-csv";
const Results = (props) => {
  const fetchCSV = () => {
    const data = props.exportCSV();
    return data;
  };
  return (
    <Section title="Results">
      <div className={classes.col}>
        <div className={classes.row}>
          <h2 className={classes.label}>System Nodes: </h2>
          <h2 className={classes.value}>{props.systemNodes}</h2>
        </div>
        <div className={classes.row}>
          <h2 className={classes.label}>User Nodes: </h2>
          <h2 className={classes.value}>{props.userNodes}</h2>
        </div>
        <div className={classes.row}>
          <h2 className={classes.label}>Total IPs Used:</h2>
          <h2 className={classes.value}>{props.totalIpsUsed}</h2>
        </div>
        <div className={classes.row}>
          <h2 className={classes.label}>Total IPs Needed:</h2>
          <h2 className={classes.value}>{props.totalIpsReserved}</h2>
        </div>
        <div className={classes.row}>
          <h2 className={classes.label}>Subnet Size:</h2>
          <h2 className={classes.value}>/{props.cidrNumber}</h2>
        </div>
        <CSVLink data={fetchCSV()} filename="aks-sizing">
          <Card className={classes.downloadcard}>
            <div className={classes.download}>
              <FiDownload className={classes.downloadicon}></FiDownload>
              <h2>Download as CSV</h2>
            </div>
          </Card>
        </CSVLink>
        <Button></Button>
      </div>
    </Section>
  );
};

export default Results;
