# Newmont

## Dependencies

**Make sure you have Node LTS installed**

[https://nodejs.org/en/](https://nodejs.org/en/)

For managing multiple node installs you can use Node Version Manager
[https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)

**Install yarn**
Alternative to npm
[https://classic.yarnpkg.com/en/docs/install](https://classic.yarnpkg.com/en/docs/install)

```
npm install --global yarn
```

**Nodemon**
Used for hotreloading node servers
[https://github.com/remy/nodemon](https://github.com/remy/nodemon)

```
npm install --global nodemon
```

**Lerna**
[https://lerna.js.org/](https://lerna.js.org/)

```
npm install --global lerna
```

yarn

## Getting started

After cloning the repo cd into the newmont directory

    cd newmont

From the root newmont directory run

    yarn

This will install all dependecies in a shared node modules folder within the base newmont directory

### Starting the graph gateway

    yarn server:dev

### Starting the dev web client and nuxt server

In a new terminal window cd into the newmont directory and run

    yarn web:dev
