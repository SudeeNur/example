import {createContext, useState,useEffect} from 'react';

const ThemeContext = createContext();

export const ThemeProvider =({children})=> {
    //ThemeProvider bir reack componentsidir
    
    const [theme,setTheme] = useState(localStorage.getItem('theme') || 'light');
    // null ise light olarak başlasın demek oluyor
    //localStorage a ne yazılırsa theme olarak o gözüküyor sayfada 
    useEffect(()=>{
        localStorage.setItem("theme",theme);
    },[theme])
    const values ={
        theme,
        setTheme,
    };
    return (
    
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
    );
}

export default ThemeContext;