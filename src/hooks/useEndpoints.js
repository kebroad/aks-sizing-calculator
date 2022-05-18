import { useState } from "react";

const useEndpoints = (
  initialDeployments,
  initialDaemonsets,
  initialEnvironments
) => {
  const [deployments, setDeployments] = useState(initialDeployments);
  const [daemonsets, setDaemonsets] = useState(initialDaemonsets);
  const [environments, setEnvironments] = useState(initialEnvironments);
  const addDeploymentHandler = (deployment) => {
    setDeployments((deployments) => {
      const newDeployment = {
        ...deployment,
        id: Math.random(),
      };
      const newDeployments = [...deployments, newDeployment];
      return newDeployments;
    });
  };

  const removeDeploymentHandler = (deployment) => {
    setDeployments((deployments) => {
      const newDeployments = deployments.filter(
        (item) => item.id != deployment.id
      );
      return newDeployments;
    });
  };

  const addDaemonsetHandler = (daemonset) => {
    setDaemonsets((daemonsets) => {
      const newDaemonset = {
        ...daemonset,
        id: Math.random(),
      };
      const newDaemonsets = [...daemonsets, newDaemonset];
      return newDaemonsets;
    });
  };

  const removeDaemonsetHandler = (daemonset) => {
    setDaemonsets((daemonsets) => {
      const newDaemonsets = daemonsets.filter(
        (item) => item.id != daemonset.id
      );
      return newDaemonsets;
    });
  };

  const addEnvironmentHandler = (environment) => {
    setEnvironments((environments) => {
      const newEnvironment = {
        ...environment,
        id: Math.random(),
      };
      const newEnvironments = [...environments, newEnvironment];
      return newEnvironments;
    });
  };

  const removeEnvironmentHandler = (environment) => {
    setEnvironments((environments) => {
      const newEnvironments = environments.filter(
        (item) => item.id != environment.id
      );
      return newEnvironments;
    });
  };

  return {
    deployments,
    daemonsets,
    environments,
    addDeploymentHandler,
    removeDeploymentHandler,
    addDaemonsetHandler,
    removeDaemonsetHandler,
    addEnvironmentHandler,
    removeEnvironmentHandler,
  };
};

export default useEndpoints;
