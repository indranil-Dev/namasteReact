const RestaurantCard = ( props ) => {

    resData = props?.resData;
  
    return (
      <div className="res-card">
        <img className="res-logo" src= { resData?.image }></img>
        <h3>{ resData?.name }</h3>
      </div>
    )
  };

  export default RestaurantCard;