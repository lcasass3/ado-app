import crypto from 'node:crypto'

export default class CryptService {
  static generateRandomToken(): string {
    return crypto.randomBytes(16).toString('hex')
  }
}
