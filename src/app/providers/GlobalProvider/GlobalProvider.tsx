import React, { createContext, useState, useContext, useMemo } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import themes from './themes';

interface Props {
    children: React.ReactNode;
}

export const GlobalContext = createContext({});
export const GlobalUpdateContext = createContext({});

export const GlobalProvider = ({ children }: Props) => {
    const [selectedTheme, setSelectedTheme] = useState(0);

    const theme = themes[selectedTheme];

    return (
        <GlobalContext.Provider value={{ theme }}>
            <GlobalUpdateContext.Provider value={{}}>
                {children}
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
