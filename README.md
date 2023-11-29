# WebDevProject
Exploration project to learn web development principles

# Tasks
Current focuses:
- Add first database component to app
  - Personal growth page takes user input
  - Save user input to a database
  - Load user input from database

A list of tasks to explore if desired:
- Update homepage & main-menu to do proper mvc design with a controller, instead of using view for everything
- Add eslinter to solution
- User authentication & authorization
- Implement micro-frontend architecture using Webpack
- Implement node micro-service
- Implement API doc generation and API doc hosting
- Add image rendering/storage component
- Integrate into Github CI/CD
- Serving app through GitHub Pages or AWS

Other technologies to possibly explore:
- Spring boot
- Java micro-service
- Bring into cloud
- Web components & Lit

Completed Tasks:
- Build a starter app
- Styling main webpage
- Implement decorator pattern

# Task Notes
## Build a Starter App
Steps to get started:
```shell
Download NVM
nvm install 16.15.0
npm init  // Creates package.json
npm install --save-dev webpack  // Updates package.json, downloads webpack and dependencies
npm install --save-dev webpack-cli  // For webpack commands in the CLI
npm install --save-dev webpack-dev-server  // Automatically recompiles code and serves it on a local dev server
npm install --save-dev html-webpack-plugin  // Creates HTML files to serve the webpack bundles
npm install --save-dev style-loader css-loader  // Supports importing a css file and adding it to the DOM
npm install --save-dev typescript ts-loader  // Supports importing and transpiling typescript files
```