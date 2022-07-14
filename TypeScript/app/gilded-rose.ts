import { Item } from "./item";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  // TODO: CQS smell!
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      let cheese = this.items[i];
      cheese.updateQuality();
    }
    return this.items;
  }
}