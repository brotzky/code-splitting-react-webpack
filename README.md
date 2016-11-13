# Code Splitting with React Router and Webpack

An example of how to code split a React application using Webpack and React Router.
[Live Demo](http://brotzky.co/code-splitting/)

## Installation and Starting

```
git clone https://github.com/brotzky/code-splitting.git
cd code-splitting
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
