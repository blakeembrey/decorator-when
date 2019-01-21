export type WhenPropertyDescriptor<T, A extends any[], R> =
  | {
      value?: (this: T, ...args: A) => R | void;
    }
  | {
      get?: (this: T) => R | void;
    }
  | {
      set?: (this: T, ...args: A) => R | void;
    };

export function when<T, A extends any[], R>(
  check: (this: T, ...args: A) => boolean
) {
  return function(
    target: any,
    name: string,
    descriptor: WhenPropertyDescriptor<T, A, R>
  ) {
    if ("get" in descriptor) {
      descriptor.get = wrap(descriptor.get!, check);
    }

    if ("set" in descriptor) {
      descriptor.set = wrap(descriptor.set!, check);
    }

    if ("value" in descriptor) {
      descriptor.value = wrap(descriptor.value!, check);
    }
  };
}

export function wrap<T, A extends any[], R>(
  fn: (this: T, ...args: A) => R,
  check: (this: T, ...args: A) => boolean
) {
  return function(this: T, ...args: A): R | void {
    if (check.apply(this, args)) {
      return fn.apply(this, args);
    }
  };
}
