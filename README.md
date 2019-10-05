# Node Boilerplate 🔥🥔

It's ready to eat! **Just add water.** Tada 🎉

[![Greenkeeper badge](https://badges.greenkeeper.io/stevenselcuk/node-boilerplate.svg)](https://greenkeeper.io/)

## Features

- [x] Babel 7
- [x] Webpack
- [x] Eslint
- [x] Prettier
- [x] Github Actions
- [x] Documentation (JsDoc)
- [x] Test (Mocha)
- [x] PM2 (Serve)
- [ ] Test Coverage (IDK?)
- [ ] CI
- [ ] Docker

## Utils

- [x] nconf for your args, env and json config management
- [x] Winston For easy logging (file and console)
- [x] Signale Good looking console logging
- [x] Lint staged for preventing hot mess
- [x] Huskey for lint and testing hooks before commit and push

## Init it! ⚡️

`git clone https://github.com/stevenselcuk/node-boilerplate yourawesomeproject`

`cd yourawesomeproject`

`npm install`

`npm run dev`

## Build it! 🔧

`npm run build`

## Start it! 🍍

`npm run start`

## Serve it! 📦

`npm run serve`

## Other Operations 🤔

Linting, fixing and running tests is in "auto mode" ( just commit and push it 🤜🏻)

### Run your mocha tests

`npm run mocha`

### Generate your documentation

`npm run doc`

## Folder Structure
```
├── dist/ # Ready to serving files 🥘
├── src/ # Your awesome Node project 💵
│ ├── utils/ # Some helpers for you 👄
│ ├── logger.js # File/console Logging helper
│ ├── config.js # Manage and use your .env,args and config.json (Ready to use. Really)
│ ├── index.js # Your entry point!
└── test/ # Mocha test files, config and helpers are here
└── docs/ # Your generated documentation files (JSDoc)
└── logs/ # Log files by logger.js and PM2
└── README.md # You are reading this
└── pm2.config.js # Some configs for running PM2
└── package.json # Node packages
```
# 🙌🏻 That's all brothers.
