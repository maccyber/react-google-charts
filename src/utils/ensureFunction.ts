import { isFunction } from './isFunction'

export const ensureFunction = (maybeFunction = (a: any) => null) => {
  return isFunction(maybeFunction) ? maybeFunction : (a: any) => null
}
