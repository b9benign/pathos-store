import { AuthStateChangeListener, createUserDocumentFromAuth } from "../utils/fire-utils";
import { createContext, useState, useEffect } from "react";



export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => {}
});


const UserProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect(() => {
        const unsubscribe = AuthStateChangeListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    },[])

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;
