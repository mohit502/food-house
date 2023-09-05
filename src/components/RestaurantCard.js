import { IMG_CDN_URL } from "../config";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import {MdStars} from "react-icons/md"

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRatingString,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-full font-nunito  hover:border hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer p-2  ">
      <img className="w-full rounded-xl" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl mt-2">{name}</h2>
      <h4 className="flex items-center"><MdStars className="text-logo-color-lite"/><span className="ml-1 font-semibold">{avgRatingString}</span> </h4>
      <h3 className="text-sm">{cuisines.join(", ")}</h3>
    </div>
  );
};

export default RestaurantCard;
