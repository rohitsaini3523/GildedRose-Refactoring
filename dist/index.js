"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gilded_rose_js_1 = require("./gilded-rose.js");
const obj = new gilded_rose_js_1.GildedRose([
    new gilded_rose_js_1.Item("+5 Dexterity Vest", 10, 20),
    new gilded_rose_js_1.Item("Aged Brie", 2, 0),
]);
obj.updateQuality();
console.log(obj.items[1]);
//# sourceMappingURL=index.js.map