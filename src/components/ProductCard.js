const ProductCard = (props) => {
  const { resData } = props;
  const {
    name,
    brand,
    description,
    basePrice,
    thumbnailImage,
    productCategory,
  } = resData;
  return (
    <div className="res-card">
      <img className="res-image" alt="res-image" src={thumbnailImage} />
      <h4>{name}</h4>
      <h4>{brand}</h4>
      <p>{description}</p>
      <p>Rs. {basePrice}</p>
    </div>
  );
};

export default ProductCard;
