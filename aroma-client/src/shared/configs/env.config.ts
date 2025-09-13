export const CONFIG_ENV = {
  APP_URL: process.env.APP_URL,
  SERVER_URL: process.env.SERVER_URL,
  APP_MODE: process.env.APP_MODE as AppMode
}

export type AppMode = 'development' | 'production'
