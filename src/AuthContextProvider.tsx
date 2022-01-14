import React, { ReactNode, useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { auth } from './firebaseConfig';
import AuthContext from './AuthContext';

function AuthContextProvider({ children }: { children: ReactNode }) {
    // create a state for the user
    const [user, setUser] = useState<User | null>(null);

    // check for any changes to auth
    // call setUser
    useEffect(() => {
        return auth.onAuthStateChanged(newUser => {
            setUser(newUser);
        });
    }, []);

    // wrap children in our context
    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;