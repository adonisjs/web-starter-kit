/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
| Lazy loading controllers:
| We recommend lazy loading controllers by wrapping the dynamic import
| statement inside a function.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async ({ request }) => {
  console.log(request.cookie('username'))
  return '<p> It works! </p>'
})
