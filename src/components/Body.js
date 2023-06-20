import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6105073&lng=77.1145653&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    //optional chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    console.log(json)
  }

  const online = useOnline();

  if (!online) {
    return <h1>🔴You are Offline</h1>;
  }

  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex font-nunito justify-center p-6  bg-blue-900 my-4 py-16
      
      ">
        <input
          type="text"
          value={searchText}
          placeholder="Search here"
          className=" outline-none rounded-l-md h-12 text-base  pl-2 w-[25%]
          
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
          className="bg-red-100 px-4  rounded-r-md font-bold hover:bg-rose-200
          
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
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-10 mx-24  ">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
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
