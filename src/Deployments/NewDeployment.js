import React, { useState } from "react";
import Card from "../UI/Card";
import DashedCard from "../UI/DashedCard";
import { FiPlusSquare } from "react-icons/fi";
import classes from "./NewDeployment.module.css";
import Button from "../UI/Button";
const NewDeployment = (props) => {
  const [name, setName] = useState();
  const [replicas, setReplicas] = useState();
  const onChangeName = () => {
      
  }
  const submitHandler = (item) => {};

  return (
    <DashedCard>
      <form>
        <div className={classes.row}>
          <label hidden>name</label>
          <input
            className={classes.name}
            placeholder="name"
            type="text"
            name="name"
          ></input>
          <label hidden>name</label>
          <input
            className={classes.number}
            placeholder="replicas"
            type="number"
            name="replicas"
          ></input>
          <Button className={classes.button}>
            <FiPlusSquare className={classes.plus}></FiPlusSquare>
          </Button>
        </div>
      </form>
    </DashedCard>
  );
};

export default NewDeployment;
