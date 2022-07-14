export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    public updateQuality(): void { };

    protected decrementSellIn() {
        this.sellIn = this.sellIn - 1;
    }

    protected decrementQuality() {
        if (this.quality > 0) {
            this.quality = this.quality - 1;
        }
    }

    protected incrementQuality() {
        if (this.quality < 50) {
            this.quality = this.quality + 1;
        }
    }
}