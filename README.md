# React-redux-api-example

This project calls the OMDb API to get information about a movie the user entered using React and Redux. 

Tools used: 
- React
- Redux
- OMDB API 
- Webpack
- Babel
- Sass 

## Prerequisites 

You must get an API key from http://www.omdbapi.com/ in order to get a response from the API. You will insert your API key in /src/actions/action.js

## Running the project locally

In the project directory run: 

`npm install`

`npm run build-css` 

`npm run start`

You can now access the application at http://localhost:3000 🎉🎉🎉

##  Running the project in a container

Build your image: 

`docker build -t <your username>/react-redux-api-example .`

Your image should be listed by running:

`docker images`

Run the image: 

`docker run -p 3000:3000 -d <your username>/react-redux-api-example`

You can now access the application at http://localhost:3000 🎉🎉🎉

Check the output of the app:

Get container id:

`docker ps`

`docker logs <container id>`

##  Running the project in Kubernetes

https://medium.com/@rizchel.a.dayao/my-journey-to-deploying-my-first-react-application-with-kubernetes-95e6d25f434d

## Results

<img width="1415" alt="screen shot 2017-03-13 at 6 14 10 pm" src="https://cloud.githubusercontent.com/assets/18426780/23879083/fa0df756-0818-11e7-8569-469367b84280.png">
