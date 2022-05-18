import React from 'react'
import Section from '../UI/Section'
import Daemonset from './Daemonset'
import classes from "./Daemonsets.module.css"
import NewDaemonsets from './NewDaemonset'
const Daemonsets = (props) => {
    const items = [
        {
          name: "kube-proxy",
        },
        {
          name: "azure-ip-masq-agent",
        },
        {
          name: "azure-cni-networkmonitor",
        }
      ]
    const daemonsets = items.map((item) => { 
        return <Daemonset name={item.name}></Daemonset>
    })
    return (
        <Section title="Daemonsets" className={classes.section}>
            <ul>
                {daemonsets}
            </ul>
            <NewDaemonsets></NewDaemonsets>
        </Section>
    )
}

export default Daemonsets
