/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const RegisterController = () => import('#controllers/auth/register_controller')
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.get('/register', [RegisterController, 'show']).as('register')
  })
  .prefix('/auth')
  .as('auth')

router.on('/').render('pages/home')
