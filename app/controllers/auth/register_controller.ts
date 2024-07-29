import User from '#models/user'
import { registerValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class RegisterController {
  async show({ view }: HttpContext) {
    return view.render('pages/auth/register')
  }

  async store({ request, response, i18n }: HttpContext) {
    const { confirmPassword, ...rest } = await request.validateUsing(registerValidator, {
      messagesProvider: i18n.createMessagesProvider(),
    })

    await User.create(rest)

    return response.redirect().toRoute('home')
  }
}
