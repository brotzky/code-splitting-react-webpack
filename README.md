# Code Splitting with React Router and Webpack 2

An example of how to code split a React application using Webpack 2 and React Router.

[Live Demo](http://brotzky.co/code-splitting/)

## Guide

There is an easy to follow guide to help you fully understand the concepts.

[Step-by-step guide](http://brotzky.co/blog/a-beginners-step-by-step-guide-to-code-splitting-with-webpack-2-and-react-router/)

## Installation and Starting

```
git clone https://github.com/brotzky/code-splitting.git && cd code-splitting
yarn install
yarn start
```

## Technology

The technology used for this example:

* React
* React Router v3
* Webpack 2
* Babel


## Directory

The content you should focus on to get a better idea of what is going on.

```
code-splitting/
|   package.json
|
└───src/
│   │
│   └───modules/
│   |     Core.js
│   |     ...
│   |
│   └───root/
│   |     index.js
│   |
│   └───routes/
│   |     index.js
│   │ 
│   │ index.html
│   │ index.js
│   
│   
└───webpack/
      webpack-dev-server.js
      webpack.config.js
```

<div align="center">
  <sub>Made by <a href="https://twitter.com/_brotzky">Dennis Brotzky</a>. <i>If you need help please file an issue or contact me through <a href="https://twitter.com/_brotzky">twitter</a>!</i></sub>
</div>
