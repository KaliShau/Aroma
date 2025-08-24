import { Injectable } from '@nestjs/common'
import { Response } from 'express'

@Injectable()
export class CookieService {
  REFRESH_TOKEN = 'refreshToken'

  setCookie(res: Response, refreshToken: string) {
    res.cookie(this.REFRESH_TOKEN, refreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })
  }

  clearCookie(res: Response) {
    res.clearCookie(this.REFRESH_TOKEN, {
      httpOnly: true,
    })
  }
}
