var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ge = /** @class */ (function () {
    function Ge(band) {
        this.band = band;
    }
    Ge.prototype.tuck = function () {
        return this.band;
    };
    return Ge;
}());
var ge = new Ge("ximengsi");
console.log(ge.tuck());
var G = /** @class */ (function (_super) {
    __extends(G, _super);
    function G() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    G.prototype.tick = function () {
        return this.tuck();
    };
    return G;
}(Ge));
var g = new G("zhiban");
console.log(g.tick());
