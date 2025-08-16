export const APP_URL = process.env.APP_URL

export const PUBLIC_ROUTES = {
  root: (url: string = '') => `${url ? url : ''}`,

  home: () => PUBLIC_ROUTES.root('/'),

  menu: () => PUBLIC_ROUTES.root('/menu'),
  coffee: (slug: string) => PUBLIC_ROUTES.root(`/menu/${slug}`),

  aboutUs: () => PUBLIC_ROUTES.root('/about-us'),
  contact: () => PUBLIC_ROUTES.root('/contact'),

  cart: () => PUBLIC_ROUTES.root('/cart'),

  customers: () => PUBLIC_ROUTES.root('/customers'),
  customer: (id: string) => PUBLIC_ROUTES.root(`/customers/${id}`)
}
