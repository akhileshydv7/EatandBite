import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";
import logo from './logo.png';
import { useSelector } from "react-redux"
import { AppContext } from "..";


const Header = () => {
    const [btnName, setbtnName] = useState("Login");
    // const { loggedInUser } = useContext(UserContext);
    // const onlineStatus = useOnlineStatus();
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);
    const { setLongitude, setLatitude } = useContext(AppContext)

    const locationList = [
        { label: "Lucknow", value: JSON.stringify({ latitude: 26.8310467, longitude: 80.9243877 }) },
        { label: "Varanasi", value: JSON.stringify({ latitude: 25.3270644, longitude: 82.9862236 }) },
        { label: "Hyderabad", value: JSON.stringify({ latitude: 17.497481, longitude: 78.531138 }) },
        { label: "Mumbai", value: JSON.stringify({ latitude: 18.9690247, longitude: 72.8205292 }) },
        { label: "Delhi", value: JSON.stringify({ latitude: 28.6428915, longitude: 77.2190894 }) },
    ]
    const handleLocationChange = (e) => {
        // console.log("eeeee", e.target.value);
        const { latitude, longitude } = JSON.parse(e.target.value)
        setLongitude(longitude)
        setLatitude(latitude)
    }

    return (
        <div className="flex justify-between shadow-xl h-20 sticky top-0 bg-white bg-opacity-75 z-10 backdrop-blur ">
            <div className="ml-4 w-240 flex flex-row">
                <Link className="cursor-pointer w-20 animate-pulse" to="/" ><img src={logo} alt="uuu" /></Link>
                <select onChange={handleLocationChange} className="ml-12 mt-7 border-none h-6 text-base cursor-pointer w-fit items-center outline-none bg-inherit">
                    {locationList?.map(e => (
                        <option key={e?.label} value={e.value} >{e.label}</option>
                    ))
                    }
                    {/* <option>Delhi</option>
                    <option>Hyderabad</option>
                    <option>Mumbai</option>
                    <option>Varanasi</option> */}
                </select>
            </div>
            <ul className="flex m-8 font-normal text-base items-center">
                {/* <li className="m-2">Onilne Status:{onlineStatus ? <i className='fa fa-remove'></i> : <i className='fa fa-remove'></i>}</li> */}
                {/* <li>Onilne Status:{useOnlineStatus ? "true" : "false"}</li> */}
                <li><Link to="/" className="m-2 hover:text-orange-600 hover:transition-all hover:duration-300 hover:ease-in-out " >Home</Link></li>
                <li><Link to="/about" className="m-2 hover:text-orange-600 hover:transition-all hover:duration-300 hover:ease-in-out ">About Us</Link></li>
                <li><Link to="/faq" className="m-2 hover:text-orange-600 hover:transition-all hover:duration-300 hover:ease-in-out ">FAQ</Link></li>
                <li>
                    <Link to="/cart" className="m-2 cursor-pointer hover:text-orange-600 hover:transition-all hover:duration-300 hover:ease-in-out ">
                        Cart{
                            cartItems.length > 0 &&
                            (<span className="text-orange-600 font-semibold">
                                ({cartItems.length})
                            </span>)}
                    </Link>
                </li>
                <button className=" m-2 py-4 hover:text-orange-600 hover:transition-all hover:duration-300 hover:ease-in-out " onClick={() => {
                    btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
                }} >{btnName}</button>
            </ul>
        </div>
    )
}


export default Header;