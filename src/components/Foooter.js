const Foooter = () => {
    return (
        <div className="bg-gray-800 h-60 mt-16 pt-20 relative w-full bottom-0">
            <div className="flex justify-center">
                <a className="pr-6"
                    href="https://github.com/akhileshydv7">
                    <img className=" w-7 h-7"
                        src="https://ghost32-bifrost.netlify.app/assets/icons/github.png"
                    />
                </a>
                <a className="pr-6"
                    href="mailto:akhileshyadav26620@gmail.com">
                    <img className="w-7 h-7"
                        src="https://www.kalashsharma.com/assets/gmail.png"
                    />
                </a>
                <a className="pr-6"
                    href="https://www.linkedin.com/in/akhileshyadav26/">
                    <img className=" w-7 h-7"
                        src="https://ghost32-bifrost.netlify.app/assets/icons/linkedin.png"
                    />
                </a>
            </div>
            <div
                className="flex flex-col items-center justify-center pt-7 text-white ">
                <small>Designed & built by akhileshyadav26</small>
                <small>© 2023 Swiggy_Clone. All rights reserved</small>
            </div>
        </div>
    )
}

export default Foooter;