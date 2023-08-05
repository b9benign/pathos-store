import { ReactComponent as SearchIcon } from '../../assets/vector-graphics/magnifying_glass.svg';
import { useContext, useState } from 'react';
import { ListContext } from '../../context/list-context';

import './product-searchbar.styles.scss'
import CategoryFilter from '../category-filter/category-filter.component';



const ProductSearchbar = () => {

    const [tempString, setTempString] = useState('');
    const [isFilterToggled, setIsFilterToggled] = useState(false);

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
        if (searchString) {
            updateFilteredProducts(searchString);
        }
    }
    const handleReset = () => {
        resetFilteredProducts();
        setTempString('');
    }
    const handleFilterToggle = () => {
        setIsFilterToggled(!isFilterToggled);
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
                <SearchIcon className="product-searchbar-icon" onClick={handleClick} />
                <button className="acf-toggle-button" onClick={handleFilterToggle}>
                    {isFilterToggled 
                        ?   <span>&#9661;</span>
                        :   <span>&#9651;</span>
                    }
                </button>
            </div>
            {isFilterToggled &&
                <CategoryFilter />
            }
        </div>
    );
}

export default ProductSearchbar;