import React from 'react'
import classes from "./DashedCard.module.css"
const DashedCard = (props) => {
    return (
        <div className={classes.dashedcard}>
            
            {props.children}
        </div>
    )
}

export default DashedCard
