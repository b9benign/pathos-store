import { AuthStateChangeListener } from "../../utils/fire-utils/fire-utils";
import { createContext, useState, useEffect } from "react";
import { createUserDocumentFromAuth } from "../../utils/fire-utils/fire-utils";



export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => {}
});


export const UserProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect(() => {
        const unscubscribe = AuthStateChangeListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unscubscribe;
    },[])

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
