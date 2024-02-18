// ROLLUP_NO_REPLACE 
 const howToExplore = "{\"parsed\":{\"_path\":\"/explore-your-app/how-to-explore\",\"_dir\":\"explore-your-app\",\"_draft\":false,\"_partial\":false,\"_locale\":\"\",\"title\":\"How To Explore\",\"description\":\"\",\"body\":{\"type\":\"root\",\"children\":[{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"pods\"},\"children\":[{\"type\":\"text\",\"value\":\"Pods\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"In Module 2, the Deployment process creates a \"},{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Pod\"}]},{\"type\":\"text\",\"value\":\", which hosts your application instance. A Pod is essentially a group of one or more application containers (such as Docker or rkt), including shared storage (volumes), a unique cluster IP address, and information about how to run them (e.g., container image version or specific ports). Containers within a Pod share an IP address and port space, are always co-located and co-scheduled, and run in a shared context on the same node.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"This setup models an application-specific “logical host” and contains one or more application containers that are relatively tightly coupled. For instance, alongside a NodeJS app container, a side container that feeds the data published by the webserver might be deployed within the same Pod. Prior to the era of containers, such applications would have run on the same physical or virtual machine.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Pods remain tied to the Node where they are deployed until they are terminated (according to their restart policy) or deleted. In the event of a Node failure, identical Pods are redeployed on other available Nodes. The Pod is considered the atomic deployment unit on the Kubernetes platform.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"img\",\"props\":{\"alt\":\"Pods in Kubernetes\",\"src\":\"/asserts/module_02_first_app.svg\"},\"children\":[]}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"nodes\"},\"children\":[{\"type\":\"text\",\"value\":\"Nodes\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Nodes\"}]},{\"type\":\"text\",\"value\":\" are the worker machines in Kubernetes, which can be either VMs or physical machines, depending on the cluster. Each Node is responsible for running Pods and is managed by the Master. The Master automatically schedules Pods based on the available resources on the Nodes.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Every Kubernetes Node runs at least:\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"A \"},{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"container runtime\"}]},{\"type\":\"text\",\"value\":\" (such as containerd or CRI-O, not Docker as of recent Kubernetes versions) to pull and manage containers from a registry.\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Kubelet\"}]},{\"type\":\"text\",\"value\":\", acting as a bridge between the Kubernetes Master and the Nodes, managing the Pods and the containers running on a machine.\"}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"img\",\"props\":{\"alt\":\"Nodes in Kubernetes\",\"src\":\"/asserts/module_02_first_app.svg\"},\"children\":[]}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"kubernetes-and-container-runtimes\"},\"children\":[{\"type\":\"text\",\"value\":\"Kubernetes and Container Runtimes\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"As of Kubernetes version 1.20, direct support for Docker as a container runtime has been deprecated due to Kubernetes' use of the Container Runtime Interface (CRI). The CRI allows Kubernetes to use a variety of container runtimes without needing to integrate them directly into the Kubernetes codebase. This move towards more flexible container runtime options enables Kubernetes to leverage runtimes like \"},{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"containerd\"}]},{\"type\":\"text\",\"value\":\" and \"},{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"CRI-O\"}]},{\"type\":\"text\",\"value\":\", which are designed to be simpler and more efficient than Docker for the specific needs of Kubernetes.\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"exploring-pods-and-nodes\"},\"children\":[{\"type\":\"text\",\"value\":\"Exploring Pods and Nodes\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"To explore and manage Pods and Nodes in Kubernetes, you can use the following commands:\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"List all Pods in all namespaces:\\n\"},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-shell shiki shiki-themes github-dark github-light\",\"code\":\"kubectl get pods --all-namespaces\\n\",\"language\":\"shell\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" get\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" pods\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\" --all-namespaces\\n\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"List Pods in a specific namespace:\\n\"},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-shell shiki shiki-themes github-dark github-light\",\"code\":\"kubectl get pods -n <namespace>\\n\",\"language\":\"shell\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" get\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" pods\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\" -n\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\" <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"namespac\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"e\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Describe a specific Pod to see its details:\\n\"},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-shell shiki shiki-themes github-dark github-light\",\"code\":\"kubectl describe pod <pod-name> -n <namespace>\\n\",\"language\":\"shell\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" describe\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" pod\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\" <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"pod-nam\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"e\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\" -n\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\" <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"namespac\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"e\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"List all Nodes in the cluster:\\n\"},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-shell shiki shiki-themes github-dark github-light\",\"code\":\"kubectl get nodes\\n\",\"language\":\"shell\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" get\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" nodes\\n\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Describe a specific Node to see its details, including running Pods and available resources:\\n\"},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-shell shiki shiki-themes github-dark github-light\",\"code\":\"kubectl describe node <node-name>\\n\",\"language\":\"shell\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" describe\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" node\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\" <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"node-nam\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"e\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"style\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html.dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html .dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}\"}]}],\"toc\":{\"title\":\"\",\"searchDepth\":2,\"depth\":2,\"links\":[{\"id\":\"pods\",\"depth\":2,\"text\":\"Pods\"},{\"id\":\"nodes\",\"depth\":2,\"text\":\"Nodes\",\"children\":[{\"id\":\"kubernetes-and-container-runtimes\",\"depth\":3,\"text\":\"Kubernetes and Container Runtimes\"},{\"id\":\"exploring-pods-and-nodes\",\"depth\":3,\"text\":\"Exploring Pods and Nodes\"}]}]}},\"_type\":\"markdown\",\"_id\":\"content:4.Explore-Your-App:how-to-explore.md\",\"_source\":\"content\",\"_file\":\"4.Explore-Your-App/how-to-explore.md\",\"_extension\":\"md\"},\"hash\":\"LULwzPu7lM\"}";

export { howToExplore as default };
//# sourceMappingURL=how-to-explore.mjs.map
