import React, { useState } from "react";
import Card from "../UI/Card";
import DashedCard from "../UI/DashedCard";
import { FiPlusSquare } from "react-icons/fi";
import classes from "./NewDeployment.module.css";
import Button from "../UI/Button";
const NewDeployment = (props) => {
  const [name, setName] = useState();
  const [replicas, setReplicas] = useState();
  const [type, setType] = useState("user");
  const onChangeType = (e) => {
    setType(e.target.value);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeReplicas = (e) => {
    setReplicas(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.onClick({
      name: name,
      type: type,
      replicas: parseInt(replicas),
    });

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
            className={classes.name}
            onChange={onChangeName}
            placeholder="name"
            type="text"
            name="name"
          ></input>
          <label hidden>name</label>
          <select
            id="type"
            name="type"
            placeholder="sf"
            className={classes.type}
            onChange={onChangeType}
            value={type}
          >
            <option className={classes.type} value="system">
              system
            </option>
            <option value="user">user</option>
          </select>
          <input
            value={replicas}
            onChange={onChangeReplicas}
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
