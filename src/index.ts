function when (check: Function) {
  return function (target: any, name: string, descriptor: PropertyDescriptor) {
    if (descriptor.get) {
      descriptor.get = wrap(descriptor.get, check)
    }

    if (descriptor.set) {
      descriptor.set = wrap(descriptor.set, check)
    }

    if (descriptor.value) {
      descriptor.value = wrap(descriptor.value, check)
    }
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
