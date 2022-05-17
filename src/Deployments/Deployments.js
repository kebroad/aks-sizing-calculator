import React from 'react'
import Card from '../UI/Card'
import Section from '../UI/Section'
import Deployment from './Deployment'
import classes from "./Deployments.module.css"
import NewDeployment from './NewDeployment'
const Deployments = (props) => {
    const items = [
        {
          name: "splunk",
          replicas: "3"
        },
        {
          name: "twistlock",
          replicas: "2"
        }
      ]
    const deployments = items.map((item) => { 
        return <Deployment name={item.name} replicas={item.replicas}></Deployment>
    })
    return (
        <Section title="Deployments" className={classes.section}>
            <ul>
                {deployments}
            </ul>
            <NewDeployment></NewDeployment>
        </Section>
    )
}

export default Deployments
