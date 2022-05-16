import Title from "../../Atoms/Title";
import Text from "../../Atoms/Text";

const Item = ({ item, onClick }) => {
  const { id, title, category, isActive } = item;
  return (
    <li className="flex" onClick={() => onClick(id)} key={id}>
      <div className="py-8 px-8 max-w-sm mx-auto border border-gray-300 m-2 rounded-xl shadow-lg space-y-2 py-4 flex items-center space-y-0 space-x-6">
        <input
          type="checkbox"
          name="nameOfChoice"
          value="1"
          checked={!isActive}
        />

        <div className="space-y-2 text-left">
          <div className="space-y-0.5">
            <Title text={title} />
            <Text text={category} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Item;
