"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gilded_rose_1 = require("./gilded-rose");
test("Should foo", () => {
    const gildedRose = new gilded_rose_1.GildedRose([new gilded_rose_1.Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
});
//# sourceMappingURL=gilded-rose.test.js.map