import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchData = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then(response => setData(response.data))
            .catch(err => setError(err));
    }, [url]);

    return { data, error };
};
