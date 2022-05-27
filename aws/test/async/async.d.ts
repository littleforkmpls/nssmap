declare global {

  export namespace Chai {

    interface LanguageChains {
      always: Assertion;
    }

    interface Assertion {
      async: Assertion;
      throw(): Assertion;
      throw(message: string): Assertion;
    }
  }
}

// @ts-ignore
declare const chaiAsync: (chai: ChaiStatic, utils: ChaiUtils) => void
declare namespace chaiAsync { }
export = chaiAsync;
