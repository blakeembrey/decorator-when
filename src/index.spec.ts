import { spy } from 'sinon'
import { expect } from 'chai'
import when = require('./index')

describe('decorator when', () => {
  it('should execute the method', () => {
    const s = spy()

    class Demo {
      @when(Demo.prototype.should)
      method () {
        s.apply(this, arguments)
      }
      should () {
        return true
      }
    }

    new Demo().method()

    expect(s.callCount).to.equal(1)
  })

  it('should not execute the method', () => {
    const s = spy()

    class Demo {
      @when(Demo.prototype.should)
      method () {
        s.apply(this, arguments)
      }
      should () {
        return false
      }
    }

    new Demo().method()

    expect(s.callCount).to.equal(0)
  })
})
