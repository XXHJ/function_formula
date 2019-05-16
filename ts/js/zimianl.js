var UIElement = /** @class */ (function () {
    function UIElement() {
    }
    UIElement.prototype.animate = function (dx, dy, easing) {
        if (easing === "ease-in") {
            // ...
            return 1;
        }
        else if (easing === "ease-out") {
            return 2;
        }
        else if (easing === "ease-in-out") {
            return 3;
        }
        else {
            // error! should not pass null or undefined.
            return 4;
        }
    };
    return UIElement;
}());
var button = new UIElement();
console.log(button.animate(0, 0, "ease-in"));
// button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here
