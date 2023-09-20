import { createContext, useState, useContext, useEffect } from "react";
import { toggleLovedItem, getLovedList } from "../utils/fire-utils";
import { UserContext } from "./user-context";



export const LovedItemContext = createContext({
  lovedList: [],
  lovedIdList: [],
  toggleIsItemLoved: () => { },
  fetchLovedList: () => { },
  fetchLovedIdsList: () => { }
})


const LovedProvider = ({ children }) => {

  const defaultLovedList = [];
  const [lovedList, setLovedList] = useState(defaultLovedList);
  const [lovedIdList, setLovedIdList] = useState([]);
  const { currentUser } = useContext(UserContext);


  const toggleIsItemLoved = async (itemToToggle) => {
    if (!currentUser) {
      alert('Log in to heart items.');
    } else {
      await toggleLovedItem(itemToToggle, currentUser);
      fetchLovedIdsList();
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
      setLovedIdList(tempIds);
    };
    if (currentUser) {
      unsubscribe();
    }
  }, [currentUser, lovedList]);


  const fetchLovedIdsList = async () => {
    if (currentUser) {
      const tempList = await getLovedList(currentUser);
      const tempIds = tempList.map((item) => {
        return item.id;
      })
      setLovedIdList(tempIds);
    }
  }

  const fetchLovedList = async () => {
    if (currentUser) {
      const temp = await getLovedList(currentUser);
      setLovedList(temp);
    }
  }




  const value = {
    toggleIsItemLoved,
    lovedList,
    fetchLovedList,
    fetchLovedIdsList,
    lovedIdList,
  }

  return (
    <LovedItemContext.Provider value={value}>
      {children}
    </LovedItemContext.Provider>
  )
}

export default LovedProvider;

