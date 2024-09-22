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
    <div className="border-2 hover:shadow-lg shadow-blue-500/50 rounded-lg w-80 overflow-hidden">
      <div className="w-full h-48 p-4">
        <img
          className="w-full h-full object-cover"
          alt="res-image"
          src={thumbnailImage}
        />
      </div>
      <div className="space-y-2 p-4">
        <h4 className="text-lg font-bold line-clamp-1">{name}</h4>
        <h4 className="text-md font-bold">{brand}</h4>
        <p className="line-clamp-2 text-gray-800 text-sm">{description}</p>
        <p className="bold text-right">Rs. {basePrice}</p>
      </div>
    </div>
  );
};

export default ProductCard;
