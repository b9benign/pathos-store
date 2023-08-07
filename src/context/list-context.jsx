import { createContext, useState, useEffect } from "react";
import STORE_DATA from "../utils/store-data";



export const ListContext = createContext({
    filteredProducts: [],
    compValues: [],
    searchString: '',
    filteredState: false,
    updateFilteredProducts: () => { },
    setSearchString: () => { },
    resetFilteredProducts: () => { },
    toggleCompItem: () => { }
});




const ListProvider = ({ children }) => {

    const vanillaData = STORE_DATA;
    const [filteredProducts, setFilteredProducts] = useState(vanillaData);
    const [searchString, setSearchString] = useState('');
    const [filteredState, setFilteredState] = useState(false);
    const [compValues, setCompValues] = useState([]);

    const updateFilteredProducts = (searchString) => {
        const tempFilterList = vanillaData.filter((item) => {
            const itemTitle = item.name + item.brand;
            return itemTitle.toLowerCase().includes(searchString)
        })
        setFilteredProducts(tempFilterList);
    }
    const resetFilteredProducts = () => {
        setFilteredProducts(vanillaData)
        setFilteredState(false);
        setCompValues([]);
        setSearchString('');
    }
    const toggleCompItem = (valueToToggle) => {
        const index = compValues.indexOf(valueToToggle);
        if (index < 0) {
            if (valueToToggle === "men" && compValues.includes("women")) {
                const i = compValues.indexOf("women");
                setCompValues(compValues.splice(i, 1));
            } else if (valueToToggle === "women" && compValues.includes("men")) {
                const i = compValues.indexOf("men");
                setCompValues(compValues.splice(i, 1));
            }
            setCompValues(compValues.concat(valueToToggle));
        } else {
            setCompValues(compValues => {
                const temp = [...compValues];
                temp.splice(index, 1);
                return temp;
            })
        }
    }

    useEffect(() => {
        console.log("boom")
        const unsubscribe = () => {
            if (filteredProducts !== vanillaData) {
                setFilteredState(true);
            } else {
                setFilteredState(false);
            };
        }
        unsubscribe();
        return unsubscribe;
    }, [filteredProducts, vanillaData]);

    useEffect(() => {  //this is atrocious, proceed at own risk
        const unsubscribe = () => {
            const updateCompList = () => {
                const utilArray = [...compValues];
                let categorySelection = [];
                let brandSelection = [];

                let helperOne = vanillaData;
                let helperTwo = [];
                let helperThree = [];

                if (compValues.includes("men") || compValues.includes("women")) {
                    if (compValues.includes("men")) {
                        helperOne = vanillaData.filter(item => item.gender === "men");
                        utilArray.splice(utilArray.indexOf("men"), 1);
                    } else if (compValues.includes("women")) {
                        helperOne = vanillaData.filter(item => item.gender === "women");
                        utilArray.splice(utilArray.indexOf("women"), 1);
                    }
                }
                utilArray.forEach(value => {
                    if (["Running", "Lifestyle", "Outdoor", "Skate", "Court"].includes(value)) {
                        categorySelection.push(value);
                    } else {
                        brandSelection.push(value);
                    }
                });
                if (categorySelection.length > 0) {
                    for (let i = 0; i < categorySelection.length; i++) {
                        const temp = helperOne.filter(item => item.category === categorySelection[i]);
                        helperTwo = helperTwo.concat(...temp);
                    }
                } else {
                    helperTwo = helperOne;
                }
                if (brandSelection.length > 0) {
                    for (let i = 0; i < brandSelection.length; i++) {
                        const temp = helperTwo.filter(item => item.brand === brandSelection[i]);
                        helperThree = helperThree.concat(...temp);
                    }
                } else {
                    helperThree = helperTwo;
                }
                setFilteredProducts(helperThree);
            };
            return updateCompList();
        }
        return unsubscribe();
    }, [compValues, vanillaData]);

    const value = {
        filteredProducts,
        searchString,
        setSearchString,
        updateFilteredProducts,
        resetFilteredProducts,
        filteredState,
        toggleCompItem,
        compValues
    };

    return (
        <ListContext.Provider value={value}>
            {children}
        </ListContext.Provider>
    );
}

export default ListProvider;
