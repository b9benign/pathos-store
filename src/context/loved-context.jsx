import { createContext, useState, useContext } from "react";
import { toggleLovedItem } from "../utils/fire-utils";
import { UserContext } from "./user-context";


export const LovedItemContext = createContext({
    isItemLoved:false,
    setIsItemLoved:() => {},
    toggleIsItemLoved:() => {}
})


const LovedProvider = ({children}) => {

    const [isItemLoved, setIsItemLoved] = useState(false);
    const {currentUser} = useContext(UserContext);

    const toggleIsItemLoved = (itemToToggle) => {
        const {id} = itemToToggle;
        if(!currentUser){
            alert('Log in to heart items.');
            console.log('Shiet men y no login');
        } else {
            toggleLovedItem(itemToToggle, currentUser);
            // console.log(`context ${id}`);

        }
    }


    const value = {
        isItemLoved,
        toggleIsItemLoved,
    }

    return (
        <LovedItemContext.Provider value={value}>
            {children}
        </LovedItemContext.Provider>
    )
}

export default LovedProvider;
