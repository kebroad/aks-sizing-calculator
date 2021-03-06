import React, { useState } from "react";
import DashedCard from "../UI/DashedCard";
import { FiPlusSquare } from "react-icons/fi";
import classes from "./NewDaemonset.module.css";
import Button from "../UI/Button";

const NewDaemonset = (props) => {
  const [name, setName] = useState();
  const [type, setType] = useState();
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeType = (e) => {
    setType(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.onClick({ name: name, type: type });
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
          <Button className={classes.button}>
            <FiPlusSquare className={classes.plus}></FiPlusSquare>
          </Button>
        </div>
      </form>
    </DashedCard>
  );
};

export default NewDaemonset;
