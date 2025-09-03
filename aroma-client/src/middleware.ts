import { NextRequest, NextResponse } from 'next/server'

import { EnumUserRole, TypeUser } from './entities/user'
import { TypeAccessToken } from './features/auth'
import { API_ENDPOINTS } from './shared/configs/api.config'
import { CONFIG_ENV } from './shared/configs/env.config'
import {
  ADMIN_ROUTES,
  GUEST_ROUTES,
  PRIVATE_ROUTES
} from './shared/configs/routes.config'
import { getRoutePaths } from './shared/utils/route.utils'
import { cookieTokens } from './shared/utils/token.utils'

const MIDDLEWARE_ROUTES = {
  GUEST: getRoutePaths(GUEST_ROUTES),
  PRIVATE: getRoutePaths(PRIVATE_ROUTES),
  ADMIN: getRoutePaths(ADMIN_ROUTES)
} as const

export async function middleware(req: NextRequest) {
  const refreshToken = req.cookies.get(cookieTokens.REFRESH_TOKEN)?.value
  let accessToken = req.cookies.get(cookieTokens.ACCESS_TOKEN)?.value
  const currentPath = req.nextUrl.pathname

  const isGuestRoute = MIDDLEWARE_ROUTES.GUEST.some(route =>
    currentPath.startsWith(route)
  )
  const isPrivateRoute = MIDDLEWARE_ROUTES.PRIVATE.some(route =>
    currentPath.startsWith(route)
  )
  const isAdminRoute = MIDDLEWARE_ROUTES.ADMIN.some(route =>
    currentPath.startsWith(route)
  )

  if (isGuestRoute) {
    if (refreshToken) {
      return NextResponse.rewrite(new URL('/404', req.url))
    }
    return NextResponse.next()
  }

  if (isPrivateRoute) {
    if (!refreshToken) {
      return NextResponse.rewrite(new URL('/404', req.url))
    }

    try {
      const isValid = await verifyRefreshToken(refreshToken)
      if (!isValid) {
        const response = NextResponse.rewrite(new URL('/404', req.url))
        return response
      }

      return NextResponse.next()
    } catch (error) {
      const response = NextResponse.rewrite(new URL('/404', req.url))
      return response
    }
  }

  if (isAdminRoute) {
    if (!refreshToken) {
      return NextResponse.rewrite(new URL('/404', req.url))
    }

    try {
      if (!accessToken) {
        const data = await verifyRefreshToken(refreshToken)
        accessToken = data as string
      }

      const isValid = await verifyRefreshToken(refreshToken)
      if (!isValid) {
        const response = NextResponse.rewrite(new URL('/404', req.url))
        return response
      }

      const userData = await getUser(refreshToken)
      if (!userData || userData.role !== EnumUserRole.admin) {
        return NextResponse.rewrite(new URL('/404', req.url))
      }

      return NextResponse.next()
    } catch (error) {
      const response = NextResponse.rewrite(new URL('/404', req.url))
      return response
    }
  }

  return NextResponse.next()
}

async function verifyRefreshToken(
  refreshToken: string
): Promise<boolean | string> {
  try {
    const response = await fetch(
      `${CONFIG_ENV.SERVER_URL}/api${API_ENDPOINTS.refresh()}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Cookie: `${cookieTokens.REFRESH_TOKEN}=${refreshToken}`
        },
        credentials: 'include'
      }
    )

    const data = (await response.json()) as TypeAccessToken

    return data.accessToken
  } catch (error) {
    console.error('Token verification failed:', error)
    return false
  }
}

async function getUser(accessToken: string): Promise<TypeUser | null> {
  try {
    const response = await fetch(
      `${CONFIG_ENV.SERVER_URL}/api${API_ENDPOINTS.profile()}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`
        },
        credentials: 'include'
      }
    )

    const data = (await response.json()) as TypeUser

    return data
  } catch (error) {
    console.error('Token verification failed:', error)
    return null
  }
}
