import { AgedBrie } from '@/aged-brie';
import { Backstage } from '@/backstage';
import { GildedRose } from '@/gilded-rose';
import { Item } from "@/item"
import { Sulfuras } from '@/Sulfuras';

describe('Gilded Rose for regular cheese', () => {
  it('should make sure the quality degreades normally if sellIn is greater than 10', () => {
    const gildedRose = new GildedRose([new Item('Gorzonzola', 15, 10)]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe('Gorzonzola');
    expect(items[0].quality).toBe(9);
  });

  it('should make sure the quality degreades twice as fast once the sellIn date has passed', () => {
    const gildedRose = new GildedRose([new Item('Gorzonzola', 0, 10)]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe('Gorzonzola');
    expect(items[0].quality).toBe(8);
  });

});

describe('Gilded Rose for special brended cheese', () => {
  it('should make sure the quality of `Aged Brie` increases in quality the older it gets', () => {
    const gildedRose = new GildedRose([new AgedBrie(11, 10)]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe('Aged Brie');
    expect(items[0].quality).toBe(11);
  });

  it('should make sure the quality of `Aged Brie` increases twice in quality the older it gets', () => {
    const gildedRose = new GildedRose([new AgedBrie(0, 10)]);
    
    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe('Aged Brie');
    expect(items[0].quality).toBe(12);
  });

  it('should make sure the quality of `Sulfuras, Hand of Ragnaros` never decreases in quality', () => {
    const gildedRose = new GildedRose([new Sulfuras(0, 10)]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe('Sulfuras, Hand of Ragnaros');
    expect(items[0].quality).toBe(10);
  });

  it('should make sure the quality of `Backstage passes` increases by 1 if sellIn > 10', () => {
    const gildedRose = new GildedRose([new Backstage(11, 10)]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].quality).toBe(11);
  });

  it('should make sure the quality of `Backstage passes` increases by 2 if sellIn <= 10', () => {
    const gildedRose = new GildedRose([new Backstage(9, 10)]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].quality).toBe(12);
  });

  it('should make sure the quality of `Backstage passes` increases by 3 when sellIn <= 5', () => {
    const SELLIN_QUALITY_THREESHOLD = 5;
    const gildedRose = new GildedRose([new Backstage(SELLIN_QUALITY_THREESHOLD, 10)]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].quality).toBe(13);
  });

  it('should make sure the quality of `Backstage passes` degredes (i.e.: quality = 0) when sellIn expires (i.e.: negative)', () => {
    const SELLIN_QUALITY_THREESHOLD = 5;
    const gildedRose = new GildedRose([new Backstage(-1, 10)]);

    const items = gildedRose.updateQuality();

    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].quality).toBe(0);
  });

});
