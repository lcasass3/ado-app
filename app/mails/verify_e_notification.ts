import User from '#models/user'
import { I18n } from '@adonisjs/i18n'
import { BaseMail } from '@adonisjs/mail'

export default class VerifyENotification extends BaseMail {
  constructor(
    private readonly user: User,
    private readonly i18n: I18n
  ) {
    super()
  }
  /**
   * The "prepare" method is called automatically when
   * the email is sent or queued.
   */
  prepare() {
    this.message.to(this.user.email)
    this.message.subject(this.i18n.t('messages.verify-email'))
    this.message.text(this.i18n.t('messages.verify-email-message'))
  }
}
