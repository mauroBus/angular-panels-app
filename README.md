# Angular Panels App [Demo](https://maurobus.github.io/angular-panels-app)

Angular admin panels front-end.
This is an Angular front-end Admin Dashboard template. That means all data you can see on graphs, charts tables is hardcoded in Javascript. You can use any backend you want with it without limitations.


## Install
After repository is cloned, go inside of repository directory and install dependencies:
`npm install`


## Run
* Development mode:
  `gulp serve`

* Production mode:
  `gulp serve:dist`


## Features
* Responsive layout
* High resolution
* Bootstrap CSS Framework
* Sass
* Gulp build
* AngularJS
* Jquery
* Charts (amChart, Chartist, Chart.js, Morris)
* Maps (Google, Leaflet, amMap)
* etc

## Project Structure
```
├── bower.json               <- front-end library dependencies
├── gulpfile.js              <- main task runner file
├── package.json             <- mostly task runner dependencies
├── gulp/                    <- build tasks
├── src/                     <- main front-end assets
│   ├── 404.html
│   ├── auth.html
│   ├── index.html          <- main app dashboard page
│   ├── reg.html
│   ├── app/                <- angular application files
│   │   ├── app.js         <- angular application entry point. Used for managing dependencies
│   │   ├── pages/         <- UI router pages. Pages created for demonstration purposes. Put your application js and html files here
│   │   ├── theme/         <- theme components. Contains various common widgets, panels which used across application
│   ├── assets/             <- static files (images, fonts etc.)
│   ├── sass/               <- sass styles
│   │   ├── app/           <- application styles. Used mostly for demonstration purposes. Put your app styles here.
│   │   ├── theme/         <- theme styles. Used to customize bootstrap and other common components used in tempate.
```
