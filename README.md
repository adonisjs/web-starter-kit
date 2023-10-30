# AdonisJS Web Starter Kit

This repo contains an AdonisJS application tailored for building a server side rendered application using the [Edge template engine](https://edgejs.dev).

## What's included

- TypeScript setup with commands to run developments server using `ts-node + swc` and create production build.
- ESLint and Prettier setup extending the [AdonisJS tooling config](https://github.com/adonisjs/tooling-config) presets.
- Ace command line framework.
- Everything else you get with the core of AdonisJS.

On top of the framework core and dev-tooling, the following features are enabled by the web starter kit.

- Lucid ORM
- Auth module with sessions
- CSRF protection
- Edge template engine
- VineJS for validations
- Static files server
- Vite for bundling and serving frontend assets

## Usage

You can create a new app using the `web` boilerplate by executing the following command. The command will perform the following steps

- Clone the repo
- Install depedencies
- Copy `.env.example` to `.env`
- Set app key using `node ace generate:key` command.

```sh
npm init adonisjs -- -K="web"
```
