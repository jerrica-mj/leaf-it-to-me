# Leaf It To Me

A full stack web application to help users find, track, and grow plants that thrive. Created as a final project for the Lighthouse Labs Full Stack Web Development Bootcamp.


## The Stack

On the front end, this project uses React with Router, Bootstrap, and Axios, with Auth0 to provide user login with Google or Facebook. On the back end, this application uses Express and PostgreSQL to serve and update persistent SQL database information.


## About the Boilerplate

This project was built from @GarrettGSB's [React + Express No-Fluff Boilerplate](https://github.com/garrettgsb/react-express-boilerplate). This boilerplate is set up with the React project having `proxy` set to `localhost:8080` in the `package.json` file, and the Express app listens to port 8080 in `server.js`.


## Running the projects

You need **TWO** terminal windows/tabs for this (or some other plan for running two Node processes).

In one terminal, `cd` into `react-front-end`. Run `npm install` or `yarn` to install the dependencies. Then run `npm start` or `yarn start`, and go to `localhost:3000` in your browser.

In the other terminal, `cd` into `express-back-end`. Run `npm install` or `yarn` to install the dependencies, then `npm start` or `yarn start` to launch the server.

In the browser, you can see the web application front end.
