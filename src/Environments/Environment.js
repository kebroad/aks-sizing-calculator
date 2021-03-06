import React from "react";
import Card from "../UI/Card";
import classes from "./Environment.module.css";
import { FiMinusSquare } from "react-icons/fi";
import Button from "../UI/Button";
const Environment = (props) => {
  const onClickHandler = () => {
    props.onClick(props.item);
  };
  return (
    <li className={classes.li}>
      <Card>
        <div className={classes.row}>
          <h2 className={classes.name}>{props.item.name}</h2>
          <h2 className={classes.replicas}>{props.item.replicas}</h2>
          <Button className={classes.button} onClick={onClickHandler}>
            <FiMinusSquare className={classes.minus}></FiMinusSquare>
          </Button>
        </div>
      </Card>
    </li>
  );
};

export default Environment;
