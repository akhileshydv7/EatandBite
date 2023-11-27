// import { useState } from "react";
import ItemLists from "./ItemList";

const RestrauntCategories = ({ data, showItems, setShowIndex }) => {
    // console.log(data);
    // const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
        setShowIndex();
    };


    return (
        <div>
            <div className="w-7/12 mx-auto my-4 bg-gray-100 p-4 border-gray-200 border-b-2">
                <div className=" cursor-pointer flex justify-between "
                    onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
                    <span className="text-lg">{"⬇️"}</span>
                </div>
                <div>
                    {showItems && <ItemLists lists={data.itemCards} />}
                </div>
            </div>
        </div>
    )
}

export default RestrauntCategories;