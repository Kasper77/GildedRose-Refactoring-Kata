import { Item } from "./item";

export class Backstage extends Item {

    constructor(sellIn, quality) {
        super('Backstage passes to a TAFKAL80ETC concert', sellIn, quality);
    }

    public updateQuality(): void {
        if (this.quality < 50) {
            this.quality = this.quality + 1;
            if (this.sellIn < 11) {
                this.incrementQuality();
            }
            if (this.sellIn < 6) {
                this.incrementQuality();
            }
        }
        this.decrementSellIn();
        if (this.sellIn < 0) {
            this.quality = this.quality - this.quality;
        }
    }
}