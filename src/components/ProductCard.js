const ProductCard = (props) => {
  const { resData } = props;
  const { name, brand, description, basePrice, thumbnailImage } = resData;
  return (
    <div className="res-card">
      <img className="res-image" alt="res-image" src={thumbnailImage} />
      <h3>{name}</h3>
      <h4>{brand}</h4>
      <h4>{description}</h4>
      <h4>Rs. {basePrice}</h4>
    </div>
  );
};

export default ProductCard;
