import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurants] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    setRestaurants(json.data);
    console.log(json);
  }

  return restaurant;
};

export default useRestaurant;
