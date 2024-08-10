import React from 'react'

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
  
  return (
    <div>
      
    </div>
  )
}

export default SectionTwo
