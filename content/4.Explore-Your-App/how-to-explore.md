## Pods

In Module 2, the Deployment process creates a **Pod**, which hosts your application instance. A Pod is essentially a group of one or more application containers (such as Docker or rkt), including shared storage (volumes), a unique cluster IP address, and information about how to run them (e.g., container image version or specific ports). Containers within a Pod share an IP address and port space, are always co-located and co-scheduled, and run in a shared context on the same node.

This setup models an application-specific “logical host” and contains one or more application containers that are relatively tightly coupled. For instance, alongside a NodeJS app container, a side container that feeds the data published by the webserver might be deployed within the same Pod. Prior to the era of containers, such applications would have run on the same physical or virtual machine.

Pods remain tied to the Node where they are deployed until they are terminated (according to their restart policy) or deleted. In the event of a Node failure, identical Pods are redeployed on other available Nodes. The Pod is considered the atomic deployment unit on the Kubernetes platform.

![Pods in Kubernetes](/asserts/module_02_first_app.svg)

## Nodes

**Nodes** are the worker machines in Kubernetes, which can be either VMs or physical machines, depending on the cluster. Each Node is responsible for running Pods and is managed by the Master. The Master automatically schedules Pods based on the available resources on the Nodes.

Every Kubernetes Node runs at least:

- A **container runtime** (such as containerd or CRI-O, not Docker as of recent Kubernetes versions) to pull and manage containers from a registry.
- **Kubelet**, acting as a bridge between the Kubernetes Master and the Nodes, managing the Pods and the containers running on a machine.

![Nodes in Kubernetes](/asserts/module_02_first_app.svg)

### Kubernetes and Container Runtimes

As of Kubernetes version 1.20, direct support for Docker as a container runtime has been deprecated due to Kubernetes' use of the Container Runtime Interface (CRI). The CRI allows Kubernetes to use a variety of container runtimes without needing to integrate them directly into the Kubernetes codebase. This move towards more flexible container runtime options enables Kubernetes to leverage runtimes like **containerd** and **CRI-O**, which are designed to be simpler and more efficient than Docker for the specific needs of Kubernetes.

### Exploring Pods and Nodes

To explore and manage Pods and Nodes in Kubernetes, you can use the following commands:

- List all Pods in all namespaces:
  ```shell
  kubectl get pods --all-namespaces
  ```
- List Pods in a specific namespace:
  ```shell
  kubectl get pods -n <namespace>
  ```
- Describe a specific Pod to see its details:
  ```shell
  kubectl describe pod <pod-name> -n <namespace>
  ```
- List all Nodes in the cluster:
  ```shell
  kubectl get nodes
  ```
- Describe a specific Node to see its details, including running Pods and available resources:
  ```shell
  kubectl describe node <node-name>
  ```

