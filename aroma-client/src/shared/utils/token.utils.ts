import cookie from 'js-cookie'

export const cookieTokens = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',

  getAccess: () => cookie.get(cookieTokens.ACCESS_TOKEN),
  setAccess: (token: string) => cookie.set(cookieTokens.ACCESS_TOKEN, token),
  removeAccess: () => cookie.remove(cookieTokens.ACCESS_TOKEN)
}
