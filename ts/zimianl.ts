type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
  animate(dx: number, dy: number, easing: Easing): number {
    if (easing === "ease-in") {
      // ...
      return 1;
    } else if (easing === "ease-out") {
      return 2;
    } else if (easing === "ease-in-out") {
      return 3;
    } else {
      // error! should not pass null or undefined.
      return 4;
    }
  }
}

let button = new UIElement();
console.log(button.animate(0, 0, "ease-in"));
// button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here

interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Circle {
  kind: "circle";
  radius: number;
}

type Format = Square | Rectangle | Circle;

function SST(a: Format): string | undefined {
  switch (a.kind) {
    case "circle":
      return "c";
    case "rectangle":
      return "r";
    case "square":
      return "s";
  }
}

SST({ kind: "square", size: 2 });
SST({ kind: "rectangle", width: 10, height: 20 });
SST({ kind: "circle", radius: 30 });


// 多态的 this类型 
