import { useState } from "react";

const useEndpoints = (
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
) => {
  const [deployments, setDeployments] = useState(initialDeployments);
  const [daemonsets, setDaemonsets] = useState(initialDaemonsets);
  const [environments, setEnvironments] = useState(initialEnvironments);

  const [kvIntegration, setKvIntegration] = useState(initialKvIntegration);
  const [privateCluster, setPrivateCluster] = useState(initialPrivateCluster);
  const [osmEnabled, setOsmEnabled] = useState(initialOsmEnabled);
  const [containerInsightsEnabled, setContainerInsightsEnabled] = useState(
    initialContainerInsightsEnabled
  );
  const [ingressEndpoints, setIngressEndpoints] = useState(
    initialIngressEndpoints
  );
  const [systemPodsPerNode, setSystemPodsPerNode] = useState(
    initialSystemPodsPerNode
  );
  const [userPodsPerNode, setUserPodsPerNode] = useState(
    initialUserPodsPerNode
  );

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

  const kvIntegrationToggle = () => {
    setKvIntegration((kvIntegration) => !kvIntegration);
  };

  const privateClusterToggle = () => {
    setPrivateCluster((privateCluster) => !privateCluster);
  };

  const osmEnabledToggle = () => {
    setOsmEnabled((osmEnabled) => !osmEnabled);
  };

  const containerInsightsEnabledToggle = () => {
    setContainerInsightsEnabled(
      (containerInsightsEnabled) => !containerInsightsEnabled
    );
  };

  const onChangeIngressEndpoints = (value) => {
    setIngressEndpoints(value);
  };

  const onChangeSystemPodsPerNode = (value) => {
    setSystemPodsPerNode(value);
  };

  const onChangeUserPodsPerNode = (value) => {
    setUserPodsPerNode(value);
  };

  return {
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
  };
};

export default useEndpoints;
