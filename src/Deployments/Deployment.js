import React from 'react'
import Card from '../UI/Card'
import classes from "./Deployment.module.css"
import { FiMinusSquare } from 'react-icons/fi';
import Button from '../UI/Button';
const Deployment = (props) => {
    return (
        <li className={classes.li}>
            <Card>
                <div className={classes.row}>
                    <h2 className={classes.name}>{props.name}</h2>
                    <h2 className={classes.number}>{props.replicas}</h2>
                    <Button className={classes.button}>
                    <FiMinusSquare className={classes.minus}></FiMinusSquare>
                    </Button>

                </div> 
            </Card>
        </li>
    )
}

export default Deployment
