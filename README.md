# Angular-ERP

It is a basic ERP system that stores information about employees of a company with their photograph. It also displays the list of employees and is able to fetch from the list of employees. It can be uses ng-forms and localstorage from where the data can be fed to the database.


## Installing Angular

Pre-requisite: install npm and NodeJs

To install Angular CLI

```bash
    npm install -g @angular/cli
```

To install all the required dependencies

```bash
    npm install
```

OR 

To start a new project

```bash
    ng new name-of-new-project
```

## Serving basic application

Go to the workspace directory

```bash
    cd name-of new-project
```

To serve it on the browser

```bash
    ng serve --open
```
It builds the server, starts the development server, rebuilds as you make changes and watches the source files.

The `--open` flag opens the browser to `http://localhost:4200`

## Creating Components and Services

To create a feature component (say 'Hero_jsx')
```bash
    ng generate component Hero_jsx
```
OR 

Shorthand syntax
```bash
    ng g c Hero_jsx
```

To create a Service (say 'Hero_service')

```bash
    ng generate service Hero_service
```

OR 

Shorthand syntax

```bash
    ng g s Hero_service
```

## To add Routing

To enable navigation between different components, you can bind then to buttons or gestures and map them to their corresponding routes

To add routing 

```bash
    ng generate module app-routing --flat --module=app
```

Add routes and the path which they should follow.

## Form

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
