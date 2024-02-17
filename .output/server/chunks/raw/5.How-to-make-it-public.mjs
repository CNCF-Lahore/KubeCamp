// ROLLUP_NO_REPLACE 
 const _5_HowToMakeItPublic = "{\"parsed\":{\"_path\":\"/expose-your-app/how-to-make-it-public\",\"_dir\":\"expose-your-app\",\"_draft\":false,\"_partial\":false,\"_locale\":\"\",\"title\":\"How To Make It Public\",\"description\":\"\",\"body\":{\"type\":\"root\",\"children\":[{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"introduction-to-services\"},\"children\":[{\"type\":\"text\",\"value\":\"Introduction to Services\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"In Kubernetes, while Pods are assigned their own unique IP addresses within the cluster, these IPs are not accessible from outside the Kubernetes environment. Given the dynamic nature of Pods—being terminated, deleted, or replaced—there needs to be a mechanism for continuous and automatic discovery among Pods and applications. This is where \"},{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Kubernetes Services\"}]},{\"type\":\"text\",\"value\":\" come into play, acting as an abstraction layer that groups Pods and allows for their exposure to external traffic, load balancing, and service discovery.\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"key-concepts-of-services\"},\"children\":[{\"type\":\"text\",\"value\":\"Key Concepts of Services\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"External Traffic Exposure\"}]},{\"type\":\"text\",\"value\":\": Services enable the exposure of Pods to traffic coming from outside the cluster.\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Load Balancing\"}]},{\"type\":\"text\",\"value\":\": Services distribute incoming traffic among all the Pods that match its configuration, ensuring high availability and reliability.\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Service Discovery\"}]},{\"type\":\"text\",\"value\":\": Services allow for the automatic discovery of Pods within the cluster, facilitating communication between different services, like a frontend webserver and a backend database.\"}]}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"types-of-services\"},\"children\":[{\"type\":\"text\",\"value\":\"Types of Services\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"LoadBalancer\"}]},{\"type\":\"text\",\"value\":\": Offers a public IP address for the service, making it accessible from outside the Kubernetes cluster. This is commonly used in cloud environments like Google Kubernetes Engine (GKE) or AWS.\"}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"NodePort\"}]},{\"type\":\"text\",\"value\":\": Exposes the service on a specific port across all Nodes of the cluster using Network Address Translation (NAT). This type is available on all Kubernetes clusters, including Minikube, and is useful for development and testing environments.\"}]}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"exposing-pods-using-services\"},\"children\":[{\"type\":\"text\",\"value\":\"Exposing Pods Using Services\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"To expose your Pods to the outside world, you can create a Service. There are several ways to do this, depending on your requirements and the environment in which your Kubernetes cluster is running.\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"creating-a-service\"},\"children\":[{\"type\":\"text\",\"value\":\"Creating a Service\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"You can expose your application by creating a Service. This is done using the \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"className\":[]},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"text\",\"value\":\" command line. For example, to create a NodePort Service, you would use:\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-shell shiki shiki-themes github-dark github-light\",\"code\":\"kubectl expose deployment <deployment-name> --type=NodePort --name=<service-name>\\n\",\"language\":\"shell\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" expose\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" deployment\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\" <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"deployment-nam\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"e\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\" --type=NodePort\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\" --name=\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\"<\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\"service-name\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"This command creates a Service that exposes your Deployment on a specific port on each Node of the cluster.\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"finding-the-service-ip-and-port\"},\"children\":[{\"type\":\"text\",\"value\":\"Finding the Service IP and Port\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"After creating your Service, you can find the IP address and the port exposed by the Service using:\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-shell shiki shiki-themes github-dark github-light\",\"code\":\"kubectl get services/<service-name>\\n\",\"language\":\"shell\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" get\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" services/\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\"<\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"service-nam\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"e\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"This will list the details of your service, including the NodePort assigned to your service if you've used the NodePort type.\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"port-forwarding-without-ingress-or-load-balancer\"},\"children\":[{\"type\":\"text\",\"value\":\"Port Forwarding (Without Ingress or Load Balancer)\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"In cases where you don't have an Ingress controller or a LoadBalancer available, you can use port forwarding to access your application:\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-shell shiki shiki-themes github-dark github-light\",\"code\":\"kubectl port-forward services/<service-name> <local-port>:<service-port>\\n\",\"language\":\"shell\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" port-forward\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" services/\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\"<\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"service-nam\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"e\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\" <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"local-por\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"t\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\":\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\"<\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"service-por\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"t\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"This command forwards traffic from a local port on your machine to the service port on the cluster, allowing you to access the application via \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"className\":[]},\"children\":[{\"type\":\"text\",\"value\":\"localhost:<local-port>\"}]},{\"type\":\"text\",\"value\":\".\"}]},{\"type\":\"element\",\"tag\":\"h2\",\"props\":{\"id\":\"using-labels-for-organization-and-selection\"},\"children\":[{\"type\":\"text\",\"value\":\"Using Labels for Organization and Selection\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Labels are key/value pairs attached to Kubernetes objects, like Pods, which can be used for organizing and selecting subsets of objects.\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"attaching-labels\"},\"children\":[{\"type\":\"text\",\"value\":\"Attaching Labels\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Labels can be attached at creation time or added to existing objects. They are useful for organizing objects in a meaningful way, such as by environment (\"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"className\":[]},\"children\":[{\"type\":\"text\",\"value\":\"production\"}]},{\"type\":\"text\",\"value\":\", \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"className\":[]},\"children\":[{\"type\":\"text\",\"value\":\"test\"}]},{\"type\":\"text\",\"value\":\", \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"className\":[]},\"children\":[{\"type\":\"text\",\"value\":\"dev\"}]},{\"type\":\"text\",\"value\":\"), application version (\"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"className\":[]},\"children\":[{\"type\":\"text\",\"value\":\"v1.2\"}]},{\"type\":\"text\",\"value\":\", \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"className\":[]},\"children\":[{\"type\":\"text\",\"value\":\"beta\"}]},{\"type\":\"text\",\"value\":\"), or service type (\"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"className\":[]},\"children\":[{\"type\":\"text\",\"value\":\"frontend\"}]},{\"type\":\"text\",\"value\":\", \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"className\":[]},\"children\":[{\"type\":\"text\",\"value\":\"backend\"}]},{\"type\":\"text\",\"value\":\").\"}]},{\"type\":\"element\",\"tag\":\"h3\",\"props\":{\"id\":\"selecting-pods-with-services\"},\"children\":[{\"type\":\"text\",\"value\":\"Selecting Pods with Services\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"When creating a Service, you can specify a Label Selector to match the Pods that the Service should manage. This is how a Service knows which Pods to expose and balance traffic across.\"}]},{\"type\":\"element\",\"tag\":\"style\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html.dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html .dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}\"}]}],\"toc\":{\"title\":\"\",\"searchDepth\":2,\"depth\":2,\"links\":[{\"id\":\"introduction-to-services\",\"depth\":2,\"text\":\"Introduction to Services\",\"children\":[{\"id\":\"key-concepts-of-services\",\"depth\":3,\"text\":\"Key Concepts of Services\"}]},{\"id\":\"types-of-services\",\"depth\":2,\"text\":\"Types of Services\"},{\"id\":\"exposing-pods-using-services\",\"depth\":2,\"text\":\"Exposing Pods Using Services\",\"children\":[{\"id\":\"creating-a-service\",\"depth\":3,\"text\":\"Creating a Service\"},{\"id\":\"finding-the-service-ip-and-port\",\"depth\":3,\"text\":\"Finding the Service IP and Port\"},{\"id\":\"port-forwarding-without-ingress-or-load-balancer\",\"depth\":3,\"text\":\"Port Forwarding (Without Ingress or Load Balancer)\"}]},{\"id\":\"using-labels-for-organization-and-selection\",\"depth\":2,\"text\":\"Using Labels for Organization and Selection\",\"children\":[{\"id\":\"attaching-labels\",\"depth\":3,\"text\":\"Attaching Labels\"},{\"id\":\"selecting-pods-with-services\",\"depth\":3,\"text\":\"Selecting Pods with Services\"}]}]}},\"_type\":\"markdown\",\"_id\":\"content:5.Expose-Your-App:5.How-to-make-it-public.md\",\"_source\":\"content\",\"_file\":\"5.Expose-Your-App/5.How-to-make-it-public.md\",\"_extension\":\"md\"},\"hash\":\"ArQ6U7pzwL\"}";

export { _5_HowToMakeItPublic as default };
//# sourceMappingURL=5.How-to-make-it-public.mjs.map
