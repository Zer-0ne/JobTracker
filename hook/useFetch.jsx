import {
    useState,
    useEffect,
} from "react";
// import { RAPID_API_KEY } from '@env'
import axios from "axios";
// const RapidAPI = RAPID_API_KEY
const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
            'X-RapidAPI-Key': <YOUR_API_KEY>,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false)
        } catch (error) {
            setError(error)
            alert('There is an error')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    const reFetch = () => {
        setIsLoading(true);
        fetchData();
    }
    return {
        data,
        isLoading,
        error,
        reFetch
    }
}
export default useFetch
