import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchData } from '../../../Redux/Actions';
import { FaArrowRight } from 'react-icons/fa6';

const SectionTwo = () => {
    const { id } = useParams();
    // const [details, setDetails] = useState([]);  
    const { data: details, } = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const [singlePage, setSinglePage] = useState({});

    // Fetch data on mount if not already in Redux store
    useEffect(() => {
        if (details.length === 0) {
            dispatch(fetchData());
        }
    }, [dispatch, details.length]);

    useEffect(() => {
        if (details && details.length > 0) {
            const findDetails = details.find((data) => data.id === id);
            setSinglePage(findDetails);
        }
    }, [details, id]);

    const style = {
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 0, rgba(0, 0, 0, 0.7) 60%,
        rgba(0, 0, 0, 0.7) 100%), url(https://belkins.io/assets/industries-bg-Ye9cTnCR.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    const [selectedOption, setSelectedOption] = useState('option1');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);

    }
    return (
        <div className='h-fit md:h-[] p-8  flex justify-center' >
            <div className='h-auto w-[96%] mt-28 p-5 pb-20 rounded-3xl  flex justify-center' style={style}>
                <div className='w-[]  mt-10 flex flex-col justify-center items-center'>
                    <h1 className='text-6xl text-white text-center font-bold  w-[70%]'>
                        Get new opportunities
                        from LinkedIn regularly
                    </h1>
                    <div className='w-full  flex justify-center p-4'>
                        <p className='text-white text-lg w-[35%] text-center'>
                            with our complex LinkedIn outreach service
                            that solves your lead gen challenges.
                        </p>
                    </div>


                    <div className='w-[90%] h-auto bg-[#1F1F1F] rounded-2xl mt-7 p-12 flex flex-row space-x-5 justify-center'>
                        <div className=' w-[50%] h-auto  flex flex-col justify-center'>
                            {/* <!-- Radio inputs --> */}
                            <input
                                type="radio"
                                id="p1"
                                name="paragraphs"
                                value="option1"
                                onChange={handleOptionChange}
                                className="hidden peer"
                                checked={selectedOption === 'option1'}
                            />
                            <label
                                htmlFor="p1"
                                className={`block text-white text-xl p-4 cursor-pointer
                        ${selectedOption === 'option1' ? 'bg-[#292929] border-l-4 border-l-[#FF5E00] rounded-lg' : 'hover:border-l-2'}
                    `}
                            >
                                Inadequate result from current prospecting strategy.
                            </label>

                            <input
                                type="radio"
                                id="p2"
                                name="paragraphs"
                                value="option2"
                                onChange={handleOptionChange}
                                className="hidden peer "
                            />
                            <label
                                htmlFor="p2"
                                className={`block text-white text-xl p-4 cursor-pointer
                        ${selectedOption === 'option2' ? 'bg-[#292929] border-l-4 border-l-[#FF5E00] rounded-lg' : 'hover:border-l-2 '}
                    `}
                            >
                                Poor Engagement with your linkedIn Messages
                            </label>

                            <input
                                type="radio"
                                id="p3"
                                name="paragraphs"
                                value="option3"
                                onChange={handleOptionChange}
                                className="hidden peer mt-4"
                            />
                            <label
                                htmlFor="p3"
                                className={`block text-white text-xl p-4 cursor-pointer
                        ${selectedOption === 'option3' ? 'bg-[#292929] border-l-4 border-l-[#FF5E00] rounded-lg' : ' hover:border-l-2'}
                    `}
                            >
                                Hard to get prospects attention
                            </label>
                        </div>

                        {/* Message Display Div */}
                        <div className='border rounded-2xl bg-white w-full md:w-[50%] h-auto mt-4 md:mt-0'>
                            <div className="mt-6 p-4 text-black text-lg rounded flex justify-center">
                                {selectedOption === 'option1' && (
                                    <div className='p-6'>
                                        <h1 className='text-xl mb-4 font-bold'>Put your solution in front of actual decision-makers</h1>
                                        <p className='text-base'>We audit and update your profile, build a relevant network of ICP matches via personalized connection requests, and follow up with them to schedule appointments.</p>
                                        <div>
                                            <button className='rounded-2xl bg-[#FF5E00] p-3 mt-6 text-l font-semibold text-white'>
                                                Book a call
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {selectedOption === 'option2' && (
                                    <div className='p-6'>
                                        <h1 className='text-xl mb-4 font-bold'>Start conversations that drive sales</h1>
                                        <p className='text-base'>We craft thought-out LinkedIn message sequences proven to increase response rates and convert up to 15% of your prospects into paying customers.</p>
                                        <div>
                                            <button className='rounded-2xl bg-[#FF5E00] p-3 mt-6 text-l font-semibold text-white'>
                                                Book a call
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {selectedOption === 'option3' && (
                                    <div className='p-6'>
                                        <h1 className='text-xl mb-4 font-bold'>Showcase your expertise on LinkedIn
                                        </h1>
                                        <p className='text-base'>We help you cut through the clutter by combining powerful content strategies and consistent engagement to amplify your voice as a thought leader and attract the right clients.</p>
                                        <div>
                                            <button className='rounded-2xl bg-[#FF5E00] p-3 mt-6 text-l font-semibold text-white'>
                                                Book a call
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo
