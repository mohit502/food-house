import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import { addItem } from "../utils/cartSlice";
import useRestaurant from "../utils/useRestaurant";
import ShimmerBody from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  console.log(restaurant);
  return !restaurant ? (
    <ShimmerBody />
  ) : (
    <div className="menu flex">
      {/* <img src="" alt="" />
      <h1>{restaurant?.cards[0]?.card?.card?.info?.name}</h1>
      <h1>{restaurant?.cards[0]?.card?.card?.info?.id}</h1> */}

      <div className="m-6">
        <h2 className="text-4xl">
          {restaurant?.cards[0]?.card?.card?.info?.name}
        </h2>
        <img
          src={
            IMG_CDN_URL +
            restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h3 className="text-lg">
          {restaurant?.cards[0]?.card?.card?.info?.areaName},{" "}
          {restaurant?.cards[0]?.card?.card?.info?.city}
        </h3>
        <h3 className="text-lg">
          {restaurant?.cards[0]?.card?.card?.info?.avgRating} ⭐
        </h3>
        <h3 className="text-">
          {restaurant?.cards[0]?.card?.card?.info?.costForTwoMsg}
        </h3>
      </div>
      <div>
        <h1 className="text-2xl">Menu</h1>
        {/* <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li className="p-1" key={item.id}>
              {item.name} -{" "}
              <button className="bg-green-100 p-1" onClick={()=> addFoodItem(item)}>Add Item</button>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
