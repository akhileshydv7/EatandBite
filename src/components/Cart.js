import { clearCart } from "../utils/Redux/cartSlice";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux"


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }



    return (
        <div className="text-center m-8 min-h-screen">
            <h1 className="font-bold text-4xl mb-2">Cart</h1>
            <div className="w-7/12 m-auto">
                <ItemList items={cartItems} />
            </div>

            <button className="mt-10 px-4 py-2 transition ease-in-out delay-150 
            hover:-translate-y-1 hover:scale-110  duration-300 bg-slate-100 
            font-bold rounded-lg hover:bg-slate-400"
                onClick={handleClearCart}>
                ClearCart
            </button>
        </div>
    )
}



export default Cart;