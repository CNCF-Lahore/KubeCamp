// ROLLUP_NO_REPLACE 
 const _1_howToExplore = "{\"parsed\":{\"_path\":\"/explore-your-app/how-to-explore\",\"_dir\":\"explore-your-app\",\"_draft\":false,\"_partial\":false,\"_locale\":\"\",\"title\":\"Explore Your App\",\"description\":\"\",\"body\":{\"type\":\"root\",\"children\":[{\"type\":\"element\",\"tag\":\"h1\",\"props\":{\"id\":\"explore-your-app\"},\"children\":[{\"type\":\"text\",\"value\":\"Explore Your App\"}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"pods\"},\"children\":[{\"type\":\"text\",\"value\":\"Pods\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"In Module 2, the Deployment process creates a \"},{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Pod\"}]},{\"type\":\"text\",\"value\":\", which hosts your application instance. A Pod is essentially a group of one or more application containers (such as Docker or rkt), including shared storage (volumes), a unique cluster IP address, and information about how to run them (e.g., container image version or specific ports). Containers within a Pod share an IP address and port space, are always co-located and co-scheduled, and run in a shared context on the same node.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"This setup models an application-specific “logical host” and contains one or more application containers that are relatively tightly coupled. For instance, alongside a NodeJS app container, a side container that feeds the data published by the webserver might be deployed within the same Pod. Prior to the era of containers, such applications would have run on the same physical or virtual machine.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Pods remain tied to the Node where they are deployed until they are terminated (according to their restart policy) or deleted. In the event of a Node failure, identical Pods are redeployed on other available Nodes. The Pod is considered the atomic deployment unit on the Kubernetes platform.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"img\",\"props\":{\"alt\":\"Pods in Kubernetes\",\"src\":\"https://raw.githubusercontent.com/CNCF-Lahore/Kubernetes-Bootcamp/main/asserts/module_03_pods.svg\"},\"children\":[]}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"nodes\"},\"children\":[{\"type\":\"text\",\"value\":\"Nodes\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Nodes\"}]},{\"type\":\"text\",\"value\":\" are the worker machines in Kubernetes, which can be either VMs or physical machines, depending on the cluster. Each Node is responsible for running Pods and is managed by the Master. The Master automatically schedules Pods based on the available resources on the Nodes.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Every Kubernetes Node runs at least:\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"A \"},{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"container runtime\"}]},{\"type\":\"text\",\"value\":\" (such as containerd or CRI-O, not Docker as of recent Kubernetes versions) to pull and manage containers from a registry.\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Kubelet\"}]},{\"type\":\"text\",\"value\":\", acting as a bridge between the Kubernetes Master and the Nodes, managing the Pods and the containers running on a machine.\"}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"img\",\"props\":{\"alt\":\"Nodes in Kubernetes\",\"src\":\"https://raw.githubusercontent.com/CNCF-Lahore/Kubernetes-Bootcamp/main/asserts/module_03_nodes.svg\"},\"children\":[]}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"kubernetes-and-container-runtimes\"},\"children\":[{\"type\":\"text\",\"value\":\"Kubernetes and Container Runtimes\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"As of Kubernetes version 1.20, direct support for Docker as a container runtime has been deprecated due to Kubernetes' use of the Container Runtime Interface (CRI). The CRI allows Kubernetes to use a variety of container runtimes without needing to integrate them directly into the Kubernetes codebase. This move towards more flexible container runtime options enables Kubernetes to leverage runtimes like \"},{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"containerd\"}]},{\"type\":\"text\",\"value\":\" and \"},{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"CRI-O\"}]},{\"type\":\"text\",\"value\":\", which are designed to be simpler and more efficient than Docker for the specific needs of Kubernetes.\"}]}],\"toc\":{\"title\":\"\",\"searchDepth\":2,\"depth\":2,\"links\":[{\"id\":\"pods\",\"depth\":2,\"text\":\"Pods\"},{\"id\":\"nodes\",\"depth\":2,\"text\":\"Nodes\",\"children\":[{\"id\":\"kubernetes-and-container-runtimes\",\"depth\":3,\"text\":\"Kubernetes and Container Runtimes\"}]}]}},\"_type\":\"markdown\",\"_id\":\"content:4.Explore-Your-App:1.how-to-explore.md\",\"_source\":\"content\",\"_file\":\"4.Explore-Your-App/1.how-to-explore.md\",\"_extension\":\"md\"},\"hash\":\"Jk8maVwP11\"}";

export { _1_howToExplore as default };
//# sourceMappingURL=1.how-to-explore.mjs.map
