export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  //if name is Aged Brie, updateAgedBrie
  createItem() {
    if (this.name === "Aged Brie") {
      return new AgedBrie(this.name, this.sellIn, this.quality);
    }
    if (this.name === "Backstage passes to a TAFKAL80ETC concert") {
      return new BackstagePasses(this.name, this.sellIn, this.quality);
    }
    if (this.name === "Sulfuras, Hand of Ragnaros") {
      return new Sulfuras(this.name, this.sellIn, this.quality);
    }
    return new NormalItem(this.name, this.sellIn, this.quality);
  }
}

export class AgedBrie extends Item {
  updateAgedBrie() {
    if (this.quality < 50) {
      this.quality = this.quality + 1;
    }

    this.sellIn = this.sellIn - 1;

    if (this.sellIn < 0 && this.quality < 50) {
      this.quality = this.quality + 1;
    }
  }
}

export class BackstagePasses extends Item {
  updateBackstagePasses() {
    if (this.quality < 50) {
      this.quality = this.quality + 1;
      if (this.sellIn < 11 && this.quality < 50) {
        this.quality = this.quality + 1;
      }
      if (this.sellIn < 6 && this.quality < 50) {
        this.quality = this.quality + 1;
      }
    }
    this.sellIn = this.sellIn - 1;
    if (this.sellIn < 0) {
      this.quality = this.quality - this.quality;
    }
  }
}

export class NormalItem extends Item {
  updateNormal() {
    if (this.quality > 0) {
      this.quality = this.quality - 1;
    }

    this.sellIn = this.sellIn - 1;

    if (this.sellIn < 0 && this.quality > 0) {
      this.quality = this.quality - 1;
    }
  }
}

export class Sulfuras extends Item {
  updateSulfuras() {
    return;
  }
}

const specialItems = {
  BRIE: "Aged Brie",
  PASS: "Backstage passes to a TAFKAL80ETC concert",
  SULF: "Sulfuras, Hand of Ragnaros",
};

export class GildedRose {
  items: Array<Item>;
  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let item of this.items) {
      switch (item.name) {
        case specialItems.BRIE:
          const agedBrie = new AgedBrie(item.name, item.sellIn, item.quality);
          agedBrie.updateAgedBrie();
          continue;
        case specialItems.PASS:
          const backstagePasses = new BackstagePasses(item.name, item.sellIn, item.quality);
          backstagePasses.updateBackstagePasses();
          continue;
        case specialItems.SULF:
          const sulfuras = new Sulfuras(item.name, item.sellIn, item.quality);
          sulfuras.updateSulfuras();
          continue;
        default:
          const normalItem = new NormalItem(item.name, item.sellIn, item.quality);
          normalItem.updateNormal();
          continue;
      }
    }

    return this.items;
  }
}
