import { Item, GildedRose } from "../app/gilded-rose-refactored";

describe("GildedRose", () => {
  test("should update item quality correctly", () => {
    const items = [
      new Item("foo", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      new Item("Conjured Mana Cake", 3, 6),
    ];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toBe(19);
    expect(gildedRose.items[0].sellIn).toBe(9);
    expect(gildedRose.items[1].quality).toBe(1);
    expect(gildedRose.items[1].sellIn).toBe(1);
    expect(gildedRose.items[2].quality).toBe(80);
    expect(gildedRose.items[2].sellIn).toBe(0);
    expect(gildedRose.items[3].quality).toBe(21);
    expect(gildedRose.items[3].sellIn).toBe(14);
    expect(gildedRose.items[4].quality).toBe(50);
    expect(gildedRose.items[4].sellIn).toBe(9);
    expect(gildedRose.items[5].quality).toBe(50);
    expect(gildedRose.items[5].sellIn).toBe(4);
    expect(gildedRose.items[6].quality).toBe(4);
    expect(gildedRose.items[6].sellIn).toBe(2);
  });
});
describe("GildedRose", () => {
  test('should handle "Conjured" items correctly', () => {
    const items = [
      new Item("Conjured Mana Cake", 10, 20),
      new Item("Conjured Bread", 5, 10),
    ];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toBe(18);
    expect(gildedRose.items[0].sellIn).toBe(9);
    expect(gildedRose.items[1].quality).toBe(8);
    expect(gildedRose.items[1].sellIn).toBe(4);
  });

  test('should handle "Sulfuras" items correctly', () => {
    const items = [
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
    ];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toBe(80);
    expect(gildedRose.items[0].sellIn).toBe(0);
    expect(gildedRose.items[1].quality).toBe(80);
    expect(gildedRose.items[1].sellIn).toBe(-1);
  });

  test('should handle "Aged Brie" items correctly', () => {
    const items = [
      new Item("Aged Brie", 10, 20),
      new Item("Aged Brie", -1, 50),
    ];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toBe(21);
    expect(gildedRose.items[0].sellIn).toBe(9);
    expect(gildedRose.items[1].quality).toBe(50);
    expect(gildedRose.items[1].sellIn).toBe(-2);
  });

  test('should handle "Backstage passes" items correctly', () => {
    const items = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 20, 30),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 48),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 48),
      new Item("Backstage passes to a TAFKAL80ETC concert", -1, 20),
    ];
    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();

    expect(gildedRose.items[0].quality).toBe(31);
    expect(gildedRose.items[0].sellIn).toBe(19);
    expect(gildedRose.items[1].quality).toBe(50);
    expect(gildedRose.items[1].sellIn).toBe(9);
    expect(gildedRose.items[2].quality).toBe(50);
    expect(gildedRose.items[2].sellIn).toBe(4);
    expect(gildedRose.items[3].quality).toBe(0);
    expect(gildedRose.items[3].sellIn).toBe(-2);
  });
});
