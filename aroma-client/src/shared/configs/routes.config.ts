export const PUBLIC_ROUTES = {
  root: (url: string = '') => `${url ? url : ''}`,

  home: () => PUBLIC_ROUTES.root('/'),

  menu: () => PUBLIC_ROUTES.root('/menu'),
  coffee: (slug: string) => PUBLIC_ROUTES.root(`/menu/${slug}`),

  aboutUs: () => PUBLIC_ROUTES.root('/about-us'),
  contact: () => PUBLIC_ROUTES.root('/contact'),

  cart: () => PUBLIC_ROUTES.root('/cart'),

  customers: () => PUBLIC_ROUTES.root('/customers'),
  customer: (id: string) => PUBLIC_ROUTES.root(`/customers/${id}`),

  settingsAppearance: () => PUBLIC_ROUTES.root(`/settings/appearance`)
}

export const PRIVATE_ROUTES = {
  root: (url: string = '') => `${url ? url : ''}`,

  signOut: () => PUBLIC_ROUTES.root(`/sign-out`),

  profile: () => PUBLIC_ROUTES.root(`/profile`)
}

export const GUEST_ROUTES = {
  root: (url: string = '') => `${url ? url : ''}`,

  generateCode: () => PUBLIC_ROUTES.root('/generate-code'),
  entryCode: (email: string) => PUBLIC_ROUTES.root(`/entry-code?email=${email}`)
}

export const ADMIN_ROUTES = {
  root: (url: string = '') => `${url ? url : ''}`,

  admin: () => PUBLIC_ROUTES.root('/admin')
}
