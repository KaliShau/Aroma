export const APP_URL = process.env.APP_URL

export const PUBLIC_ROUTES = {
  root: (url: string = '') => `${url ? url : ''}`,

  home: () => PUBLIC_ROUTES.root('/'),

  menu: () => PUBLIC_ROUTES.root('/home'),
  aboutUs: () => PUBLIC_ROUTES.root('/about-us'),
  contact: () => PUBLIC_ROUTES.root('/contact'),

  cart: () => PUBLIC_ROUTES.root('/cart')
}
