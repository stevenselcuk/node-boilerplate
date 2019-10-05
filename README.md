# Node Boilerplate 🔥🥔

It's ready to eat! **Just add water.** Tada 🎉

[![Greenkeeper badge](https://badges.greenkeeper.io/stevenselcuk/node-boilerplate.svg)](https://greenkeeper.io/)
[![Maintainability](https://api.codeclimate.com/v1/badges/682d70d4b5ab5f71027f/maintainability)](https://codeclimate.com/github/stevenselcuk/node-boilerplate/maintainability)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/95180a62296048f59654554ea68a7fb8)](https://www.codacy.com/manual/stevenjselcuk/node-boilerplate?utm_source=github.com&utm_medium=referral&utm_content=stevenselcuk/node-boilerplate&utm_campaign=Badge_Grade)

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

```bash
$ git clone https://github.com/stevenselcuk/node-boilerplate yourawesomeproject

$ cd yourawesomeproject

$ npm install

$ npm run dev
```

## Build it! 🔧

```bash
$ npm run build
```

## Start it! 🍍

```bash
$ npm run start
```

## Serve it! 📦

```bash
$ npm run serve
```

## Other Operations 🤔

Linting, fixing and running tests and prettier is in "auto mode" to preventing **"hot mess"**
( just commit and push it 🤜🏻)

### Lint and fix your file

```bash
$ npm run lint
```

### Run your mocha tests

```bash
$ npm run mocha
```

### Generate your documentation

```bash
$ npm run doc
```

## Folder Structure

```coffee
.
├── /dist/ # Ready to serving files 🥘
├── /src/ # Your awesome Node project 💵
│     ├── /utils/ # Some helpers for you 👄
│            ├── logger.js # File/console Logging helper
│            ├── config.js # Manage and use your .env,args and config.json (Ready to use. Really)
│     ├── index.js # Your entry point!
└── /test/ # Mocha test files, config and helpers are here
└── /docs/ # Your generated documentation files (JSDoc)
└── /logs/ # Log files by logger.js and PM2
└── README.md # You are reading this
└── pm2.config.js # Some configs for running PM2
└── package.json # Node packages
```

# 🙌🏻 That's all brothers.
