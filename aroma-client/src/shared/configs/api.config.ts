export const API_ENDPOINTS = {
  root: (url: string = '') => `${url ? url : ''}`,

  generateCode: () => API_ENDPOINTS.root('/auth/generate-code'),
  auth: () => API_ENDPOINTS.root('/auth'),
  signOut: () => API_ENDPOINTS.root('/auth/sign-out'),
  refresh: () => API_ENDPOINTS.root('/auth/refresh')
}
