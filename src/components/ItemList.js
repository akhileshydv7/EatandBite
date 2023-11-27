import { CLD_URL } from "../utils/constants";
const ItemLists = ({ lists }) => {
    // console.log(lists);
    return (
        <div>
            <div>
                {lists.map((item) => (
                    <div key={item.card.info.id} className=" p-2 m-2 border-gray-200 border-b-2 flex justify-between">
                        <div className=" w-9/12">
                            <h1 className="font-semibold text-xl">{item?.card?.info?.name}</h1>
                            <h3 className="font-medium mb-4"> ₹ {item?.card?.info?.price / 100}</h3>
                            <p className="text-sm mb-8">{item?.card?.info?.description}</p>
                        </div>
                        <div className="w-3/12 p-4 mt-4">
                            <img src={CLD_URL + item?.card?.info?.imageId} className="w-full" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ItemLists;