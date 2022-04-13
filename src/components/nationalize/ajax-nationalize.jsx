import axios from 'axios';
import { useEffect, useState } from 'react';

const AjaxNationalize = ({ name }) => {
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [result, setResult] = useState(null);

    useEffect(() => {
        setResult(null);
        setError(false);
        setLoading(true);

        axios.get('https://api.nationalize.io/', {
            params: {
                name: name
            }
        }).then(response => {
            setResult({
                name: response.data.name,
                country: response.data.country[0]?.country_id ?? 'N/A',
                probability: (response.data.country[0]?.probability * 100) || 100
            });
        }).catch(e => {
            setError(true);
        }).finally(() => {
            setLoading(false);
        });
    }, [name]);


    return (
        <>
            <h3>Ajax !</h3>
            {isLoading ? (
                <p>Chargement...</p>
            ) : isError ? (
                <p>Error :o</p>
            ) : result && (
                <p>Le nom "{result.name}" est {result.country} à {result.probability}% </p>
            )}
        </>
    );
};

export default AjaxNationalize;