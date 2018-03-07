# Deploy a React application on Kubernetes

In this Code Pattern, we will deploy a React application using Kubernetes.

There are many choices when looking for the right solution to manage and deploy our applications. It can often be overwhelming when we're trying to pick the right solution. One of our many choices is Kubernetes. This pattern will take you through how to get a front end application deployed on Kubernetes. After implementing the code, you will have the knowledge to deploy your own applications on Kubernetes. 

This repository uses the React JavaScript library to build out the front end of the application. Redux is a predictable state container used hand in hand with React. The OMDb API is used to get movie information based on user input. It handles all of the state management within the application. Docker is an open source tool that is used to package the application into a container. Kubernetes handles the management and deployment of the containerized application.

When the reader has completed this Code Pattern, they will understand how to:
* Containerize a React application using Docker
* Deploy and manage an application using Kubernetes

## Flow

## Included components
* IBM Cloud Container Service: IBM Bluemix Container Service manages highly available apps inside Docker containers and Kubernetes clusters on the IBM Cloud.
* Kubernetes Cluster: Create and manage your own cloud infrastructure and use Kubernetes as your container orchestration engine.

## Featured technologies
* Node.js: An open-source JavaScript run-time environment for executing server-side JavaScript code.
* Cloud: Accessing computer and information technology resources through the Internet.
* Containers: Virtual software objects that include all the elements that an app needs to run.
* Container Orchestration: Automating the deployment, scaling and management of containerized applications.

# Watch the video

# Steps
Use the ``Deploy to IBM Cloud`` button **OR** run locally.

## Run locally
> NOTE: These steps are only needed when running locally instead of using the ``Deploy to IBM Cloud`` button.

1. [Clone the repo](#1-clone-the-repo)
2. [Retrieve an api key for OMDb API](#2-retrieve-an-api-key-for-omdb-api)
3. [Containerize the application using Docker](#3-containerize-the-application-using-docker)
4. [Deploy the application on Kubernetes](#3-deploy-the-application-on-kubernetes)

### 1. Clone the repo

Clone the `react-redux-api-example` locally. In a terminal, run:

```
$ git clone https://github.com/rizcheldayao/react-redux-api-example.git
```

### 2. Retrieve an auth key for OMDb API

You must get an API key from http://www.omdbapi.com/ in order to get a response from the API. You will insert your API key in /src/actions/index.js on line 42

### 3. Containerize the application using Docker

In a terminal, run the following commands: 

```
$ docker build -t <your_docker_username>/react-redux-api-example .
```

```
$ docker run -p 3000:3000 -d <your_docker_username>/react-redux-api-example
```

### 4. Deploy the application on Kubernetes

In a terminal, run the following commands:

```
$ bx cr namespace-add <your_namespace>
```

```
$ bx cr build -t registry.<region>.bluemix.net/<your_namespace>/react-redux-api-example:v1 .
```

```
$ docker tag react-redux-api-example registry.<region>.bluemix.net/<your_namespace>/react-redux-api-example:v2
```

```
$ docker push  registry.<region>.bluemix.net/<your_namespace>/react-redux-api-example:v2
```

