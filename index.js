/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */
const removeDuplicateItems = (items) => {
  const mySet = new Set(items);
  const array = Array.from(mySet);
  return array;
};

module.exports = removeDuplicateItems;
