import Navbar from "./navbar";
// import Footer from "./footer";
import Head from "next/head";

export default function Layout({children, theme, changeTheme}) {
    return (
        <div>
            <Head>
                <meta name="og:image" content="https://tigo.tech/img/profilepicture.png"/>
                <meta
                    name="description"
                    content="Fullstack Webdeveloper. Specializes in the Javascript language and C based languages. Feel free to contact me for a project to discuss options"
                />
            </Head>
            {/*// It might be a bit weird, but the dark:bg-gray-800 under here is just to make sure nothing weird happens*/}
            <div className={theme + " flex flex-col min-h-screen h-screen dark:bg-gray-800"}>
                <Navbar theme={theme} changeTheme={changeTheme}/>
                <div className={"flex-1 p-4 dark:bg-gray-800"}>
                    {children}
                </div>
                {/*<Footer/>*/}
            </div>
        </div>
    )
}
