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

        const style ={
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 0, rgba(0, 0, 0, 0.7) 60%,
        rgba(0, 0, 0, 0.7) 100%), url(https://belkins.io/assets/industries-bg-Ye9cTnCR.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
  
}
        return (
        <div>
            <div className='h-fit md:h-[80vh] p-12' >
                <div className='h-full p-5  rounded-3xl  flex justify-center' style={style}>
                    <div className='w-[700px] border border-red-500 mt-10 block justify-center'>
                        <h1 className='text-6xl text-white text-center font-bold'>
                        Get new opportunities
                        from LinkedIn regularly
                        </h1>
                        <p className='text-white text-lg w-[500px] text-center'>
                        with our complex LinkedIn outreach service
                        that solves your lead gen challenges.
                        </p>
                    </div>
                    
                        {/* <button className='bg-[#FF6600] flex items-center rounded-lg w-full md:w-fit p-3 gap-2  text-white hover:bg-[#773d17] font-semibold '>
                            View other services  <FaArrowRight className='text-2xl' />
                        </button> */}
                    </div>
                </div>
            </div>

    
        )
}

        export default SectionTwo
