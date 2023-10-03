import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All")
      return item.name.toLowerCase().includes(search.toLowerCase());
    else {
      return (
        item.category === selectedCategory &&
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  });

  const handleAddingItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleAddingItem} />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={setSearch}
        search={search}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
