import { createContext, useState, useEffect } from "react";
import STORE_DATA from "../utils/store-data";



export const ListContext = createContext({
    filteredProducts: [],
    searchString: '',
    filteredState: false,
    updateFilteredProducts: () => {},
    setSearchString: () => {},
    resetFilteredProducts: () => {},
});




const ListProvider = ({children}) => {

    const vanillaData = STORE_DATA;
    const [filteredProducts, setFilteredProducts] = useState(vanillaData);
    const [searchString, setSearchString] = useState('');
    const [filteredState, setFilteredState] = useState(false);

    const updateFilteredProducts = (searchString) => {
        const tempFilterList = vanillaData.filter((item) => {
            const itemTitle =item.name + item.brand + item.category;
            return itemTitle.toLowerCase().includes(searchString)
        })
        setFilteredProducts(tempFilterList);
    }

    const resetFilteredProducts = () => {
        setFilteredProducts(vanillaData);
        setSearchString('');
    }

    useEffect(() => {

        const unsubscribe = () => {
            if(filteredProducts !== vanillaData) {
                setFilteredState(true);
            } else setFilteredState(false);
            console.log(filteredState);
        }
        unsubscribe();
    }, [filteredProducts, vanillaData, filteredState]);



    const value = {
        filteredProducts, 
        searchString,
        setSearchString,
        updateFilteredProducts,
        resetFilteredProducts,
        filteredState,
    };

    return (
        <ListContext.Provider value={value}>
            {children}
        </ListContext.Provider>
    );
}

export default ListProvider;