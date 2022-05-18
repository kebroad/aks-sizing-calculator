import React, { useState } from "react";
import Card from "../UI/Card";
import DashedCard from "../UI/DashedCard";
import { FiPlusSquare } from "react-icons/fi";
import classes from "./NewDaemonset.module.css";
import Button from "../UI/Button";
const NewDaemonset = (props) => {
  const [name, setName] = useState();
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.onClick({ name: name });
    setName("");
  };
  return (
    <DashedCard>
      <form onSubmit={submitHandler}>
        <div className={classes.row}>
          <label hidden>name</label>
          <input
            className={classes.name}
            placeholder="name"
            type="text"
            name="name"
            onChange={onChangeName}
            value={name}
          ></input>
          <Button className={classes.button}>
            <FiPlusSquare className={classes.plus}></FiPlusSquare>
          </Button>
        </div>
      </form>
    </DashedCard>
  );
};

export default NewDaemonset;
