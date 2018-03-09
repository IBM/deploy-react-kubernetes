# Deploy a React application on Kubernetes

In this Code Pattern, we will deploy a React application using Kubernetes.

There are many choices when looking for the right solution to manage and deploy our applications. It can often be overwhelming when we're trying to pick the right solution. One of our many choices is Kubernetes. This pattern will take you through how to get a front end application deployed on Kubernetes. After implementing the code, you will have the knowledge to deploy your own applications on Kubernetes. 

This repository uses the React JavaScript library to build out the front end of the application. Redux is a predictable state container used hand in hand with React. The OMDb API is called to get movie information based on user input. It handles all of the state management within the application. Docker is an open source tool that is used to package the application into a container. IBM Cloud provides one to use with Kubernetes deployments called IBM Cloud Container Service. Kubernetes handles the management and deployment of the containerized application.

When the reader has completed this Code Pattern, they will understand how to:
* Containerize a React application using Docker
* Deploy and manage an application using Kubernetes

## Flow

![Flow](docs/source/images/architecture.png)

1. The user accesses the application through the web interface. The user enters a movie title into the input.  
2. The React application is rendered to the user on access.
3. The application calls the OMDb API and receives a JSON object of the response to show the user.

## Included components
* IBM Cloud Container Service: IBM Bluemix Container Service manages highly available apps inside Docker containers and Kubernetes clusters on the IBM Cloud.
* Kubernetes Cluster: Create and manage your own cloud infrastructure and use Kubernetes as your container orchestration engine.

## Featured technologies
* Node.js: An open-source JavaScript run-time environment for executing server-side JavaScript code.
* Cloud: Accessing computer and information technology resources through the Internet.
* Container Orchestration: Automating the deployment, scaling and management of containerized applications.

# Watch the video

# Steps
Use the ``Deploy to IBM Cloud`` button **OR** run locally.

## Prerequisites
1. You must get an API key from [OMDb API](http://www.omdbapi.com/) in order to get a response from the API. You will insert your API key in /src/actions/index.js on line 42

2. Create an environment variable for your docker username
```
$ export docker_username="YOUR_DOCKER_USERNAME"
```

## Deploy to IBM Cloud 
[![Deploy to IBM Cloud](https://metrics-tracker.mybluemix.net/stats/527357940ca5e1027fbf945add3b15c4/button.svg)](https://bluemix.net/deploy?repository=https://github.com/IBM/watson-banking-chatbot.git)

1. Press the above ``Deploy to IBM Cloud`` button and then click on ``Deploy``.

<!--optional step-->
2. In Toolchains, click on Delivery Pipeline to watch while the app is deployed. Once deployed, the app can be viewed by clicking 'View app'.
![](doc/source/images/toolchain-pipeline.png)


## Run locally
> NOTE: These steps are only needed when running locally instead of using the ``Deploy to IBM Cloud`` button.

1. [Clone the repo](#1-clone-the-repo)
2. [Run the application](#2-run-the-application)

### 1. Clone the repo

Clone the `react-redux-api-example` locally. In a terminal, run:

```
$ git clone https://github.com/rizcheldayao/react-redux-api-example.git
```

### 2. Run the application

1. Install [Node.js](https://nodejs.org/en/)
2. Run the following commands in a terminal: 

`$ npm install`

`$ npm run build-css` 

`$ npm run start`

## Run the application using Docker
1. [Build the image](#1-build-the-image)
2. [Run the image](#2-run-the-image)

### 1. Build the image

In a terminal, run:

`$ docker build -t $docker_username/deploy-react-kubernetes .`

Your image should be listed by running:

`$ docker images`

### 1. Run the image

In a terminal, run:

`docker run -p 3000:3000 -d $docker_username/deploy-react-kubernetes`

You can now access the application at http://localhost:3000

### 2. Run the application on Kubernetes

1. [Modify the react-app.yaml yaml file to use your image.](#1-modify-the-yaml-file-to-use-your-image)
2. [Deploy the application](#2-deploy-the-application)

### 1. Modify the yaml file to use your image.

Make the following changes to react-app.yaml
```
...
    containers:
    - name: react-app
      image: <docker_username>/react-app
```

### 2. Deploy the application.

``` $ kubectl apply -f react-app.yaml```

* To access your application. You would need the public IP address of your cluster. If you don't have a load balancer, you can use the Node Port.

```
# For clusters provisioned with Bluemix
$ bx cs workers YOUR_CLUSTER_NAME
```

You can now access the application at http://localhost:3000

# Sample output

<img width="1415" alt="screen shot 2017-03-13 at 6 14 10 pm" src="https://cloud.githubusercontent.com/assets/18426780/23879083/fa0df756-0818-11e7-8569-469367b84280.png">


# Privacy Notice
If using the `Deploy to IBM Cloud` button some metrics are tracked, the following
information is sent to a [Deployment Tracker](https://github.com/IBM/cf-deployment-tracker-service) service
on each deployment:

* Node.js package version
* Node.js repository URL
* Application Name (`application_name`)
* Application GUID (`application_id`)
* Application instance index number (`instance_index`)
* Space ID (`space_id`)
* Application Version (`application_version`)
* Application URIs (`application_uris`)
* Labels of bound services
* Number of instances for each bound service and associated plan information

This data is collected from the `package.json` file in the sample application and the `VCAP_APPLICATION` and `VCAP_SERVICES` environment variables in IBM Cloud and other Cloud Foundry platforms. This data is used by IBM to track metrics around deployments of sample applications to IBM Cloud to measure the usefulness of our examples, so that we can continuously improve the content we offer to you. Only deployments of sample applications that include code to ping the Deployment Tracker service will be tracked.

## Disabling Deployment Tracking

To disable tracking, simply remove ``require("cf-deployment-tracker-client").track();`` from the ``app.js`` file in the top level directory.

# Links
* [Demo on Youtube](https://www.youtube.com/watch?v=Jxi7U7VOMYg)
* [Blog post](https://medium.com/@rizchel.a.dayao/my-journey-to-deploying-my-first-react-application-with-kubernetes-95e6d25f434d)

# Learn more

* **Container Orchestration Code Patterns**: Enjoyed this Code Pattern? Check out our other [Container Orchestration Code Patterns](https://developer.ibm.com/code/technologies/container-orchestration/).
* **Kubernetes on IBM Cloud**: Deliver your apps with the combined the power of [Kubernetes and Docker on IBM Cloud](https://www.ibm.com/cloud-computing/bluemix/containers)

# License
[Apache 2.0](LICENSE)
