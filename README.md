# Angular PWA i18n Demo

This Angular mini-project is a demo of 3 key features:
- basic CRUD using HTTP protocols
- PWA Support (using [@angular/pwa](https://angular.io/guide/service-worker-getting-started))
- Internationalization/Localization/Globalization (using [ngx-translate](https://github.com/ngx-translate/core))

A live demo of this mini-project can be found here:<br>
https://angular-pwa-i18n-demo.web.app

Data is fetched from a mock API (which was created using [MockAPI.io](https://mockapi.io/)).<br>
The data set can be viewed in it's RAW form (JSON format) here:<br>
https://5f59cabb8040620016ab960d.mockapi.io/companies

The possible queries on this data set are documented here:<br>
https://mockapi.io/docs

## Test PWA Functionality in a local environment

To test the PWA functionality in a local environment, the project build files need to be served over HTTP/HTTPS.<br>
To help with this, I used the lightweight [http-server](https://www.npmjs.com/package/http-server) library.<br>

1. To install http-server:
```
npm i http-server
```
1. Or to install it globally on your local machine:
```
npm i -g http-server
```
2. Prepare the project files to serve using (Angular Service Workers are registered only in production mode):
```
ng build --prod
```
3. Serve the project locally:
```
http-server -p 8080 -c-1 dist/angular-pwa-https-crud
```
4. The project will be served locally at:
```
http://localhost:8080/
```

---

The following tutorials were referenced in the development of this mini-project:<br>
https://pwa.ng/<br>
https://angular.io/guide/service-worker-getting-started<br>
https://medium.com/poka-techblog/turn-your-angular-app-into-a-pwa-in-4-easy-steps-543510a9b626<br>
https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps<br>
https://mockapi.io/docs<br>
https://github.com/ngx-translate/core<br>

---
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.

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
