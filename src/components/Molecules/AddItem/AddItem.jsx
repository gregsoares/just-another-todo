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
        <form
          onSubmit={() => handleAddItem(item)}
          onReset={() =>
            setItem({
              title: "",
              category: "",
              isActive: true,
            })
          }
        >
          <input
            className="mx-2 rounded-lg border border-gray-300"
            type="text"
            name="name"
            value={item.title}
            onChange={(e) => setItem({ title: e.target.value })}
          />
          <section className="justify-center p-1 m-1 items-center flex">
            <button
              className="mr-1 bg-green-400 shadow-sm rounded-lg border border-gray-300 p-2 text-sm"
              type="submit"
            >
              Save
            </button>
            <button
              className="mr-1 bg-gray-400 shadow-sm  rounded-lg border border-gray-300 p-2 text-sm"
              type="reset"
            >
              Clear
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
