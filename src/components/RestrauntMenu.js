import { useEffect, useState } from "react";
import React from "react";
import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import RestrauntCategories from "./RestrauntCategories";


const RestrauntMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    const [showIndex, setShowIndex] = useState(null);

    useEffect(() => {
        fetchMenu();
    });


    // useEffect(() => {
    //     localStorage.setItem('dataKey', JSON.stringify(resInfo));
    // }, [resInfo]);

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        // console.log(json?.resturent);
        setResInfo(json?.resturent);
    }

    const categories = resInfo?.menuData.filter((c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );


    // console.log(categories);
    // console.log(resInfo);
    if (resInfo === null)
        return <Shimmer />

    const { name, cuisines, costForTwo } = resInfo?.info;


    // console.log(categories);
    // console.log(itemCards);
    return (
        <div className="" >
            <div className="text-center ">
                <h1 className="font-bold text-2xl my-6">{name}</h1>
                <p className="font-bold text-lg mb-4" >{cuisines.join(",")} - {costForTwo}</p>
            </div>
            {categories.map((items, index) =>
                <RestrauntCategories
                    key={items.card.card.title}
                    data={items?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                />)}
        </div>
    )
}

export default RestrauntMenu;