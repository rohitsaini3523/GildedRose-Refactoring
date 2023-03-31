"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const refactored_1 = require("./refactored");
test("Should foo", () => {
    const gildedRose = new refactored_1.GildedRose([new refactored_1.Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
});
//# sourceMappingURL=refactored.test.js.map