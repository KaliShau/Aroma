export const API_ENDPOINTS = {
  root: (url: string = '') => `${url ? url : ''}`,

  generateCode: () => API_ENDPOINTS.root('/auth/generate-code'),
  entryCode: () => API_ENDPOINTS.root('/auth/entry-code'),
  signOut: () => API_ENDPOINTS.root('/auth/sign-out'),
  refresh: () => API_ENDPOINTS.root('/auth/refresh'),

  profile: () => API_ENDPOINTS.root('/user/profile'),

  getCoffeeRandom: () => API_ENDPOINTS.root('/coffee/random'),
  getCoffeeAll: (page: number, category: string, search: string) =>
    API_ENDPOINTS.root(
      `/coffee?page=${page}&category=${category}&search=${search}`
    ),
  getCoffeeBySlug: (slug: string) => API_ENDPOINTS.root(`/coffee/${slug}`),

  getCategoryCoffeeAll: () => API_ENDPOINTS.root('/category-coffee')
}
