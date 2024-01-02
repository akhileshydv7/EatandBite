import { CLD_URL } from "../utils/constants";

const RestruantCard = (props) => {
    const { resData } = props;
    console.log(resData);
    const { name, costForTwo, avgRating, cuisines, cloudinaryImageId } = resData?.info;
    return (
        <div className=" transition-all duration-150 hover:scale-95 rounded-md ">
            <div className="p-4">
                <img className="rounded-lg " src={CLD_URL + cloudinaryImageId} alt="ok" />
            </div>

            <h2 className="font-bold text-lg px-4 whitespace-nowrap overflow-hidden text-ellipsis">{name}</h2>
            <h3 className="whitespace-nowrap px-4 overflow-hidden text-ellipsis">{cuisines.join(", ")}</h3>
            <h3 className="px-4" >★{avgRating}</h3>
            <h3 className="px-4" >{costForTwo} </h3>
            {/* <h3 className="px-4 pb-3" >{resData?.info?.deliveryTime} minutes.</h3> */}
        </div>
    )
}


export const withPromptedLabel = (RestruantCard) => {
    return (props) => {
        const { resData } = props;
        return (
            <div>
                <label className="absolute text-white font-extrabold ml-5 mt-[8.6rem] text-xl">
                    {resData?.info?.aggregatedDiscountInfoV3?.header}
                    {resData?.info?.aggregatedDiscountInfoV3?.subHeader}
                </label>
                <RestruantCard {...props} />
            </div>
        )
    }
}
export default RestruantCard;