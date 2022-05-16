const ItemCard = ({ item, onClick }) => {
  const { name } = item;
  return (
    <div
      className="border items-center justify-between py-4 pr-10 pl-4 text-md text-gray-700"
      onClick={onClick}
    >
      <div className="item-card__name">{name}</div>
    </div>
  );
};

export default ItemCard;
