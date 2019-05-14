// class get / set

class At {
  private _foo: string;
  private _bar: string;
  //   constructor(foo: string, bar: string) {
  //     this._foo = foo;
  //     this._bar = bar;
  //   }

  get foo(): string {
    return this._foo;
  }
  get bar(): string {
    return this._bar;
  }

  set foo(_foo: string) {
    this._foo = _foo;
  }
  set bar(_bar: string) {
    this._bar = _bar;
  }
}

let at = new At();
console.log(at.bar);
console.log(at.foo);
at.bar = "hihao";
at.foo = "ledng";
console.log(at.bar);
console.log(at.foo);
