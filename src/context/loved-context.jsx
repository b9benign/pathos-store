import { createContext, useState, useContext, useEffect } from "react";
import { toggleLovedItem, getLovedList } from "../utils/fire-utils";
import { UserContext } from "./user-context";
import STORE_DATA from "../utils/store-data";


export const LovedItemContext = createContext({
    isItemLoved:false,
    lovedList:[],
    setIsItemLoved:() => {},
    toggleIsItemLoved:() => {},
    updateLovedList:() => {}
})


const LovedProvider = ({children}) => {

    const defaultLovedList = [];
    const [isItemLoved, setIsItemLoved] = useState(false);
    const [lovedList, setLovedList] = useState(defaultLovedList);
    const {currentUser} = useContext(UserContext);

    const toggleIsItemLoved = (itemToToggle) => {
        if(!currentUser){
            alert('Log in to heart items.');
        } else {
            toggleLovedItem(itemToToggle, currentUser);
        }
    }

    useEffect(() => {
        const unsubscribe = async () => {
          const temp = await getLovedList(currentUser);
          setLovedList(temp);
        };
      
        if (currentUser) {
          unsubscribe();
        }
      }, [currentUser]);

    const value = {
        isItemLoved,
        toggleIsItemLoved,
        lovedList
    }

    return (
        <LovedItemContext.Provider value={value}>
            {children}
        </LovedItemContext.Provider>
    )
}

export default LovedProvider;
