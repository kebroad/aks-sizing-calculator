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

  const environmentMultiplier =
    environments.length === 0
      ? 1
      : environments.reduce(
          (total, environment) => total + environment.replicas,
          0
        );
  const totalUserDeploymentIps = deployments.reduce((total, deployment) => {
    return deployment.type === "user"
      ? total + environmentMultiplier * deployment.replicas
      : total;
  }, 0);
  const totalSystemDeploymentIps = deployments.reduce((total, deployment) => {
    return deployment.type === "system" ? total + deployment.replicas : total;
  }, 0);
  let userNodes =
    userPodsPerNode === 0
      ? 0
      : Math.ceil(totalUserDeploymentIps / userPodsPerNode);
  let systemNodes =
    userPodsPerNode === 0
      ? Math.ceil(
          (totalSystemDeploymentIps + totalUserDeploymentIps) /
            systemPodsPerNode
        )
      : Math.ceil(totalSystemDeploymentIps / systemPodsPerNode);
  let totalNodes = userNodes + systemNodes;
  const totalDeploymentIps = totalUserDeploymentIps + totalSystemDeploymentIps;
  const totalDaemonsetIps = totalNodes * daemonsets.length;
  const privateClusterIp = privateCluster ? 1 : 0;
  const ingressControllerIps = parseInt(ingressEndpoints);
  let totalIpsUsed =
    totalDeploymentIps +
    totalDaemonsetIps +
    privateClusterIp +
    ingressControllerIps +
    totalNodes;
  let totalIpsReserved =
    userNodes * userPodsPerNode + systemNodes * systemPodsPerNode + totalNodes;
  while (totalIpsUsed > totalIpsReserved) {
    if (userPodsPerNode === 0) {
      systemNodes = systemNodes + 1;
    } else {
      userNodes = userNodes + 1;
    }
    totalNodes = userNodes + systemNodes;
    totalIpsReserved =
      userNodes * userPodsPerNode +
      systemNodes * systemPodsPerNode +
      totalNodes;
  }
  const cidrNumber = Math.floor(32 - Math.log2(totalIpsReserved + 5));

  const addDeploymentHandler = (deployment) => {
    setDeployments((deployments) => {
      const newDeployment = deployment.id
        ? deployment
        : {
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
        (item) => item.id !== deployment.id
      );
      return newDeployments;
    });
  };

  const addDaemonsetHandler = (daemonset) => {
    setDaemonsets((daemonsets) => {
      const newDaemonset = daemonset.id
        ? daemonset
        : {
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
        (item) => item.id !== daemonset.id
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
        (item) => item.id !== environment.id
      );
      return newEnvironments;
    });
  };

  const kvIntegrationToggle = () => {
    const workloads = [
      {
        name: "aks-secrets-store-csi-driver",
        type: "system",
        id: "aks-secrets-store-csi-driver",
      },
      {
        name: "aks-secrets-store-provider-azure",
        type: "system",
        id: "aks-secrets-store-provider-azure",
      },
    ];
    setKvIntegration((kvIntegration) => {
      kvIntegration = !kvIntegration;
      if (kvIntegration === true) {
        // add workloads
        workloads.forEach((workload) => {
          addDaemonsetHandler(workload);
        });
      } else {
        workloads.forEach((workload) => {
          removeDaemonsetHandler(workload);
        });
      }

      return kvIntegration;
    });
  };

  const privateClusterToggle = () => {
    setPrivateCluster((privateCluster) => !privateCluster);
  };

  const osmEnabledToggle = () => {
    const workloads = [
      {
        name: "osm-bootstrap",
        type: "system",
        replicas: 1,
        id: "osm-bootstrap",
      },
      {
        name: "osm-controller",
        type: "system",
        replicas: 2,
        id: "osm-controller",
      },
      {
        name: "osm-injector",
        type: "system",
        replicas: 2,
        id: "osm-injector",
      },
    ];
    setOsmEnabled((osmEnabled) => {
      osmEnabled = !osmEnabled;
      if (osmEnabled === true) {
        workloads.forEach((workload) => {
          addDeploymentHandler(workload);
        });
      } else {
        workloads.forEach((workload) => {
          removeDeploymentHandler(workload);
        });
      }
      return osmEnabled;
    });
  };

  const containerInsightsEnabledToggle = () => {
    const daemonsetWorkloads = [
      {
        name: "omsagent",
        type: "system",
        id: "omsagent",
      },
    ];
    const deploymentWorkloads = [
      {
        name: "omsagent-rs",
        type: "system",
        replicas: 1,
        id: "omsagent-rs",
      },
    ];
    setContainerInsightsEnabled((containerInsightsEnabled) => {
      containerInsightsEnabled = !containerInsightsEnabled;
      if (containerInsightsEnabled === true) {
        // add daemonsetWorkoads
        daemonsetWorkloads.forEach((workload) => {
          addDaemonsetHandler(workload);
        });
        deploymentWorkloads.forEach((workload) => {
          addDeploymentHandler(workload);
        });
      } else {
        daemonsetWorkloads.forEach((workload) => {
          removeDaemonsetHandler(workload);
        });
        deploymentWorkloads.forEach((workload) => {
          removeDeploymentHandler(workload);
        });
      }
      return containerInsightsEnabled;
    });
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

  const exportCSV = () => {
    let data = [];
    // Remove Ids from the CSV
    const deploymentsWithoutIds = deployments.map(
      ({ id, ...keepAttrs }) => keepAttrs
    );
    const deploymentTitle = ["Deployments:"];
    data.push(deploymentTitle);

    const deploymentFields =
      deployments.length === 0 ? [""] : Object.keys(deploymentsWithoutIds[0]);
    data.push(deploymentFields);
    const deploymentValues = deploymentsWithoutIds.reduce(
      (list, deploymentItem) => {
        list.push(Object.values(deploymentItem));
        return list;
      },
      []
    );
    data = [...data, ...deploymentValues];

    // Daemonsets
    data.push([""]);
    const daemonsetsWithoutIds = daemonsets.map(
      ({ id, ...keepAttrs }) => keepAttrs
    );
    const daemonsetTitle = ["Daemonsets:"];
    data.push(daemonsetTitle);
    const daemonsetFields =
      daemonsets.length === 0 ? [""] : Object.keys(daemonsetsWithoutIds[0]);
    data.push(daemonsetFields);
    const daemonsetValues = daemonsetsWithoutIds.reduce(
      (list, daemonsetItem) => {
        list.push(Object.values(daemonsetItem));
        return list;
      },
      []
    );
    data = [...data, ...daemonsetValues];

    // Environments
    data.push([""]);
    const environmentsWithoutIds = environments.map(
      ({ id, ...keepAttrs }) => keepAttrs
    );
    const environmentTitle = ["Environments:"];
    data.push(environmentTitle);
    const environmentFields =
      environments.length === 0 ? [""] : Object.keys(environmentsWithoutIds[0]);
    data.push(environmentFields);
    const environmentValues = environmentsWithoutIds.reduce(
      (list, environmentItem) => {
        list.push(Object.values(environmentItem));
        return list;
      },
      []
    );
    data = [...data, ...environmentValues];

    //Additional
    data.push([""]);
    const additionalTitle = ["Additional:"];
    data.push(additionalTitle);
    const kvIntegrationSection = ["Key Vault CSI Integration", kvIntegration];
    data.push(kvIntegrationSection);
    const privateClusterSection = ["Private Cluster:", privateCluster];
    data.push(privateClusterSection);
    const osmEnabledSection = ["OSM Enabled", osmEnabled];
    data.push(osmEnabledSection);
    const containerInsightsEnabledSection = [
      "Container Insights Enabled",
      containerInsightsEnabled,
    ];
    data.push(containerInsightsEnabledSection);
    const ingressControllerIpsSection = [
      "Ingress Controller/AGIC Endpoints:",
      ingressControllerIps,
    ];
    data.push(ingressControllerIpsSection);
    const systemPodsPerNodeSection = [
      "System Pool Pods/Node",
      systemPodsPerNode,
    ];
    data.push(systemPodsPerNodeSection);
    const userPodsPerNodeSection = ["User Pool Pods/Node", userPodsPerNode];
    data.push(userPodsPerNodeSection);

    //Results
    data.push([""]);
    const resultsTitle = ["Results"];
    data.push(resultsTitle);
    const systemNodesSection = ["System Nodes", systemNodes];
    data.push(systemNodesSection);
    const userNodesSection = ["User Nodes", userNodes];
    data.push(userNodesSection);
    const totalIpsUsedSection = ["Total IPs Used:", totalIpsUsed];
    data.push(totalIpsUsedSection);
    const totalIpsReservedSection = ["Total IPs Needed:", totalIpsReserved];
    data.push(totalIpsReservedSection);
    const cidrNumberSection = ["Subnet Size:", `/${cidrNumber}`];
    data.push(cidrNumberSection);

    return data;
    return "";
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
  };
};

export default useEndpoints;
