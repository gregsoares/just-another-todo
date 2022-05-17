import Title from "../../Atoms/Title";
import Text from "../../Atoms/Text";
import Button from "../../Atoms/Button";

const Item = ({ item, onClick, handleRemoveItem }) => {
  const { id, title, category, isActive } = item;
  return (
    <li className="flex" key={id}>
      <div className="py-8 px-8 max-w-sm mx-auto border border-gray-300 m-2 rounded-xl shadow-lg space-y-2 py-4 flex items-center space-y-0 space-x-6">
        <input
          type="checkbox"
          name="nameOfChoice"
          value="1"
          checked={isActive}
          onChange={() => onClick(id)}
          onClick={() => onClick(id)}
        />

        <div className="space-y-2 text-left">
          <div className="space-y-0.5 inline-block" onClick={() => onClick(id)}>
            <Title text={title} isActive={isActive} />
            <Text text={category} />
          </div>
          <div className="my-auto mx-2 inline-block">
            <Button text={"✔"} type="check" onClick={() => onClick(id)} />
            <Button
              onClick={() => handleRemoveItem(id)}
              text={"❌"}
              type="remove"
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Item;
