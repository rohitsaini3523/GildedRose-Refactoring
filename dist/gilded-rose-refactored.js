"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GildedRose = exports.Item = void 0;
class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}
exports.Item = Item;
class GildedRose {
    constructor(items = []) {
        this.items = items;
    }
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
                }
                else if (item.sellIn <= 5) {
                    qualityChange = 3;
                }
                else if (item.sellIn <= 10) {
                    qualityChange = 2;
                }
            }
            else if (item.sellIn <= 0) {
                qualityChange *= 2;
            }
            item.quality += qualityChange;
            if (item.quality > 50) {
                item.quality = 50;
            }
            else if (item.quality < 0) {
                item.quality = 0;
            }
            return this.items;
        }
    }
}
exports.GildedRose = GildedRose;
//# sourceMappingURL=gilded-rose-refactored.js.map