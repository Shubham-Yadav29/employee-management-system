import React, { createContext, useEffect, useState } from 'react'
import getlocalStorage, { setlocalStorage } from '../components/Utils/Localstorage';

export const Authcontext = createContext();

const AuthProvider = ({children}) => {

    const [data, setdata] = useState('');

useEffect(() => {
    setlocalStorage()
    const { employee, admin } = getlocalStorage(); 
        setdata(employee);
},[])

    return (
            <Authcontext.Provider value={[data , setdata]}>
                {children}
            </Authcontext.Provider>
    );
};

export default AuthProvider;

