# Assignment 2 - Web API.

Name: Denis Remus Marincas

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
 + All Movie information is obtained from assignment API
 + Actor information is obtained from assignment API
 + Genre information is obtained from assignment API 
 + Login/Signup through MongoDB Atlas
 + Signout function implemented 
 + Username displayed after login
 + Improved user authentication security 
 + Improved overall site design 

## Setup requirements.

After cloning the react app from assignment one and the movieAPI from the labs following steps were taken:
Inside the react app folder:
 + npm install
 + npm run start
Inside the assignmentAPI folder:
 + npm install --save cors
 + npm run dev

And any other required dependencies.

## API Configuration

First step consists of creating a ".env" file which contains the following variables: NODEENV, PORT, HOST, mongoDB,  

In order to connect to MongoDB Atlas, a connection string must be provided. The port and host on which the local API server is running is also specified. 
______________________
NODEENV=development
PORT=8080
HOST= localhost
mongoDB= *mongodb connection string*
secret=YourJWTSecret
TMDB_KEY = tmdbkey
______________________

## API Design

- /api/movies | GET | Gets a list of movies 
- /api/movies/tmdb/upcoming | GET | Gets a list of upcoming movies
- /api/movies/tmdb/toprated | GET | Gets a list of top rated movies
- /api/movies/tmdb/popularMovies | GET | Gets a list of popular movies
- /api/movies/tmdb/nowplaying | GET | Gets a list of movies that are now playing
- /api/movies/tmdb/genres | GET | Gets a list of genres (Used for sorting)
- /api/movies/tmdb/actors | GET | Gets a list of actors
- /api/movies/tmdb/popularActors | GET | Gets a list popular actors
- /api/users | POST | Used for logging in
- /api/users?action=register | POST | Used for creating a new user


## Security and Authentication

All routes except login/signup are protected unless user is logged in. After user is logged in, all routes are visible. Security has been enforced by enforcing user authentication using protected routes. Also, password regex and password matching is in place.

## Integrating with React App

Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One.

## Independent learning (if relevant)

Briefly explain any non-standard features developed for the app.