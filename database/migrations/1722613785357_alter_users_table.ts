import { BaseSchema } from '@adonisjs/lucid/schema'

/**
 * Add email verification properties to the users table
 */
export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.boolean('is_email_verified').defaultTo(false).notNullable()
      table.string('email_verification_token').nullable().defaultTo(null).unique()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
