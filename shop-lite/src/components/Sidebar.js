import { useState } from "react";
import categories from "../data/categories";

function Sidebar({ onFilter }) {
  const [selected, setSelected] = useState([]);

  const toggleCategory = (category) => {
    setSelected((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="bg-light p-3 border rounded h-100">
      <h5>Categories</h5>
      <ul className="list-unstyled">
        {categories.map((category, idx) => (
          <li key={idx} className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id={`cat-${idx}`}
              value={category}
              onChange={() => toggleCategory(category)}
              checked={selected.includes(category)}
            />
            <label className="form-check-label " htmlFor={`cat-${idx}`}>
              {capitalize(category)}
            </label>
          </li>
        ))}
      </ul>
      <button
        className="btn btn-primary mt-3"
        onClick={() => onFilter(selected)}
      >
        Filter
      </button>
    </div>
  );
}

export default Sidebar;

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}
