import { Item, GildedRose } from "./gilded-rose.js";

const obj = new GildedRose([
  new Item("+5 Dexterity Vest", 10, 20),
  new Item("Aged Brie", 2, 0),
]);

obj.updateQuality();
console.log(obj.items[1]);
