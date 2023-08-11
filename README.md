# WebDevProject
Exploration project to learn web development principles

# Tasks
Current task(s):  
- Use bootstrap or some styling

A list of tasks to explore if desired:
- Decide app functionality. Diagram?
- Implement decorator pattern
- Implement micro-frontend architecture using Webpack
- Implement node micro-service
- Implement API doc generation and API doc hosting
- Add database element
- Add image rendering/storage component
- Integrate into Github CI/CD

Other techs to possibly explore:
- Spring boot
- Java micro-service
- Bring into cloud
- Web components & Lit

Completed Tasks:
- Build a starter app

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