import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
  vine.object({
    fullName: vine.string().minLength(3).maxLength(100),
    email: vine
      .string()
      .email()
      .normalizeEmail()
      .unique(async (db, value, _field) => {
        const user = await db.from('users').select('id').where('email', value).first()

        return !user
      }),
    password: vine.string().minLength(8).maxLength(100).trim(),
  })
)
