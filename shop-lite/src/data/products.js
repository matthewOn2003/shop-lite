// src/data/products.js

import categories from "./categories";

/** @typedef {Object} Product
 *  @property {number} id
 *  @property {string} name
 *  @property {string} category
 *  @property {number} price
 *  @property {string} imageUrl
 */

/** @type {Product[]} */
const products = [];


let idCounter = 1;

for (const category of categories) {
  for (let i = 1; i <= 12; i++) {
    const paddedIndex = String(i).padStart(2, '0');
    const name = `${capitalize(category)} Sample`;
    const imageUrl = `/assets/img/${category}-${paddedIndex}.png`;

    products.push({
      id: idCounter++,
      name,
      category,
      price: randomPrice(100, 999), // 你可以换成固定价格
      imageUrl,
    });
  }
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function randomPrice(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default products;
