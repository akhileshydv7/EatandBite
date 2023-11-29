import RestruantCard, { withPromptedLabel } from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import React from "react";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";
// import { Button } from '@mui/material';

const Body = () => {
    const [listOfRestraunts, setListOfRestraunts] = useState([]);
    const [filteredRestraunts, setFilteredRestraunts] = useState([]);
    const [searchText, setSearchText] = useState("");
    // const { loggedInUser, setUserName } = useContext(UserContext);
    const [ratedFilter, setRatedFilter] = useState(true);

    useEffect(() => {
        fetchData();
        // console.log(listOfRestraunts);
    }, []);

    const fetchData = async () => {
        // const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&page_type=DESKTOP_WEB_LISTING");
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        // optional chaining
        setListOfRestraunts(json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestraunts(json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const RestrauntCardHeading = withPromptedLabel(RestruantCard);

    // conditional rendering


    // const onlineStatus = useOnlineStatus();
    // if (onlineStatus === false) {
    //     return (<h1>You are offline</h1>)
    // }
    // console.log(listOfRestraunts)

    return listOfRestraunts?.length === 0 ? <Shimmer /> : (
        <div className="">
            <div className="flex items-center text-lg ">
                <div className="m-4 ml-10">
                    <input type="text" className=" border"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }} />
                    <button className="bg-gray-100 p-[3px]" onClick={() => {
                        const filteredRes = listOfRestraunts.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setFilteredRestraunts(filteredRes);
                        // setFilteredRestraunts(listOfRestraunts);
                    }} >Search</button>
                </div>
                <button className={!ratedFilter ? "border border-black rounded-2xl w-[10%] bg-gray-300" : "border rounded-2xl w-[10%] hover:bg-blue-50"}
                    onClick={() => {
                        setRatedFilter(!ratedFilter);
                        if (ratedFilter === true) {
                            // console.log("dhda");

                            setFilteredRestraunts(filteredRestraunts.filter(
                                (res) => (res.info.avgRating > 4)
                            ));
                        } else {
                            setFilteredRestraunts(listOfRestraunts);
                        }
                    }}>Ratings 4.0+</button>
                {/* <div className="mx-4">
                    <label>UserName : </label>
                    <input className="border border-black p-1"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div> */}
                {/* <Button>Top Rated Restraunts</Button> */}
            </div>
            <div className="flex flex-wrap gap-8 ml-10 mb-3">
                {filteredRestraunts?.map((res) =>
                // (<LinkContainer key={res.data.id} to={/restraunt/ + res.data.id}><RestruantCard  resData={res} /></LinkContainer>)
                // (<RestruantCard  resData={res} />)
                (<Link key={res.info.id} to={"/restraunt/" + res.info.id} className="w-[22%]">
                    {
                        res?.info?.aggregatedDiscountInfoV3?.header != null ? <RestrauntCardHeading resData={res} /> : <RestruantCard resData={res} />
                    }
                </Link>)
                )}
            </div>
        </div>

    )
}

export default Body;



// https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.498767&lng=78.53034&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9801436&lng=77.5685724&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING