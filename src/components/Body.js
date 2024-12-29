import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
const Body = () => {
  //State variable - Super powerful variable

  const [listOfRestraunt, setListOfRestraunt] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/recipes");
    const json = await data?.json();
    setListOfRestraunt(json?.recipes);
  };

  return listOfRestraunt?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button type="button" className="search-button" onClick={() => {
            setListOfRestraunt(
              listOfRestraunt.filter((res) => {
                return res?.name?.toLowerCase()?.includes(searchText?.toLowerCase())} )
            );
            }}>Search</button>
          <button type="button" className="search-button" onClick={() => { fetchData() }}>Reset</button>
        </div>
        <button
          className="filter-btn"
          type="button"
          onClick={() => {
            setListOfRestraunt(
              listOfRestraunt.filter((res) => Number(res?.rating) > 4.5)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestraunt.map((restraunt) => (
          <RestaurantCard key={restraunt?.id} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
