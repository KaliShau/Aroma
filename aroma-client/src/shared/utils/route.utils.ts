export const getRoutePaths = (routes: Record<string, Function>): string[] => {
  return Object.values(routes)
    .map(route => {
      try {
        // Для функций без параметров
        if (route.length === 0) {
          return route()
        }
        // Для функций с параметрами возвращаем базовый путь
        const basePath = route('').split('?')[0] // Убираем query параметры
        return basePath
      } catch {
        return ''
      }
    })
    .filter(path => path !== '')
}
