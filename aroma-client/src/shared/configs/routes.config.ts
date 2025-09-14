export const PUBLIC_ROUTES = {
  root: (url: string = '') => `${url ? url : ''}`,

  home: () => PUBLIC_ROUTES.root('/'),

  menu: (slug?: string) =>
    PUBLIC_ROUTES.root(`/menu${slug ? `?coffee=${slug}` : ''}`),

  aboutUs: () => PUBLIC_ROUTES.root('/about-us'),
  contact: () => PUBLIC_ROUTES.root('/contact'),

  customers: () => PUBLIC_ROUTES.root('/customers'),
  customer: (id: string) => PUBLIC_ROUTES.root(`/customers/${id}`),

  settingsAppearance: () => PUBLIC_ROUTES.root(`/settings/appearance`),

  documentations: () => PUBLIC_ROUTES.root(`/documentations`),
  privacyPolicy: () => PUBLIC_ROUTES.root(`/documentations/privacy-policy`)
}

export const PRIVATE_ROUTES = {
  root: (url: string = '') => `${url ? url : ''}`,

  signOut: () => PUBLIC_ROUTES.root(`/sign-out`),

  profile: () => PUBLIC_ROUTES.root(`/profile`),

  orders: () => PUBLIC_ROUTES.root(`/orders`),
  ordersSuccess: (id: string) => PUBLIC_ROUTES.root(`/orders/success/${id}`),
  order: (id: string) => PUBLIC_ROUTES.root(`/orders/${id}`)
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
