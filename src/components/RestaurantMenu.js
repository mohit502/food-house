import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import { addItem } from "../utils/cartSlice";
import useRestaurant from "../utils/useRestaurant";
import ShimmerBody from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menuItems = [ {
    name: "IceCream",
    price: 100,
  },
  {
    name: "Pav Bhaaji",
    price: 200,}]

  const restaurant = useRestaurant(resId);

  const items = restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemcards
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  console.log(restaurant);
  return !restaurant ? (
    <ShimmerBody />
  ) : (
    <div className="menu flex flex-col justify-center">
      {/* <img src="" alt="" />
      <h1>{restaurant?.cards[0]?.card?.card?.info?.name}</h1>
      <h1>{restaurant?.cards[0]?.card?.card?.info?.id}</h1> */}

      <div className="m-6 ">
        <h2 className="text-4xl">
          {restaurant?.cards[0]?.card?.card?.info?.name}
        </h2>
        <img
          src={
            IMG_CDN_URL +
            restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId
          } className="h-[300px] w-[300px] object-cover"
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
          {Object.values(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemcards).map((item) => (
            <li className="p-1" key={item?.card?.info?.id}>
              {item?.card?.info?.name} -{" "}
              {/* <button className="bg-green-100 p-1" onClick={()=> addFoodItem(item)}>Add Item</button> 
            </li
          </div>))} </ul> */}
        <ul>
          {menuItems.map((item) => (
            <li className="p-1" key={item?.name}>
              {item?.name} - Rs {item?.price} 
               <button className="bg-green-100 p-1" onClick={()=> addFoodItem(item)}>Add Item</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
