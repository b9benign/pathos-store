import { createContext, useState, useContext, useEffect } from "react";
import { toggleLovedItem, getLovedList } from "../utils/fire-utils";
import { UserContext } from "./user-context";



export const LovedItemContext = createContext({
    isItemLoved: false,
    lovedList: [],
    lovedIdList: [],
    setIsItemLoved: () => {},
    toggleIsItemLoved: () => {},
    setLovedIdList: () => {},
    fetchLovedList: () => {},
    fetchLovedIdsList: () => {}
})


const LovedProvider = ({children}) => {

    const defaultLovedList = [];
    const [isItemLoved, setIsItemLoved] = useState(false);
    const [lovedList, setLovedList] = useState(defaultLovedList);
    const [lovedIdList, setLovedIdList] = useState([]);
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

      useEffect(() => {
        const unsubscribe = async () => {
          const tempList = await getLovedList(currentUser);
          const tempIds = tempList.map((item) => {
            return item.id;
          })
          console.log(tempIds);
        };
        if (currentUser) {
          unsubscribe();
        }
      }, [currentUser]);

      const fetchLovedList = async () => {
        if(currentUser){
          const temp = await getLovedList(currentUser);
          setLovedList(temp);
        }
      }
      const fetchLovedIdsList = async () => {
        if(currentUser){
          const tempList = await getLovedList(currentUser);
          const tempIds = tempList.map((item) => {
              return item.id;
            })
          setLovedIdList(tempIds);
        }
      }

    const value = {
        isItemLoved,
        toggleIsItemLoved,
        lovedList,
        setIsItemLoved,
        fetchLovedIdsList,
        fetchLovedList,
        lovedIdList
    }

    return (
        <LovedItemContext.Provider value={value}>
            {children}
        </LovedItemContext.Provider>
    )
}

export default LovedProvider;
