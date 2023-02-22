/*
|--------------------------------------------------------------------------
| Test runner entrypoint
|--------------------------------------------------------------------------
|
| The "test.ts" file is the entrypoint for running tests using Japa.
|
| Either you can run this file directly or use the "test"
| command to run this file and monitor file changes.
|
*/

process.env.NODE_ENV = 'test'

import 'reflect-metadata'
import { specReporter } from '@japa/spec-reporter'
import { Ignitor, prettyPrintError } from '@adonisjs/core'
import { configure, processCliArgs, run } from '@japa/runner'

/**
 * URL to the application root. AdonisJS need it to resolve
 * paths to file and directories for scaffolding commands
 */
const APP_ROOT = new URL('../', import.meta.url)

/**
 * The importer is used to import files in context of the
 * application.
 */
const IMPORTER = (filePath: string) => {
  if (filePath.startsWith('./') || filePath.startsWith('../')) {
    return import(new URL(filePath, APP_ROOT).href)
  }
  return import(filePath)
}

new Ignitor(APP_ROOT, { importer: IMPORTER })
  .tap(app => app.booting(async () => {
    await import('#start/env')
  }))
  .testRunner()
  .configure(async (app) => {
    const { runnerHooks, ...config } = await import('../tests/bootstrap.js')

    configure({
      ...app.rcFile.tests,
      ...config,
      ...processCliArgs(process.argv.slice(2)),
      ...{
        importer: (filePath) => import(filePath),
        setup: runnerHooks.setup,
        reporters: [specReporter()],
        teardown: runnerHooks.teardown.concat([() => app.terminate()]),
      },
    })
  })
  .run(() => run())
  .catch(prettyPrintError)
