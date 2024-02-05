import { useState, createContext, useContext, useEffect } from "react";

// Create a context for dark theme
const DarkThemeContext = createContext();

// Custom hook to use the dark theme context
export const useDarkTheme = () => {
    const context = useContext(DarkThemeContext);
    if (!context) {
        throw new Error('useDarkTheme must be used within a DarkThemeProvider');
    }
    return context;
};

// DarkThemeProvider component to manage dark theme state
const DarkThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(false);

    // Add or remove 'dark' class on body based on the dark state
    useEffect(() => {
        if(dark){
            document.body.classList.add('dark');
        }else{
            document.body.classList.remove('dark');
        }
        
    }, [dark]);

    // Toggle the dark state
    const toggleDark = () => {
        setDark((prevDark) => !prevDark);
    };

    return (
        <DarkThemeContext.Provider value={{ dark, setDark, toggleDark }}>
            {children}
        </DarkThemeContext.Provider>
    );
};

export default DarkThemeProvider