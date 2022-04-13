import { useState } from 'react';
import AjaxNationalize from './ajax-nationalize';

const MainNationalize = () => {

    const [inputName, setInputName] = useState('');
    const [searchName, setSearchName] = useState(null);

    const handleStartSearch = (e) => {
        e.preventDefault();
        setSearchName(inputName);
        setInputName('');
    };

    return (
        <>
            <h2>Envoye de requete Ajax</h2>
            <form onSubmit={handleStartSearch}>
                <input type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} />
                <button type='submit' >Rechercher...</button>
            </form>

            {searchName && (
                <AjaxNationalize name={searchName} />
            )}
        </>
    );
};

export default MainNationalize;