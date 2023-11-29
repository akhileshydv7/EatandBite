import { FAQ_LIST } from "../utils/constants";

const FAQ = () => {

    // const hide = 'max-h-0 mb-2 overflow-hidden transition-all duration-300';
    // const show = 'max-h-[200px] mb-2 overflow-hidden transition-all duration-300';
    // const closed = 'w-6 transition-transform duration-200 ease-in rotate-0';
    // const opened = 'w-6 transition-transform duration-200 ease-in rotate-90';

    // const answerClass = isOpen ? show : hide;
    // const toggleIconClass = isOpen ? opened : closed;
    return (
        <div className="container text-stone-700 mt-8">
            <h1 className="font-bold text-3xl mb-10 underline text-orange-600 text-center">
                Frequently Asked Questions
            </h1>
            <ul className="mx-32">
                {
                    FAQ_LIST?.map((data, index) => (
                        <li>
                            <h1>{index}</h1>
                            <h2>{data.Question}</h2>
                            <p>{data.Answer}</p>
                        </li>
                    ))
                }

            </ul>
        </div >
    )
}


export default FAQ;