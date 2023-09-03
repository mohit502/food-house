import RestaurantCard from "./RestaurantCard";
import { restaurantList, restaurantCards } from "../config";
import { useState, useEffect, useContext } from "react";
import ShimmerBody from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurantDashboard from "../utils/useRestaurantDashboard";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);
  console.log("render");

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log("body ka json", json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //optional chaining
    setAllRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const online = useOnline();

  if (!online) {
    return <h1>🔴You are Offline</h1>;
  }

  // if (!allRestaurants) return null;

  return allRestaurants.length == 0 ? (
    <ShimmerBody />
  ) : (
    <>
      <div className="flex font-nunito justify-center p-6  md-4  py-1">
        <input
          type="text"
          value={searchText}
          placeholder="Search here.. [site under construction]"
          className=" outline-none  border border-black  rounded-l-md h-12 text-base  pl-2 w-[25%]
          
          "
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyUp={() => {
            const data = filterData(searchText, allRestaurants);

            setFilteredRestaurants(data);
          }}
        />
        <button
          data-testid="search-btn"
          className="bg-red-100  border border-black border-l-0 px-4  rounded-r-md font-bold hover:bg-rose-200
          
          hover:scale-105 transition-all duration-200 cursor-pointer
          "
          onClick={() => {
            const data = filterData(searchText, allRestaurants);

            setFilteredRestaurants(data);

            //filter()
          }}
        >
          Search
        </button>
      </div>

      <div className="grid   grid-cols-1 md:grid-cols-2 md:w-[750px] lg:grid-cols-3 lg:w-[1000px] xl:grid-cols-5 xl:w-[1400px] justify-center gap-5 mx-auto w-[300px]  ">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              className=""
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
            <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

/* .filter((restraunt)=> {
          return searchText.toLowerCase() = '' ? restraunt : restraunt.data.name.toLowerCase().includes(searchText);
        })
*/

export default Body;
