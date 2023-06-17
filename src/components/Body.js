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

  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);
  console.log("render");

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    //optional chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
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
      <div className="flex justify-center p-6 bg-rose-50 my-4">
        <input
          type="text"
          value={searchText}
          placeholder="Search here"
          className="outline-none h-18 rounded-md"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          data-testid = "search-btn"
          className="bg-rose-400 px-4 mx-5 rounded-md hover:bg-red-900"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);

            setFilteredRestaurants(data);

            //filter()
          }}
        >
          Search
        </button>
        <input value={user.name} onChange={
          e => setUser({
            name: e.target.value,
            email: "newemail@gmail.com"
          })
        }></input>
      </div>
      <div className="flex flex-wrap justify-center-center">
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
