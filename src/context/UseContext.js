import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
import { getAuth } from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app);

const UseContext = ({ children }) => {



    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default UseContext;