//a file to keep helper function


export function filterData(searchText, allRestaurants) {
  const filteredData = allRestaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filteredData;

  //   const filterData = restaurants.filter((restaurant) =>
  //     restaurant.data.name.includes(searchText)
  //   );

  //   return filterData;
}

