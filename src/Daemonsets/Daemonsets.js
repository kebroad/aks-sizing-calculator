import React from 'react'
import Section from '../UI/Section'
import Daemonsets from './Daemonset'
import classes from "./Deployments.module.css"
import NewDaemonsets from './NewDaemonsets'
const Daemonsets = (props) => {
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
    const daemonsets = items.map((item) => { 
        return <Daemonset name={item.name} replicas={item.replicas}></Daemonset>
    })
    return (
        <Section title="Daemonsets" className={classes.section}>
            <ul>
                {deployments}
            </ul>
            <NewDaemonsets></NewDaemonsets>
        </Section>
    )
}

export default Daemonsets
