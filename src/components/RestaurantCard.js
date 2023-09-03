import { IMG_CDN_URL } from "../config";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRatingString,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-full font-nunito  hover:border hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer p-2  ">
      <img className="w-full " src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3 className="text-sm">{cuisines.join(", ")}</h3>
      <h4>{avgRatingString} 🌟</h4>
    </div>
  );
};

export default RestaurantCard;
