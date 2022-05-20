import classes from "./App.module.css";
import Header from "./UI/Header";
import Main from "./UI/Main";
import Deployments from "./Deployments/Deployments";
import Daemonsets from "./Daemonsets/Daemonsets";
import Environments from "./Environments/Environments";
import useEndpoints from "./hooks/useEndpoints";
import Sidebar from "./UI/Sidebar";
import Additional from "./Additional/Additional";
import Results from "./Results/Results";

function App() {
  const initialDeployments = [
    {
      name: "coredns",
      type: "system",
      replicas: 2,
      id: 0.32974327,
    },
    {
      name: "coredns-autoscaler",
      type: "system",
      replicas: 1,
      id: 0.398219545,
    },
    {
      name: "metrics-server",
      type: "system",
      replicas: 1,
      id: 0.9082347,
    },
    {
      name: "tunnelfront",
      type: "system",
      replicas: 1,
      id: 0.0237328,
    },
  ];
  const initialDaemonsets = [
    {
      name: "kube-proxy",
      type: "system",
      id: 0.048272,
    },
    {
      name: "azure-ip-masq-agent",
      type: "system",
      id: 0.57283,
    },
    {
      name: "azure-cni-networkmonitor",
      type: "system",
      id: 0.6828,
    },
  ];
  const initialEnvironments = [
    {
      name: "dev",
      replicas: 1,
      id: 0.57283,
    },
  ];
  const initialKvIntegration = false;
  const initialPrivateCluster = false;
  const initialOsmEnabled = false;
  const initialContainerInsightsEnabled = false;
  const initialIngressEndpoints = 1;
  const initialSystemPodsPerNode = 30;
  const initialUserPodsPerNode = 0;
  const {
    deployments,
    daemonsets,
    environments,
    kvIntegration,
    privateCluster,
    osmEnabled,
    containerInsightsEnabled,
    ingressEndpoints,
    systemPodsPerNode,
    userPodsPerNode,
    userNodes,
    systemNodes,
    totalIpsUsed,
    totalIpsReserved,
    cidrNumber,
    addDeploymentHandler,
    removeDeploymentHandler,
    addDaemonsetHandler,
    removeDaemonsetHandler,
    addEnvironmentHandler,
    removeEnvironmentHandler,
    kvIntegrationToggle,
    privateClusterToggle,
    osmEnabledToggle,
    containerInsightsEnabledToggle,
    onChangeIngressEndpoints,
    onChangeSystemPodsPerNode,
    onChangeUserPodsPerNode,
    exportCSV,
  } = useEndpoints(
    initialDeployments,
    initialDaemonsets,
    initialEnvironments,
    initialKvIntegration,
    initialPrivateCluster,
    initialOsmEnabled,
    initialContainerInsightsEnabled,
    initialIngressEndpoints,
    initialSystemPodsPerNode,
    initialUserPodsPerNode
  );
  return (
    <>
      <Header></Header>
      <div className={classes.divider}>
        <Main>
          <Deployments
            deployments={deployments}
            addDeploymentHandler={addDeploymentHandler}
            removeDeploymentHandler={removeDeploymentHandler}
          ></Deployments>
          <Daemonsets
            daemonsets={daemonsets}
            addDaemonsetHandler={addDaemonsetHandler}
            removeDaemonsetHandler={removeDaemonsetHandler}
          ></Daemonsets>
          <Environments
            environments={environments}
            addEnvironmentHandler={addEnvironmentHandler}
            removeEnvironmentHandler={removeEnvironmentHandler}
          ></Environments>
        </Main>
        <Sidebar>
          <Additional
            kvIntegration={kvIntegration}
            privateCluster={privateCluster}
            osmEnabled={osmEnabled}
            containerInsightsEnabled={containerInsightsEnabled}
            ingressEndpoints={ingressEndpoints}
            systemPodsPerNode={systemPodsPerNode}
            userPodsPerNode={userPodsPerNode}
            kvIntegrationToggle={kvIntegrationToggle}
            privateClusterToggle={privateClusterToggle}
            osmEnabledToggle={osmEnabledToggle}
            containerInsightsEnabledToggle={containerInsightsEnabledToggle}
            onChangeIngressEndpoints={onChangeIngressEndpoints}
            onChangeSystemPodsPerNode={onChangeSystemPodsPerNode}
            onChangeUserPodsPerNode={onChangeUserPodsPerNode}
          ></Additional>
          <Results
            userNodes={userNodes}
            systemNodes={systemNodes}
            totalIpsUsed={totalIpsUsed}
            totalIpsReserved={totalIpsReserved}
            cidrNumber={cidrNumber}
            exportCSV={exportCSV}
          ></Results>
        </Sidebar>
      </div>
    </>
  );
}

export default App;
