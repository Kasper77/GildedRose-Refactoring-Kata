import { Item } from "./item";

export class AgedBrie extends Item {

    constructor(sellIn, quality) {
        super('Aged Brie', sellIn, quality);
    }

    public updateQuality(): void {
        this.incrementQuality();
        this.decrementSellIn();
        if (this.sellIn < 0) {
            this.incrementQuality();
        }
    }
}