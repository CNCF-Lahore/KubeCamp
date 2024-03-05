// ROLLUP_NO_REPLACE 
 const _2_Lab = "{\"parsed\":{\"_path\":\"/update-your-app/lab\",\"_dir\":\"update-your-app\",\"_draft\":false,\"_partial\":false,\"_locale\":\"\",\"title\":\"Lab 06: Update Your Application\",\"description\":\"Welcome back! If you've been with us since Lab 01, you're already familiar with running two pods as part of our application deployment. But what happens when we need to update our application to a new version without causing downtime or service disruption? This scenario is common in projects where maintaining low latency, fault tolerance, and high availability is crucial. It's also a great opportunity to familiarize yourself with deployment strategies like blue/green and canary releases.\",\"body\":{\"type\":\"root\",\"children\":[{\"type\":\"element\",\"tag\":\"h1\",\"props\":{\"id\":\"lab-06-update-your-application\"},\"children\":[{\"type\":\"text\",\"value\":\"Lab 06: Update Your Application\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Welcome back! If you've been with us since Lab 01, you're already familiar with running two pods as part of our application deployment. But what happens when we need to update our application to a new version without causing downtime or service disruption? This scenario is common in projects where maintaining low latency, fault tolerance, and high availability is crucial. It's also a great opportunity to familiarize yourself with deployment strategies like blue/green and canary releases.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"In this lab, we'll be taking a practical approach to updating our application. Let's imagine we've tasked one of our developers with upgrading our Node.js application from version 1 to version 2.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Fortunately, we've prepared the new version of the app in advance to streamline the update process. To roll out the updated version of our Node.js app, execute the following commands:\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-bash shiki shiki-themes github-dark github-light\",\"code\":\"kubectl get deployment\\nkubectl set image deployment/nodejs-app nodejs-app=ghcr.io/cncf-lahore/nodejs-app:v2\\n\",\"language\":\"bash\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" get\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" deployment\\n\"}]}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":2},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" set\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" image\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" deployment/nodejs-app\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" nodejs-app=ghcr.io/cncf-lahore/nodejs-app:v2\\n\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"To monitor the progress of the rollout and ensure it's proceeding as expected, you can check the status using:\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-sh shiki shiki-themes github-dark github-light\",\"code\":\"kubectl rollout status deployment/nodejs-app\\n\",\"language\":\"sh\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" rollout\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" status\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" deployment/nodejs-app\\n\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Oops!\"}]},{\"type\":\"text\",\"value\":\" There's been a hiccup. It seems the development team accidentally configured the application to use port 90 instead of the standard port 80, causing the application to become inaccessible. To quickly revert this change and restore the application to its previous state, you can use the following command:\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":\"language-bash shiki shiki-themes github-dark github-light\",\"code\":\"kubectl rollout undo deployment/nodejs-app\\n\",\"language\":\"bash\",\"meta\":\"\",\"style\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"class\":\"line\",\"line\":1},\"children\":[{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#B392F0;--shiki-default:#6F42C1\"},\"children\":[{\"type\":\"text\",\"value\":\"kubectl\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" rollout\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" undo\"}]},{\"type\":\"element\",\"tag\":\"span\",\"props\":{\"style\":\"--shiki-dark:#9ECBFF;--shiki-default:#032F62\"},\"children\":[{\"type\":\"text\",\"value\":\" deployment/nodejs-app\\n\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Just like that, our application is back online, running smoothly as if nothing happened—all within a matter of seconds.\"}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"img\",\"props\":{\"alt\":\"ALTIMAGE\",\"src\":\"https://github.com/CNCF-Lahore/Kubernetes-Bootcamp/blob/main/asserts/ks36.png?raw=true\"},\"children\":[]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"This lab demonstrates the power of Kubernetes' rolling updates and rollbacks, allowing us to update and maintain our applications with minimal impact on availability. Stay tuned for more labs where we'll dive deeper into Kubernetes' features and best practices.\"}]},{\"type\":\"element\",\"tag\":\"list\",\"props\":{\"type\":\"success\"},\"children\":[{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Congratulations, you have now completed all the labs. Please complete the quiz and let us know how we can improve the Bootcamp. Your feedback is highly appreciated..\"}]}]}]},{\"type\":\"element\",\"tag\":\"style\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html.dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html .dark .shiki span {color: var(--shiki-dark);background: var(--shiki-dark-bg);font-style: var(--shiki-dark-font-style);font-weight: var(--shiki-dark-font-weight);text-decoration: var(--shiki-dark-text-decoration);}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}\"}]}],\"toc\":{\"title\":\"\",\"searchDepth\":2,\"depth\":2,\"links\":[]}},\"_type\":\"markdown\",\"_id\":\"content:7.Update-Your-App:2.Lab.md\",\"_source\":\"content\",\"_file\":\"7.Update-Your-App/2.Lab.md\",\"_extension\":\"md\"},\"hash\":\"AuIrpR2NzQ\"}";

export { _2_Lab as default };
//# sourceMappingURL=2.Lab5.mjs.map
