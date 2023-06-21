import { ReactComponent as SearchIcon } from '../../assets/vector-graphics/magnifying_glass.svg';

import { useContext, useState } from 'react';
import { ListContext } from '../../context/list-context';

import './product-searchbar.styles.scss'



const ProductSearchbar = () => {

    const [tempString, setTempString] = useState('');

    const {
        searchString, 
        setSearchString, 
        updateFilteredProducts,
        filteredState,
        resetFilteredProducts
    } = useContext(ListContext);

    const handleChange = (e) => {
        setTempString(e.target.value);
        setSearchString(e.target.value.toLowerCase());
        
    }

    const handleClick = () => {
        if(searchString) {
            updateFilteredProducts(searchString);
            console.log(tempString);
            console.log(searchString);
        }
    }

    const handleReset = () => {
        resetFilteredProducts();
        setTempString('');
    }

    return (
        <div className="product-searchbar-container">
            <div className="product-searchbar-content-wrapper">
                {filteredState && <button className="product-searchbar-reset-button" onClick={handleReset}>Reset filters</button>}
                <input 
                    className="product-searchbar-input"
                    placeholder="Search something..."
                    value={tempString}
                    onChange={handleChange}
                />

                <button className="product-searchbar-button" onClick={handleClick}>
                    <SearchIcon className="product-searchbar-icon"/>
                </button>

            </div>
        </div>
    );
}

export default ProductSearchbar;