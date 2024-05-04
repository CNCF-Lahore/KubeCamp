# Kubernetes Cheat Sheet (Updated for 2024)

A comprehensive cheat sheet for Kubernetes commands with the latest updates.

## Kubectl Alias

To make `kubectl` command shorter and faster to type, you can create an alias.

**Linux**
```bash
alias k=kubectl
```

**Windows PowerShell**
```powershell
Set-Alias -Name k -Value kubectl
```

## Cluster Info

- **Get clusters**
  ```bash
  kubectl config get-clusters
  ```

- **Get cluster info**
  ```bash
  kubectl cluster-info
  ```

## Contexts

Contexts manage the connection parameters for clusters, namespaces, and authentication.

- **List all contexts**
  ```bash
  kubectl config get-contexts
  ```

- **Get the current context**
  ```bash
  kubectl config current-context
  ```

- **Switch the current context**
  ```bash
  kubectl config use-context <context-name>
  ```

- **Set the default namespace for the current context**
  ```bash
  kubectl config set-context --current --namespace=<namespace-name>
  ```

For switching between contexts quickly, consider using [kubectx](https://github.com/ahmetb/kubectx).

## Get Commands

Common `get` commands to retrieve resources.

```bash
kubectl get all
kubectl get namespaces
kubectl get configmaps
kubectl get nodes
kubectl get pods
kubectl get rs
kubectl get svc <service-name>
kubectl get endpoints <endpoint-name>
```

Additional options:

- `-o wide`: Show more information.
- `--watch` or `-w`: Watch for changes in real-time.

## Namespaces

- **Specify namespace for a command**
  ```bash
  kubectl get pods --namespace=<namespace-name>
  ```

To switch namespaces for commands without specifying each time, consider using [kubens](https://github.com/ahmetb/kubectx/blob/master/kubens).

## Labels and Selectors

- **Get pods showing labels**
  ```bash
  kubectl get pods --show-labels
  ```

- **Filter pods by label**
  ```bash
  kubectl get pods -l environment=production,tier!=frontend
  kubectl get pods -l 'environment in (production,test),tier notin (frontend,backend)'
  ```

## Describe and Delete Commands

Detailed information and deletion of resources.

- **Describe resource**
  ```bash
  kubectl describe <resource-type> <resource-name>
  ```

- **Delete resource**
  ```bash
  kubectl delete <resource-type> <resource-name>
  ```

- **Force delete a pod immediately**
  ```bash
  kubectl delete pod <pod-name> --grace-period=0 --force
  ```

## Create vs Apply

`kubectl apply` is recommended for most operations as it applies changes to resources while respecting existing configurations.

- **Create a deployment**
  ```bash
  kubectl create deployment <name> --image=<image>
  ```

- **Apply a configuration from a file**
  ```bash
  kubectl apply -f <filename.yaml>
  ```

## Export YAML for New and Existing Objects

- **Generate YAML for a new pod (dry run)**
  ```bash
  kubectl run <pod-name> --image=<image> --dry-run=client -o yaml > <pod-name>.yaml
  ```

- **Export YAML of an existing object**
  ```bash
  kubectl get <resource-type> <resource-name> -o yaml > <file-name>.yaml
  ```

## Logs and Debugging

- **Tail logs from pods**
  ```bash
  kubectl logs -f <pod-name>
  ```

- **Get logs from a previously terminated container**
  ```bash
  kubectl logs <pod-name> --previous
  ```

## Port Forward

Directly access applications or services from your local machine.

```bash
kubectl port-forward <type/name> <local-port>:<pod-port>
```

## Scaling and Autoscaling

- **Manually scale a deployment**
  ```bash
  kubectl scale deployment <deployment-name> --replicas=<num-replicas>
  ```

- **Autoscale a deployment**
  ```bash
  kubectl autoscale deployment <deployment-name> --min=<min-pods> --max=<max-pods> --cpu-percent=<target-CPU-utilization

>
  ```

## Rollouts and Versioning

Manage deployment rollouts.

- **Check rollout status**
  ```bash
  kubectl rollout status deployment/<deployment-name>
  ```

- **View rollout history**
  ```bash
  kubectl rollout history deployment/<deployment-name>
  ```

- **Rollback to a previous revision**
  ```bash
  kubectl rollout undo deployment/<deployment-name> --to-revision=<revision>
  ```
