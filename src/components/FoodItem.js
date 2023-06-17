import { IMG_CDN_URL } from "../config";


const FoodItem = ({
  name,
  description,
  cloudinaryImageId,
  price,
}) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-rose-50 ">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h2>{description}</h2>
      <h3>Rupees: {price/100}</h3>
    </div>
  );
};

export default FoodItem;
