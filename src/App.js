import uuid from "react-uuid";
import { useState } from "react";
import AddItem from "./components/Molecules/AddItem";
import ItemList from "./components/organisms/ItemList";

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => setItems([...items, { id: uuid(), ...item }]);
  const handleItemClick = (id) =>
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      )
    );
  console.log(items);
  return (
    <section className="bg-gray-100 py-4 px-1">
      <AddItem handleAddItem={() => handleAddItem} />
      <ItemList items={items} onClick={handleItemClick} />
    </section>
  );
};

export default App;
