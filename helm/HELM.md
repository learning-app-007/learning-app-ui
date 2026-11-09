# Helm notes

Helm is a package manager for Kubernetes. It uses Helm Charts to organize, template, and manage Kubernetes resource configurations.

A Helm Chart contains templates for Kubernetes resources (Deployments, Services, ConfigMaps, etc.) and configurable values that are inserted into those templates.

Helm allows us to deploy the same application to different environments without duplicating Kubernetes YAML files.

## Info about `learning-app-ui` Helm Chart

It describes how Kubernetes should deploy the frontend Docker image.

- `Chart.yaml` - metadata about the Helm Chart.
- `values.yaml` - configurable settings, such as the Docker image, replicas, and ports.
- `templates/deployment.yaml` - Deployment: Defines the frontend Pods and Docker image, managed by Kubernetes. (tells the cluster which container to run, how many copies to maintain, and how to manage them)
- `templates/service.yaml` - Service: Provides a stable network endpoint to reach those Pods by their labels. (stable address and traffic routing to the appropriate Pods)
- `templates/configmap.yaml` - ConfigMap: Supplies application configuration separately from the container image. (configuration mounted directlyy into Pods, independent of the Docker image)
- `_helpers.tpl` - Helm's way to define reusable template fragments that other Helm templates can call.

## Helm commands

```bash
helm lint ./helm
helm template learning-app-ui ./helm
helm upgrade --install learning-app-ui ./helm
```

- `helm lint` checks the Chart for common problems.
- `helm template` generates Kubernetes YAML without deploying it.
- `helm upgrade --install` installs or updates the application in a Kubernetes cluster.

## Local testing with Kubernetes IN Docker

Use KIND to run Kubernetes locally through Docker.

```bash
kind create cluster --name learning-app
docker build -t learning-app-ui:latest .
kind load docker-image learning-app-ui:latest --name learning-app
helm upgrade --install learning-app-ui ./helm
```

Then open frontend through port forwarding (to http://localhost:8080):

```bash
kubectl port-forward service/learning-app-ui 8080:80
```
