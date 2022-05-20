import React, { useState } from "react";
import DashedCard from "../UI/DashedCard";
import { FiPlusSquare } from "react-icons/fi";
import classes from "./NewEnvironment.module.css";
import Button from "../UI/Button";
const NewEnvironment = (props) => {
  const [name, setName] = useState();
  const [replicas, setReplicas] = useState();
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeReplicas = (e) => {
    setReplicas(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.onClick({ name: name, replicas: parseInt(replicas) });
    setName("");
    setReplicas("");
  };
  return (
    <DashedCard>
      <form onSubmit={submitHandler}>
        <div className={classes.row}>
          <label hidden>name</label>
          <input
            value={name}
            onChange={onChangeName}
            className={classes.name}
            placeholder="name"
            type="text"
            name="name"
          ></input>
          <input
            value={replicas}
            onChange={onChangeReplicas}
            className={classes.replicas}
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

export default NewEnvironment;
