// ROLLUP_NO_REPLACE 
 const _2_Lab = "{\"parsed\":{\"_path\":\"/explore-your-app/lab\",\"_dir\":\"explore-your-app\",\"_draft\":false,\"_partial\":false,\"_locale\":\"\",\"title\":\"lab02: Exploring Pods and Nodes\",\"description\":\"When working with Kubernetes, managing and exploring Pods and Nodes is crucial. Here's a quick guide on using kubectl commands for these tasks:\",\"body\":{\"type\":\"root\",\"children\":[{\"type\":\"element\",\"tag\":\"h1\",\"props\":{\"id\":\"lab02-exploring-pods-and-nodes\"},\"children\":[{\"type\":\"text\",\"value\":\"lab02: Exploring Pods and Nodes\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"When working with Kubernetes, managing and exploring Pods and Nodes is crucial. Here's a quick guide on using kubectl commands for these tasks:\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Pods\"}]},{\"type\":\"text\",\"value\":\":\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Listing Pods Across All Namespaces\"}]},{\"type\":\"text\",\"value\":\": To see every Pod running across all namespaces in your cluster, use:\\n\"},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-shell shiki shiki-themes github-dark github-light\",\"code\":\"kubectl get pods --all-namespaces\\n\",\"language\":\"shell\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" get\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" pods\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\" --all-namespaces\\n\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Listing Pods Within a Specific Namespace\"}]},{\"type\":\"text\",\"value\":\": If you want to focus on Pods within a particular namespace, modify your command like so:\\n\"},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-shell shiki shiki-themes github-dark github-light\",\"code\":\"kubectl get pods -n <namespace>\\n\",\"language\":\"shell\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" get\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" pods\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\" -n\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\" <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"namespac\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"e\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Describing a Pod\"}]},{\"type\":\"text\",\"value\":\": For detailed information about a specific Pod, including its status and events, use the describe command:\\n\"},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-shell shiki shiki-themes github-dark github-light\",\"code\":\"kubectl describe pod <pod-name> -n <namespace>\\n\",\"language\":\"shell\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" describe\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" pod\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\" <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"pod-nam\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"e\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#79B8FF;--shiki-default:#005CC5\"},\"children\":[{\"type\":\"text\",\"value\":\" -n\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\" <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"namespac\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"e\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Nodes\"}]},{\"type\":\"text\",\"value\":\":\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Listing All Nodes\"}]},{\"type\":\"text\",\"value\":\": To get a list of all Nodes in your cluster, along with their status, use:\\n\"},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-shell shiki shiki-themes github-dark github-light\",\"code\":\"kubectl get nodes\\n\",\"language\":\"shell\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" get\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" nodes\\n\"}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Describing a Node\"}]},{\"type\":\"text\",\"value\":\": For a deep dive into a specific Node's details, including the Pods running on it and its available resources, use:\\n\"},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-shell shiki shiki-themes github-dark github-light\",\"code\":\"kubectl describe node <node-name>\\n\",\"language\":\"shell\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" describe\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" node\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\" <\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\"node-nam\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#E1E4E8;--shiki-default:#24292E\"},\"children\":[{\"type\":\"text\",\"value\":\"e\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#F97583;--shiki-default:#D73A49\"},\"children\":[{\"type\":\"text\",\"value\":\">\\n\"}]}]}]}]}]}]},{\"type\":\"element\",\"tag\":\"style\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html.dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html .dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}\"}]}],\"toc\":{\"title\":\"\",\"searchDepth\":2,\"depth\":2,\"links\":[]}},\"_type\":\"markdown\",\"_id\":\"content:4.Explore-Your-App:2.Lab.md\",\"_source\":\"content\",\"_file\":\"4.Explore-Your-App/2.Lab.md\",\"_extension\":\"md\"},\"hash\":\"j0hHgucMSd\"}";

export { _2_Lab as default };
//# sourceMappingURL=2.Lab2.mjs.map
