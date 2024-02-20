// ROLLUP_NO_REPLACE 
 const _1_CreatingCluster = "{\"parsed\":{\"_path\":\"/introduction-to-cluster/creating-cluster\",\"_dir\":\"introduction-to-cluster\",\"_draft\":false,\"_partial\":false,\"_locale\":\"\",\"title\":\"Introduction to Kubernetes!\",\"description\":\"\",\"body\":{\"type\":\"root\",\"children\":[{\"type\":\"element\",\"tag\":\"h1\",\"props\":{\"id\":\"introduction-to-kubernetes\"},\"children\":[{\"type\":\"text\",\"value\":\"Introduction to Kubernetes!\"}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"what-is-kubernetes\"},\"children\":[{\"type\":\"text\",\"value\":\"What is Kubernetes?\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Kubernetes, often abbreviated as K8s (with \\\"8\\\" representing the eight letters that are omitted), is an open-source platform designed to automate deploying, scaling, and operating application containers. It groups containers that make up an application into logical units for easy management and discovery. Kubernetes is built to run across a cluster of machines, providing a high level of availability.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Before you begin, make sure you meet the following requirements:\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"GitHub Account\"}]},{\"type\":\"text\",\"value\":\": If you do not have a GitHub account, please \"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\":target\":\"_blank\",\"href\":\"https://github.com/join\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"create a free account\"}]},{\"type\":\"text\",\"value\":\" before starting with the sandbox. This is essential for accessing the Kubernetes Sandbox environment.\"}]}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"activate-your-kubernetes-sandbox\"},\"children\":[{\"type\":\"text\",\"value\":\"Activate Your Kubernetes Sandbox\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"To dive into the hands-on experience with Kubernetes, activate your Kubernetes Sandbox using GitHub Codespaces by clicking the button below:\"}]},{\"type\":\"element\",\"tag\":\"button-link\",\"props\":{\":blank\":\"true\",\"href\":\"https://github.com/codespaces/new?repository=my-repo&container=my-container&skip_quickstart=true&machine=standardLinux32gb&repo=746868415&ref=main&devcontainer_path=.devcontainer%2Fdevcontainer.json&geo=UsEast\",\"icon\":\"logos:kubernetes\",\"size\":\"small\"},\"children\":[{\"type\":\"text\",\"value\":\"Kubernetes Sanbox\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Once the terminal is ready, please enter the following command so the Kubernetes cluster and node can be completely set up. For your knowledge, we have added a sample webpages.\"}]},{\"type\":\"element\",\"tag\":\"terminal\",\"props\":{\"content\":\"make all\"},\"children\":[]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"sit-back-and-relax-while-your-lab-is-creating\"},\"children\":[{\"type\":\"text\",\"value\":\"Sit Back and Relax While Your Lab is Creating\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"As you embark on this journey, remember, setting up a Kubernetes cluster can take a few moments. So, please, sit back and relax while your lab environment is being prepared.\"}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"understanding-the-kubernetes-cluster\"},\"children\":[{\"type\":\"text\",\"value\":\"Understanding the Kubernetes Cluster\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"A Kubernetes cluster consists of two main components:\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Master\"}]},{\"type\":\"text\",\"value\":\": The brain behind the operation, coordinating the cluster.\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Nodes\"}]},{\"type\":\"text\",\"value\":\": The workers, running your applications.\"}]}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"cluster-diagram\"},\"children\":[{\"type\":\"text\",\"value\":\"Cluster Diagram\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"img\",\"props\":{\"alt\":\"Alt text\",\"src\":\"https://raw.githubusercontent.com/CNCF-Lahore/Kubernetes-Bootcamp/main/asserts/module_01_cluster.svg\"},\"children\":[]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"This diagram illustrates how the master and nodes interact within a Kubernetes cluster.\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"dive-deeper-into-the-components\"},\"children\":[{\"type\":\"text\",\"value\":\"Dive Deeper into the Components\"}]},{\"type\":\"element\",\"tag\":\"h4\",\"props\":{\"id\":\"the-master\"},\"children\":[{\"type\":\"text\",\"value\":\"The Master\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"The master is responsible for managing the cluster. It makes decisions about where to run applications based on resource availability and other scheduling criteria. It also handles scaling and updates to ensure the cluster operates smoothly.\"}]},{\"type\":\"element\",\"tag\":\"h4\",\"props\":{\"id\":\"nodes\"},\"children\":[{\"type\":\"text\",\"value\":\"Nodes\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"A node can be a virtual or physical machine, serving as the workhorse that runs your applications. Each node has the necessary tools to manage container operations, such as Docker, and is managed by the master. Nodes communicate with the master via the Kubernetes API, which the master exposes.\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"why-kubernetes\"},\"children\":[{\"type\":\"text\",\"value\":\"Why Kubernetes?\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Kubernetes abstracts the hardware infrastructure, allowing applications to run on any node within the cluster without needing to be tied to specific machines. This flexibility significantly simplifies deploying, managing, and scaling applications.\"}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"getting-started\"},\"children\":[{\"type\":\"text\",\"value\":\"Getting Started\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"For development purposes, \"},{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"minikube\"}]},{\"type\":\"text\",\"value\":\" is a recommended tool. It simplifies the process of setting up a Kubernetes cluster by creating a VM on your local machine that hosts a single-node cluster. Minikube supports Linux, macOS, and Windows, offering an accessible way to start with Kubernetes. \"},{\"type\":\"element\",\"tag\":\"em\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Guess what we are using MiniKube with GitHubCodespaces for Kubernetes Sandbox.\"}]}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"the-name-kubernetes\"},\"children\":[{\"type\":\"text\",\"value\":\"The Name \\\"Kubernetes\\\"\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Originating from Greek, Kubernetes means \\\"helmsman\\\" or \\\"pilot,\\\" highlighting its role in guiding and managing containerized applications.\"}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"ready-set-go\"},\"children\":[{\"type\":\"text\",\"value\":\"Ready, Set, Go!\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Now that you have a basic understanding of Kubernetes and its components, it's time to dive into the practical side.\"}]}],\"toc\":{\"title\":\"\",\"searchDepth\":2,\"depth\":2,\"links\":[{\"id\":\"what-is-kubernetes\",\"depth\":2,\"text\":\"What is Kubernetes?\",\"children\":[{\"id\":\"activate-your-kubernetes-sandbox\",\"depth\":3,\"text\":\"Activate Your Kubernetes Sandbox\"},{\"id\":\"sit-back-and-relax-while-your-lab-is-creating\",\"depth\":3,\"text\":\"Sit Back and Relax While Your Lab is Creating\"}]},{\"id\":\"understanding-the-kubernetes-cluster\",\"depth\":2,\"text\":\"Understanding the Kubernetes Cluster\",\"children\":[{\"id\":\"cluster-diagram\",\"depth\":3,\"text\":\"Cluster Diagram\"},{\"id\":\"dive-deeper-into-the-components\",\"depth\":3,\"text\":\"Dive Deeper into the Components\"},{\"id\":\"why-kubernetes\",\"depth\":3,\"text\":\"Why Kubernetes?\"}]},{\"id\":\"getting-started\",\"depth\":2,\"text\":\"Getting Started\",\"children\":[{\"id\":\"the-name-kubernetes\",\"depth\":3,\"text\":\"The Name \\\"Kubernetes\\\"\"}]},{\"id\":\"ready-set-go\",\"depth\":2,\"text\":\"Ready, Set, Go!\"}]}},\"_type\":\"markdown\",\"_id\":\"content:2.introduction-to-cluster:1.Creating-Cluster.md\",\"_source\":\"content\",\"_file\":\"2.introduction-to-cluster/1.Creating-Cluster.md\",\"_extension\":\"md\"},\"hash\":\"EhY7DjyOCn\"}";

export { _1_CreatingCluster as default };
//# sourceMappingURL=1.Creating-Cluster.mjs.map