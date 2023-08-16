import styles from "./Favorite.module.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import OneFavorite from "./OneFavorite";

function Favorite() {

  const favorite = useSelector((state: RootState) => state.user.favorite)


  

  return (
    <div className={styles.favorite_main}>
      {favorite.map((item)=>{
        return <OneFavorite  userImage={item.user.image} 
        firstName={item.user.firstName} 
        lastName={item.user.lastName}
        data={item.date.slice(0,10)}
        id={item._id}
        text={item.text}
        image={item.image.map(imag=> imag.path)}
        />
      })}
    </div>
  );
}

export default Favorite;