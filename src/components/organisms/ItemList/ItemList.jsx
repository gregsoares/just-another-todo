import Item from "../Item/Item";

const ItemList = ({ items, onClick, handleRemoveItem }) => {
  return (
    <ul className="list-reset">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onClick={onClick}
          handleRemoveItem={handleRemoveItem}
        />
      ))}
    </ul>
  );
};

export default ItemList;
