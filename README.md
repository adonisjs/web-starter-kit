# AdonisJS Slim Starter Kit

This repo contains a smallest possible AdonisJS application with the framework core and the Japa test runner. You can clone this repo, if you want to start from a clean state and configure new packages as you need them.

## What's included

- TypeScript setup with commands to run developments server using `ts-node + swc` and create production build.
- ESLint and Prettier setup extending the [AdonisJS tooling config](https://github.com/adonisjs/tooling-config) presets.
- Ace command line framework
- Everything else you get with the core of AdonisJS.

## Usage

You can create a new app using the `slim` boilerplate by executing the following command. The command will perform the following steps

- Clone the repo
- Install depedencies
- Copy `.env.example` to `.env`
- Set app key using `node ace generate:key` command.

```sh
npm init adonisjs -- -K="slim"
```
