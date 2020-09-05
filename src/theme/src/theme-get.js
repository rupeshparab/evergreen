function get(obj, path, fallback) {
  const keys = path && path.split ? path.split('.') : [path]

  let value = obj
  for (const key of keys) {
    value = value ? value[key] : undefined
  }

  return value === undefined ? fallback : value
}

export function themeGet(theme, path, fallback) {
  return get(theme, path, fallback)
}
