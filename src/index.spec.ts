import { when } from "./index";

describe("decorator when", () => {
  it("should execute the method", () => {
    const fn = jest.fn();

    class Demo {
      @when(Demo.prototype.should)
      method() {
        fn.apply(this, arguments);
      }
      should() {
        return true;
      }
    }

    new Demo().method();

    expect(fn).toBeCalledTimes(1);
  });

  it("should not execute the method", () => {
    const fn = jest.fn();

    class Demo {
      @when(Demo.prototype.should)
      method() {
        fn.apply(this, arguments);
      }
      should() {
        return false;
      }
    }

    new Demo().method();

    expect(fn).toBeCalledTimes(0);
  });

  it("should work with getters and setters", () => {
    class Demo {
      @when(() => true)
      get prop() {
        return true;
      }
      set prop(x: any) {
        /* Empty */
      }
    }

    expect(new Demo().prop).toBe(true);
  });
});
