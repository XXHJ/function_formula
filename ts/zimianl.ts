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
