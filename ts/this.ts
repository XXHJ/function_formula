// ts中的this
// 设置函数的类型
interface Card {
  suit: string;
  card: number;
}

interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function(this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  }
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

// 定义一个 Element 元素的类型

interface Element {
  addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Hander {
  info: Event;
  onClickBad = (e: Event) => {
    console.log("dddd");
    this.info = e;
  };
}

let h = new Hander();

let UiElemt: Element;

UiElemt.addEventListener("click", h.onClickBad);
