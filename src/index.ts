function when (check: Function) {
  return function (value: any, name: string, descriptor: PropertyDescriptor) {
    descriptor.value = wrap(descriptor.value, check)
  }
}

function wrap <T> (fn: (...args: any[]) => T, check: Function): (...args: any[]) => T | void {
  return function () {
    if (check.apply(this, arguments)) {
      return fn.apply(this, arguments)
    }
  }
}

export = when
