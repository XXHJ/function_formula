interface Named {
  name: string;
}

class Person {
  name: string;
}

let p: Named;
// OK, because of structural typing
p = new Person();
console.log(p);

let x = (a: number) => 0;
let y = (b: number, s: string) => 0;

y = x; // OK
// x = y; // Error
console.log(y(5, "ss"));

enum Status {
  Ready,
  Waiting
}
enum Color {
  Red,
  Blue,
  Green
}

let statuss = Status.Ready;
// statuss = Color.Red;  // error

function padLeft(value: string, padding: any) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

padLeft("Hello world", 4); // returns "    Hello world"

// interface Bird {
//   fly();
//   layEggs();
// }

// interface Fish {
//   swim();
//   layEggs();
// }

// function getSmallPet(): Fish | Bird {
//   // ...
//   return;
// }

// let pet = getSmallPet();
// if ((<Fish>pet).swim) {
//   // (<Fish>pet).swim();
// } else {
//   // (<Bird>pet).fly();
// }

// function isFish(pet: Fish | Bird): pet is Fish {
//   return (<Fish>pet).swim !== undefined;
// }

// if (isFish(pet)) {
//   // pet.swim();
// } else {
//   // pet.fly();
// }

// 类型别名
type Name = string;
type FuncName = () => string;
type CntName = Name | FuncName;

function names(a: CntName): Name {
  if (typeof a == "string") {
    return a;
  }
  return a();
}
console.log(names(() => "let a"));
