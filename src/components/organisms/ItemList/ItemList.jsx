import Item from "../Item/Item";

const ItemList = ({ items, onClick }) => {
  return (
    <ul className="list-reset">
      {items.map((item) => (
        <Item key={item.id} item={item} onClick={onClick} />
      ))}
    </ul>
  );
};

export default ItemList;
