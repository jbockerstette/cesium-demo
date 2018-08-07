export default function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }
  const aKeys = Object.keys(objA);
  const bKeys = Object.keys(objB);
  const len = aKeys.length;
  if (bKeys.length !== len) {
    return false;
  }
  for (let i = 0; i < len; i += 1) {
    const key = aKeys[i];
    if (objA[key] !== objB[key]) {
      return false;
    }
  }
  return true;
}

export const noop = () => {};

export function isUndefined(value) {
  return value === undefined;
}
