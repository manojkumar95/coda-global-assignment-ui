# Coda global assignment

- Visit [App link](http://13.232.213.255) to view the application hosted on AWS EC2 free tier instance
- View [Frontend Repo](https://github.com/manojkumar95/coda-global-assignment-ui.git)
- View [Backend Repo](https://github.com/manojkumar95/coda-global-assignment-api.git)


## Prerequisites

- node >= 12.10 
- yarn >= 1.3.2

## Stack

### On the front end

1. React
2. Redux
3. Sass
4. Bootstrap
5. Webpack

### On the backend

1. MongoDB + Mongoose
2. NodeJS + Express
3. MongoDb hosted on MongoDbAtlas (cloud hosted env for mongodb services)

### Node

Node 12.13 is used. Install node via `nvm` is recommended. Read more about nvm installation [here](https://github.com/creationix/nvm#installation)

```bash
nvm install 12.13
```

#### NODE_ENV

You need to set NODE_ENV variable as `development` for development environment, in your terminal.

```bash
export NODE_ENV="development"
```

Suggestion: You can set NODE_ENV in your .bash_profile

### Install dependencies

```bash
cd <project_dir>

yarn
```

### Starting the App

**To start the server:**

```bash
yarn start
```
