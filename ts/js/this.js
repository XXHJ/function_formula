var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
var Hander = /** @class */ (function () {
    function Hander() {
        var _this = this;
        this.onClickBad = function (e) {
            console.log("dddd");
            _this.info = e;
        };
    }
    return Hander;
}());
var h = new Hander();
var UiElemt;
UiElemt.addEventListener("click", h.onClickBad);
