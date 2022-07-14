import { Item } from "./item";

export class Sulfuras extends Item {

    constructor(sellIn, quality) {
        super('Sulfuras, Hand of Ragnaros', sellIn, quality);
    }

    public updateQuality(): void {
        this.decrementQuality();
        this.decrementSellIn();
        if (this.sellIn < 0) {
            this.decrementQuality();
        }
    }

    protected decrementQuality() {
        // sulfuras never decrease in quality 
    }
}