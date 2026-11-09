# Cloud-native personalized learning app frontend repository

React + TypeScript frontend for the personalized learning app

Uses React, TypeScript, Vite, Docker, Nginx


## Kubernetes deployment with Helm

For setup instructions, deployment commands, and local testing with KIND, see [Helm notes](helm/HELM.md).


## Or simply run with Docker

```bash
docker build -t learning-app-ui .
docker run --rm -p 8080:80 learning-app-ui
```

(straight to http://localhost:8080)


### Step by step

- Docker uses Node.js to install dependencies and run the Vite production build

- Vite builds the React application into static HTML, CSS and JavaScript files (dist/)

- Docker copies files into an Nginx image

- Nginx serves the application on port 80 inside the container

- Docker maps container port 80 to localhost:8080

(the final image only needs Nginx, not Node.js)
