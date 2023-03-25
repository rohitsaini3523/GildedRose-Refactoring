export class Item {
  constructor(
    public name: string,
    public sellIn: number,
    public quality: number
  ) {}
}

export class GildedRose {
  constructor(public items: Item[] = []) {}

  updateQuality() {
    for (let item of this.items) {
      if (item.name === "Sulfuras, Hand of Ragnaros") {
        continue;
      }

      item.sellIn--;
      let qualityChange = 1;

      if (item.name === "Aged Brie") {
        qualityChange = -1;
      }

      if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
        if (item.sellIn <= 0) {
          item.quality = 0;
        } else if (item.sellIn <= 5) {
          qualityChange = 3;
        } else if (item.sellIn <= 10) {
          qualityChange = 2;
        }
      } else if (item.sellIn <= 0) {
        qualityChange *= 2;
      }

      item.quality += qualityChange;

      if (item.quality > 50) {
        item.quality = 50;
      } else if (item.quality < 0) {
        item.quality = 0;
      }
    }
  }
}
