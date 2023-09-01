import {useContext} from "react";
import  ThemeContext from "../context/ThemeContext";
function Button() {
    const data = useContext(ThemeContext);
    const {theme,setTheme} = useContext(ThemeContext);
    //console.log(data);
    return <div>
        Active Theme: {data.theme}
        <br/>
        active theme: {theme}

        <button onClick={()=> setTheme(theme==="light" ? "dark" : "light")}>Change Theme</button>
        </div>
}

export default Button;