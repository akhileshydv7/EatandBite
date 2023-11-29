import { addItem } from "../utils/Redux/cartSlice";
import { CLD_URL } from "../utils/constants";
import { useDispatch } from "react-redux";


const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }


    return (
        <div>
            {items?.map((item) => (
                <div key={item.card.info.id} className=" p-2 m-2 border-gray-200 border-b-2 flex justify-between">
                    <div className=" w-9/12">
                        <h1 className="font-semibold text-xl">{item?.card?.info?.name}</h1>
                        <h3 className="font-medium mb-4"> ₹ {item?.card?.info?.price / 100}</h3>
                        <p className="text-sm mb-8">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12 p-4 mt-4">
                        <img src={CLD_URL + item?.card?.info?.imageId} className="w-full" alt="ok" />
                        <button className="ml-12 mt-4 px-3 py-2 transition ease-in-out delay-150 
            hover:-translate-y-1 hover:scale-110  duration-300 bg-slate-100 
            font-bold rounded-lg hover:bg-slate-400"
                            onClick={() => handleAddItem(item)}
                        >
                            Add+
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;