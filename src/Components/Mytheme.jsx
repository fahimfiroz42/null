import { useEffect, useState } from "react";
import { GoSun } from "react-icons/go";
import { IoMoon } from "react-icons/io5";


const Mytheme = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
      // document.querySelector('html').setAttribute('data-theme', theme);
      const htmlElement=document.documentElement;
      htmlElement.setAttribute('data-theme', theme);
      if(theme==='light'){

        htmlElement.classList.remove("dark");
      }
      else{
        htmlElement.classList.add("dark");
      }

    }, [theme]);
    return (
      <label className="swap swap-rotate text-2xl">
        <input onClick={toggleTheme} type="checkbox" />
        <div className="swap-on "><IoMoon /></div>
        <div className="swap-off"><GoSun /></div>
      </label>
    );
};

export default Mytheme;