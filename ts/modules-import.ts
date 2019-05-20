import { OB } from "./modules-export";

class Ob implements OB {
  is(s: string): boolean {
    return false;
  }
}
console.log(new Ob().is("ss"));

declare module "*!text" {
  const content: string;
  export default content;
}
// Some do it the other way around.
declare module "json!*" {
  const value: any;
  export default value;
}

import fileContent from "./xyz.txt!text";
import data from "json!http://example.com/data.json";
console.log(data, fileContent);
