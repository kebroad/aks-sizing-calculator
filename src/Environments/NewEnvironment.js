import React from 'react'
import Card from '../UI/Card'
import DashedCard from '../UI/DashedCard'
import { FiPlusSquare } from 'react-icons/fi';
import classes from "./NewEnvironment.module.css"
import Button from '../UI/Button';
const NewEnvironment = () => {
    return (                
        <DashedCard>
            <form>
                <div className={classes.row}>
                    <label hidden>name</label>
                    <input className={classes.name} placeholder="name" type="text" name="name"></input>
                     <Button className={classes.button}>
                    <FiPlusSquare className={classes.plus}></FiPlusSquare>
                    </Button>
                </div>
            </form>
        </DashedCard>
    )
}

export default NewEnvironment
