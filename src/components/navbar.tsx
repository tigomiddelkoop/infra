import Link from "next/link"
import Image from "next/image"
import styles from "./navbar.module.scss"
import {useRouter} from 'next/router';

import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faExternalLinkAlt, faMoon, faSun, faUser} from "@fortawesome/free-solid-svg-icons/";

// @TODO put more in the module.css file of this file to clean it up of css statements and easy manipulation without searching
const darkHover = " dark:hover:bg-gray-700 dark:border-white"
const inactiveNav = styles.navItemInactive + darkHover;
const activeNav = styles.navItemActive + darkHover;
const navButton = styles.navButton + darkHover

export default function Navbar(props) {


    const router = useRouter();
    const [navBarOpen, setNavBarOpen] = useState(false);
    const path = router.pathname;

    return (
        <div className={styles.navbar + " dark:bg-gray-800 dark:text-white dark:border-gray-500"}>

            <div className={"flex flex-1 border-b-1 border-gray-100 md:border-b-0"}>
                <Link href={"/"}>
                    <div className={"px-4 w-auto flex w-48 items-center border-gray-100 cursor-pointer"}>
                        <Image
                            alt={"Picture of tigo"}
                            src={"https://tigo.tech/img/profilepicture.png"}
                            height={32}
                            width={32}
                            className={"rounded-full"}
                        />
                        <p className={"ml-2 jetbrains"}>Tigo Middelkoop (Infrastructure)</p>
                    </div>
                </Link>
                <div className={"flex flex-1"}/>
                <div className={"h-14"}>
                    <button onClick={() => setNavBarOpen(!navBarOpen)}
                            className={styles.navMenuButton + " self-center h-14"}>
                        <FontAwesomeIcon icon={faBars}/>
                    </button>
                </div>
            </div>

            <div
                className={!navBarOpen ? "hidden md:block" : "block"}>
                <div className={"flex flex-col md:flex-row md:items-center border-red-700"}>
                    <Link href={"https://tigo.tech"}>
                        <div className={inactiveNav}>
                            <p className={"mr-1"}>Home</p>
                            <FontAwesomeIcon className={"h-3 text-gray-500"} icon={faExternalLinkAlt}/>
                        </div>
                    </Link>
                    <Link href={"https://infra.tigo.tech"}>
                        <div>
                            <div className={`${path == "/" ? activeNav : inactiveNav}`}>
                                <p className={"mr-1"}>Infrastructure</p>
                            </div>
                        </div>
                    </Link>
                    <div className={"flex h-14"}>
                        <button onClick={props.changeTheme} className={navButton}>
                            {props.theme == "light" ? <FontAwesomeIcon className={"h-4"} icon={faMoon}/> :
                                <FontAwesomeIcon className={"h-4"} icon={faSun}/>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
