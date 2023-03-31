import { Item, GildedRose } from "./refactored";

test("Should foo", () => {
  const gildedRose = new GildedRose([new Item("foo", 0, 0)]);
  const items = gildedRose.updateQuality();
  expect(items[0].name).toBe("foo");
});
