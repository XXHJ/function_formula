// 基础类
class Ge {
  band: string;
  constructor(band: string) {
    this.band = band;
  }
  tuck(): string {
    return this.band;
  }
}
let ge = new Ge("ximengsi");
console.log(ge.tuck());

// 实现继承
class G extends Ge {
  tick(): string {
    return this.tuck();
  }
}
let g = new G("zhiban");
console.log(g.tick());
