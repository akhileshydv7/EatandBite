// import { useContext, useState } from "react";
// import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
// import { LinkContainer } from "react-router-bootstrap";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";
import logo from './logo.png';

const Header = () => {
    // const [btnName, setbtnName] = useState("Login");
    // const liStyle = {
    //     textDecoration: "none",
    //     cursor: "pointer",
    //     color: "black"
    // };
    // console.log("okok")
    // const { loggedInUser } = useContext(UserContext);

    // const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between shadow-xl h-20 sticky top-0 bg-white ">
            <Link className="cursor-pointer w-20 " to="/" ><img src={logo} alt="uuu" /></Link>
            <ul className="flex m-8 font-normal text-xl items-center">
                {/* <li className="m-2">Onilne Status:{onlineStatus ? <i className='fa fa-check'></i> : <i className='fa fa-remove'></i>}</li> */}
                {/* <li>Onilne Status:{useOnlineStatus ? "true" : "false"}</li> */}
                {/* <li><Link to="/" className="m-2 " >Home</Link></li> */}
                <li><Link to="/about" className="m-2">About Us</Link></li>
                {/* <li><Link to="/grocery" className="m-2" >Grocery</Link></li> */}
                <li><Link to="/contact" className="m-2">Contact Us</Link></li>
                <li className="m-2" >Cart</li>
                {/* <button className=" m-2 py-4" onClick={() => {
                    btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
                }} >{btnName}</button> */}
                {/* <li className="m-2" >{loggedInUser}</li> */}
                {/* <Button variant="outlined" onClick={() => {
                    btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
                }}>{btnName}</Button> */}
            </ul>
        </div>
    )
}


export default Header;