import { useState } from "react";
import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";
import logo from './logo.png';

const Header = () => {
    const [btnName, setbtnName] = useState("Login");
    // const { loggedInUser } = useContext(UserContext);
    // const onlineStatus = useOnlineStatus();


    return (
        <div className="flex justify-between shadow-xl h-20 sticky top-0 bg-white bg-opacity-75 z-10 backdrop-blur ">
            <Link className="cursor-pointer w-20 " to="/" ><img src={logo} alt="uuu" /></Link>
            {/* <Link className="cursor-pointer " to="/"><h3>Eat&Bite</h3></Link> */}
            <ul className="flex m-8 font-normal text-base items-center">
                {/* <li className="m-2">Onilne Status:{onlineStatus ? <i className='fa fa-remove'></i> : <i className='fa fa-remove'></i>}</li> */}
                {/* <li>Onilne Status:{useOnlineStatus ? "true" : "false"}</li> */}
                <li><Link to="/" className="m-2 hover:text-orange-600 hover:transition-all hover:duration-300 hover:ease-in-out " >Home</Link></li>
                <li><Link to="/about" className="m-2 hover:text-orange-600 hover:transition-all hover:duration-300 hover:ease-in-out ">About Us</Link></li>
                <li><Link to="/contact" className="m-2 hover:text-orange-600 hover:transition-all hover:duration-300 hover:ease-in-out ">Contact Us</Link></li>
                <li className="m-2 cursor-pointer hover:text-orange-600 hover:transition-all hover:duration-300 hover:ease-in-out " >Cart</li>
                <button className=" m-2 py-4 hover:text-orange-600 hover:transition-all hover:duration-300 hover:ease-in-out " onClick={() => {
                    btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
                }} >{btnName}</button>
            </ul>
        </div>
    )
}


export default Header;