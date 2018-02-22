import { isFunction } from "./isFunction";

export type ensureFunctionArg = any;

export const ensureFunction = (maybeFunction: ensureFunctionArg) => {
  return isFunction(maybeFunction) ? maybeFunction : (a: any) => null;
};
