const _hasOwnProperty = Object.prototype.hasOwnProperty

export type Path = Array<string | number | symbol>

export function has (obj: any, path: Path): boolean {
  let res = obj

  for (const key of path) {
    if (res == null || !_hasOwnProperty.call(res, key)) {
      return false
    }

    res = res[key]
  }

  return true
}
