import React from 'react'
import Card from './Card'
import classes from "./Section.module.css"

const Section = (props) => {
    return (
        <Card className={props.className}>
            <h1 className={classes.title}>{props.title}</h1>
            {props.children}
        </Card>
    )
}

export default Section
