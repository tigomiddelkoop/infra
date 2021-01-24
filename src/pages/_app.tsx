import '../styles/globals.css'
import {useEffect, useState} from "react";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = useState("");

  useEffect(() => {
    let theme;

    if ((!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) || window.localStorage.theme == "dark") {
      theme = "dark"
    } else {
      theme = "light"
    }
    setTheme(theme);
  }, []);
  // Make the changing possible
  function changeTheme() {


    const currentTheme = theme
    if (currentTheme == "light") {
      window.localStorage.theme = "dark";
      setTheme("dark");
    } else if (currentTheme == "dark") {
      window.localStorage.theme = "light";
      setTheme("light");
    }

  }


  return <Layout changeTheme={changeTheme} theme={theme}><Component {...pageProps} /></Layout>
}

export default MyApp
