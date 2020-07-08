## Technical Details

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.12 and bootstrap library has been used for styling and components.

CDN link of this library is added in index.html file.

But to run this project, we dont need to install Angular CLI. Only node should be installed in computer. If not there, can be donwloaded from "nodejs.org" website.

Now go to the project directory where package.json is present and run 'npm install' to install all npm dependencies.

## Create user data

Now add some user data to local storage in this format:

[
    {"username":"tom","userid":"abc@media.com","password":"abc123"},
    {"username":"dick","userid":"def@media.com","password":"def123"}
]

To Add:

Go to browser console and execute: 
localStorage.setItem("users",JSON.stringify([{username:"tom",userid:"abc@media.com",password:"abc123"},{username:"dick",userid:"def@media.com",password:"def123"}]));

Now data is added, so run the applicatation using 'ng serve' and login to using any of this user data to see Gallery.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
