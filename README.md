# punkweb-ngx

[![Build Status](https://travis-ci.org/Punkweb/punkweb-ngx.svg?branch=master)](https://travis-ci.org/Punkweb/punkweb-ngx)

Full featured and intended to keep project structure organized and consistent.

### Features

* Clean project structure - based on components, modules, routes and services.
* Electron integrated and entirely separate from Angular code - flawlessly communicates through IPC.
* Http service - deprecated to some degree from HttpClient as it's really just a wrapper around it now.
* API service - easily communicate with REST backends - CRUD operations.
* Auth service - simple token authentication with ability to login/logout and `GET` the current user.
* Websocket service - easily manage websocket connections that have the ability to automatically reconnect when connection is lost.
* Token authentication - makes use of the new `@angular/common/http` `HttpInterceptor` to set token headers rather than auth logic.
* Modal module - globally accessible service to open any component as a modal - generic confirm modal.
* Codemirror module - a wrapper for codemirror - can be easily removed if not needed.
* Scss styling - helpful mixins and layout classes - typography - breakpoints - themeable - swatches - looks really nice out of the box!
* e2e and unit tests run headless and are able to pass CI testing (Travis and Gitlab tested).

## Install deps

Run `npm install`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running electron

Run `npm run electron` to build and run the project as an electron app.
Before running electron make sure you are serving the app via `ng serve`.

##### Electron notes

This doesn't compile and then package the entire angular project into an electron app and isn't intended for strictly electron development.
The focus here is to be able to have a desktop version for your web app out of the box.  It's used here more as a wrapper that points at the given url.
It can detect whether or not the app is running in electron or the browser, and necessary changes can be made with that assertion.
Your angular electron code exist as separate entities, and don't clutter each other, but can communicate flawlessly through IPC.
Also, electron can be very easily removed or just not used if your use case doesn't demand it!

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Thanks for viewing!

I'm constantly trying to improve this template.  If you end up using this, please help out by reporting any issues you find, or features you think could be improved!
