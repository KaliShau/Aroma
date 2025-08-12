type ClassValue =
  | string
  | number
  | ClassDictionary
  | ClassArray
  | null
  | undefined
  | false

interface ClassDictionary {
  [key: string]: boolean | undefined | null
}

interface ClassArray extends Array<ClassValue> {}

export const cn = (...args: ClassValue[]): string => {
  const classes: string[] = []

  for (const arg of args) {
    if (!arg) continue

    if (typeof arg === 'string' || typeof arg === 'number') {
      classes.push(arg.toString())
    } else if (Array.isArray(arg)) {
      const inner = cn(...arg)
      if (inner) {
        classes.push(inner)
      }
    } else if (typeof arg === 'object') {
      for (const key in arg) {
        if (arg.hasOwnProperty(key) && arg[key]) {
          classes.push(key)
        }
      }
    }
  }

  return classes.join(' ')
}
