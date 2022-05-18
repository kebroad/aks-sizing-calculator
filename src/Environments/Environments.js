import React from 'react'
import Section from '../UI/Section'
import Environment from './Environment'
import classes from "./Environments.module.css"
import NewEnvironments from './NewEnvironment'
const Environments = (props) => {
    const items = [
        {
          name: "dev",
          replicas: "3"
        },
        {
          name: "qa",
          replicas: "2"
        }
      ]
    const environments = items.map((item) => { 
        return <Environment name={item.name}></Environment>
    })
    return (
        <Section title="Environments" className={classes.section}>
            <ul>
                {environments}
            </ul>
            <NewEnvironments></NewEnvironments>
        </Section>
    )
}

export default Environments
