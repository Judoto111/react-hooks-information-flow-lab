import React from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items, onCategoryChange, selectedCategory }) {
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <Filter
        onCategoryChange={onCategoryChange}
        selectedCategory={selectedCategory}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
export default ShoppingList;
