import logo from "./logo.svg";
import "./App.css";
import Header from "./UI/Header";
import Main from "./UI/Main";
import Deployments from "./Deployments/Deployments";
import Daemonsets from "./Daemonsets/Daemonsets";
import Environments from "./Environments/Environments";
import useEndpoints from "./hooks/useEndpoints";

function App() {
  const initialDeployments = [
    {
      name: "coredns",
      replicas: "2",
      id: 0.32974327,
    },
    {
      name: "coredns-autoscaler",
      replicas: "1",
      id: 0.398219545,
    },
    {
      name: "metrics-server",
      replicas: "1",
      id: 0.9082347,
    },
    {
      name: "tunnelfront",
      replicas: "1",
      id: 0.0237328,
    },
  ];
  const initialDaemonsets = [
    {
      name: "kube-proxy",
      id: 0.048272,
    },
    {
      name: "azure-ip-masq-agent",
      id: 0.57283,
    },
    {
      name: "azure-cni-networkmonitor",
      id: 0.6828,
    },
  ];
  const initialEnvironments = [
    {
      name: "dev",
      replicas: "3",
    },
  ];
  const {
    deployments,
    daemonsets,
    environments,
    addDeploymentHandler,
    removeDeploymentHandler,
    addDaemonsetHandler,
    removeDaemonsetHandler,
    addEnvironmentHandler,
    removeEnvironmentHandler,
  } = useEndpoints(initialDeployments, initialDaemonsets, initialEnvironments);
  return (
    <>
      <Header></Header>
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
    </>
  );
}

export default App;
