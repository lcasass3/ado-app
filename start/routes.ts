/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
const RegisterController = () => import('#controllers/auth/register_controller')
const LoginController = () => import('#controllers/auth/login_controller')

router
  .group(() => {
    router.get('/register', [RegisterController, 'show']).as('register.show')
    router.post('/register', [RegisterController, 'store']).as('register.store')

    router.get('/login', [LoginController, 'show']).as('login.show')
  })
  .use([middleware.i18n()])
  .prefix('/auth')
  .as('auth')

router.on('/').render('pages/home').as('home')
