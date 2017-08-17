// https://www.typescriptlang.org/docs/handbook/generics.html

export const map = <T, U>(fun: (a: T) => U) => (coll: T[]): U[] => {
  const result: U[] = [];
  for (const item of coll) {
    result.push(fun(item));
  }
  return result;
};

export const filter = <T>(fun: (a: T) => boolean) => (coll: T[]): T[] => {
  const result: T[] = [];
  for (const item of coll) {
    if (fun(item)) {
      result.push(item);
    }
  }
  return result;
};

export const reduce = <T, U>(fun: (a: U, b: T) => U) => (
  initialUal: U,
  coll: T[]
): U => {
  let result: U = initialUal;
  for (const item of coll) {
    result = fun(result, item);
  }
  return result;
};

export const contains = <T>(fun: (a: T) => boolean) => (arr: T[]): boolean => {
  for (const e of arr) {
    if (fun(e)) {
      return true;
    }
  }
  return false;
};

export const unique = <T>(coll: T[]): T[] => {
  return reduce<T, T[]>((x, y) => (contains(e => e === y)(x) ? x : [...x, y]))(
    [],
    coll
  );
};

export const max = <T>(arr: T[]) => {
  if (arr.length === 0) {
    throw new Error('max of empty array');
  } else {
    return reduce((x, y) => (x > y ? x : y))(arr[0], arr);
  }
};
