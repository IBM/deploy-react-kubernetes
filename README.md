[![Build Status](https://travis-ci.org/IBM/deploy-react-kubernetes.svg?branch=master)](https://travis-ci.org/IBM/deploy-react-kubernetes)

# Deploy a React application on Kubernetes

Do you have a front end application that contains large amounts of duplication, handles complex states, and manages large amounts of data? 

React and Redux is the perfect Javascript library if your application is similar to the one described above. React provides a component based structure for everything included in an application and allows abstraction if needed to limit duplication. With Redux, it handles all of the state and can easily manage data in an application.

Once an application has been developed, it needs to be deployed for the rest of the world to see. There are many choices when looking for the right solution to manage and deploy your application. It can often be overwhelming when you're trying to pick the right solution.

If you're looking for a deployment tool that can provide automation, scalability and management of a deployed application, Kubernetes is the tool for you! 

An application must be packaged into a container to deploy on Kubernetes. Docker is an open source tool that is used to package the application into a container. The container is then deployed on Kubernetes for public access. Once the application is deployed, Kubernetes handles the management, scalability and automation of the deployed application.

In this Code Pattern, we will deploy a React application using Kubernetes.

This repository uses the React Javascript library alongside Redux to build out the front end of the application. The OMDb API is used to get movie information based on user input. Redux handles the data between the application and the API, as well as the state between components. Docker is used to package the application and Kubernetes is used to deploy the container.

When the reader has completed this Code Pattern, they will understand how to:
* Containerize a React application using Docker
* Deploy and manage an application using Kubernetes

## Flow

![Flow](https://media.github.ibm.com/user/1650/files/b0c988dc-31aa-11e8-867b-9558d5610cd7)

1. The user accesses the application through the web interface. The user enters a movie title into the input.  
2. The React application is rendered to the user on access.
3. The application calls the OMDb API and receives a JSON object of the response to show the user.

## Included components
* IBM Cloud Container Service: IBM Cloud Container Service manages highly available apps inside Docker containers and Kubernetes clusters on the IBM Cloud.
* Kubernetes Cluster: Create and manage your own cloud infrastructure and use Kubernetes as your container orchestration engine.

## Featured technologies
* [Node.js](https://nodejs.org/en/): An open-source JavaScript run-time environment for executing server-side JavaScript code.
* Cloud: Accessing computer and information technology resources through the Internet.
* Container Orchestration: Automating the deployment, scaling and management of containerized applications.

# Watch the video

* [Demo on Youtube](https://youtu.be/1Lq9vW3LuH8)

# Steps

## Prerequisites
1. You must get an API key from [OMDb API](http://www.omdbapi.com/) in order to get a response from the API. You will insert your API key in `/src/actions/index.js` on line 42
[OMDb API](http://www.omdbapi.com/) by Brian Fitz is licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)

2. Create an environment variable for your docker username
```
$ export docker_username="YOUR_DOCKER_USERNAME"
```

## Run locally
1. [Clone the repo](#1-clone-the-repo)
2. [Run the application](#2-run-the-application)

### 1. Clone the repo

Clone the repo locally. In a terminal, run:

```
$ git clone https://github.com/IBM/deploy-react-kubernetes
```

### 2. Run the application
1. Install [Node.js](https://nodejs.org/en/)
2. Run the following commands in a terminal: 

```
$ npm install

$ npm run build-css

$ npm run start
```

Verify app is running and working correctly.

## Run the application using Docker
1. [Build the image](#1-build-the-image)
2. [Run the image](#2-run-the-image)

## Prerequisites:
1. [Create Docker account](https://cloud.docker.com/)
 
2. [Install Docker CLI](https://docs.docker.com/install/)

3. [Retrieve and save your Docker user id](https://cloud.docker.com/)

### 1. Build the image

In a terminal, run:
```
$ docker build -t $docker_username/deploy-react-kubernetes .
```

Your image should be listed by running:

```
$ docker images
```

### 2. Run the image

In a terminal, run:

```
$ docker run -p 3000:3000 -d $docker_username/deploy-react-kubernetes
```

You can now access the application at http://localhost:3000

## Run the application on Kubernetes

1. [Build image.](#1-build-image)
2. [Deploy the application](#2-deploy-the-application)

## Prerequisites
1. [Create an account with IBM Cloud](https://console.bluemix.net/registration/)

2. [Install IBM Cloud CLI](https://console.bluemix.net/docs/cli/reference/bluemix_cli/get_started.html#getting-started)

3. Log into your IBM Cloud account
```
bx login 
```

If you have a federated ID, use bx login --sso to log in to the IBM Cloud CLI.

4. Install the Container Registry plug-in.
```
bx plugin install container-registry -r Bluemix
```

5. Install the Container Service plug-in.
```
bx plugin install IBM-Containers -r Bluemix
```

6. [Install kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl)

7. Create cluster
```
bx cs cluster-create --name YOUR_CLUSTER_NAME
```

8. Configure Kubernetes cluster
```
$ bx cs cluster-config YOUR_CLUSTER_NAME
```

Copy and paste response in CLI

9. Choose a name for your first namespace, and create that namespace. Use this namespace for the rest of the Quick Start.
```
$ bx cr namespace-add YOUR_NAMESPACE
```


### 1. Build image

Build image in the IBM Container Registry: 
```
$ bx cr build -t registry.<ibm_cloud_region>.bluemix.net/<your_namespace>/deploy-react-kubernetes .
```

### 2. Deploy the application

``` 
$ kubectl run deploy-react-kubernetes-deployment —-image=registry.<ibm_cloud_region>.bluemix.net/<your_namespace>/deploy-react-kubernetes
```

To check how many pods are running on Kubernetes run the command: 
```
kubectl get pods
```

Expose the app to the web by setting the port. Run the command:

```
$ kubectl expose deployment/deploy-react-kubernetes-deployment —-port=3000 —-type=NodePort
```

* To access your application. You would need the public IP address of your cluster and NodePort of the service.

```
# For clusters provisioned with IBM Cloud
$ bx cs workers YOUR_CLUSTER_NAME
```

```
# For details on a specific Kubernetes service
$ kubectl describe service deploy-react-kubernetes-service
```

You can now access the application at http://IP_ADDRESS:NODE_PORT

## Run the application on Kubernetes with a yaml file

Note: Follow the prerequisites in 'Run the application on Kubernetes section' before executing command below. 

```
kubectl create -f deployment.yaml
```

# Sample output

<img width="1415" alt="screen shot 2017-03-13 at 6 14 10 pm" src="https://cloud.githubusercontent.com/assets/18426780/23879083/fa0df756-0818-11e7-8569-469367b84280.png">

# Links
* [Demo on Youtube](https://youtu.be/1Lq9vW3LuH8)
* [Blog post](https://medium.com/@rizchel.a.dayao/my-journey-to-deploying-my-first-react-application-with-kubernetes-95e6d25f434d)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/basics/usage-with-react)
* [Docker](https://www.docker.com/)
* [Kubernetes](https://kubernetes.io/)

# Learn more

* **Container Orchestration Code Patterns**: Enjoyed this Code Pattern? Check out our other [Container Orchestration Code Patterns](https://developer.ibm.com/code/technologies/container-orchestration/).
* **Kubernetes on IBM Cloud**: Deliver your apps with the combined power of [Kubernetes and Docker on IBM Cloud](https://www.ibm.com/cloud/container-service)

# License
[Apache 2.0](LICENSE)
