# MyRepoList

# Prerequisits
1. Firebase tools. To install it run `npm install -g firebase-tools`

## To Install app:
1. Run `npm install` in root directory
2. Run `npm install` in functions directory

## To run app with AngularUniversal, all you need to do is:

1. Build App: `ng build --prod --aot`
2. Build Server: `ng build --prod --aot --app 1`
3. Copy the `index.hml` from `dist` folder to `functions/dist-server`
4. Rename the main.<random>.bundle.js file to `main.bundle.js`
5. Compile TS server file to JS: `tsc -p ./functions/tsconfig.functions.json`
6. Serve App: `firebase serve --only hosting,functions` (You need to be logged in: `firebase`)
7. Open Browser, and navigate to `localhost:5000`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


