import RestruantCard, { withPromptedLabel } from "./RestrauntCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import React from "react";
import { AppContext } from "..";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestraunts, setListOfRestraunts] = useState([]);
    const [filteredRestraunts, setFilteredRestraunts] = useState([]);
    const [searchText, setSearchText] = useState("");
    const { location } = useContext(AppContext);
    const [ratedFilter, setRatedFilter] = useState(true);
    // const { loggedInUser, setUserName } = useContext(UserContext);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://bloombasket.onrender.com/api/v1/all/resturent/${location}`);
            const json = await data.json();
            // console.log(json);
            // optional chaining
            setListOfRestraunts(json?.allResturent);
            setFilteredRestraunts(json?.allResturent);
        }
        fetchData();
    }, [location]);

    // [longitude, latitude]


    const RestrauntCardHeading = withPromptedLabel(RestruantCard);

    // conditional rendering
    // const onlineStatus = useOnlineStatus();
    // if (onlineStatus === false) {
    //     return (<h1>You are offline</h1>)
    // }

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
                    }} >Search</button>
                </div>
                <button className={!ratedFilter ? "border border-black rounded-2xl w-[10%] bg-gray-300" : "border rounded-2xl w-[10%] hover:bg-blue-50"}
                    onClick={() => {
                        setRatedFilter(!ratedFilter);
                        if (ratedFilter === true) {
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
            <div className="flex flex-wrap gap-8 ml-10 mb-3 ">
                {filteredRestraunts?.map((res) =>
                (<Link key={res.info.id} to={"/restraunt/" + res._id} className="w-[22%]">
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


