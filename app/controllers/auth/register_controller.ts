import VerifyENotification from '#mails/verify_e_notification'
import User from '#models/user'
import { registerValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'
import mail from '@adonisjs/mail/services/main'

export default class RegisterController {
  async show({ view }: HttpContext) {
    return view.render('pages/auth/register')
  }

  async store({ request, response, i18n }: HttpContext) {
    const { confirmPassword, ...rest } = await request.validateUsing(registerValidator, {
      messagesProvider: i18n.createMessagesProvider(),
    })

    const user = await User.create(rest)

    await mail.send(new VerifyENotification(user, i18n))

    return response.redirect().toRoute('home')
  }
}
