import { useState } from "react";
import Title from "../../Atoms/Title";

const AddItem = ({ handleAddItem }) => {
  const [item, setItem] = useState({
    title: "",
    category: "",
    isActive: true,
  });
  return (
    <div className="add-item px-auto mx-1 flex justify-center items-center ">
      <div className="add-item__container px-4 py-4 rounded-xl shadow-lg">
        <Title text="Item" />
        <form onSubmit={() => handleAddItem(item)}>
          <input
            className="mx-2 rounded-lg border border-gray-300"
            type="text"
            name="name"
            value={item.title}
            onChange={(e) => setItem({ title: e.target.value })}
          />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
