
function Filter({ onCategoryChange, selectedCategory }) {
    return (
      <select name="filter" value={selectedCategory} onChange={onCategoryChange}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    );
  }
  export default Filter;
  