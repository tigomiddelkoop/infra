import Pill from "./pill";
import styles from "./footer.module.scss"
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

    // This might not be the best option, I want to look for a better option.
    const [buildId, setBuildId] = useState("")
    const [nodeName, setNodeName] = useState("")
    const [container, setContainer] = useState("")
    const [buildIdOnce, setBuildIdOnce] = useState(false)
    useEffect(() => {
        if (!buildIdOnce) {
            fetch("/api/node").then(response => response.json().then(data => setNodeName(data.node)))
            fetch("/api/container").then(response => response.json().then(data => setContainer(data.container)))
            fetch("/api/buildid").then(response => response.json().then(data => setBuildId(data.buildId)))
            setBuildIdOnce(true);
        }
    }, [buildId])

    const footerLink = styles.link + " dark:hover:bg-gray-700 items-center"

    return <footer
        className={"align-bottom p-4 border-t border-b border-gray-100 items-center justify-center text-center dark:bg-gray-800 dark:border-gray-500 dark:text-white"}>
        <h1 className={"jetbrains text-2xl py-2"}>tigo.tech</h1>
        <div className={"flex flex-col lg:flex-row items-center justify-center text-center"}>
            <div className={styles.categoryContainer}>
                <p className={styles.categoryTitle}>My other sites</p>
                <a className={footerLink} href={"https://tigo.tech"}>tigo.tech <Pill className={"ml-1"} color={"info"}>You're
                    here somewhat</Pill></a>
                <a className={footerLink} href={"https://genericdevelopment.nl"}>GenericDevelopment <Pill
                    className={"ml-1"} color={"info"}>Going to be rebuild</Pill></a>
                <a className={footerLink} href={"https://systemmanager.io"}>SystemManager Core</a>
            </div>

            <div className={styles.categoryContainer}>
                <div>
                    <p className={styles.categoryTitle}>Socials</p>
                </div>
                <div className={styles.socialMediaCategory}>
                    <a className={footerLink} rel={"noreferrer noopener _blank"}
                       href={"https://github.com/tigomiddelkoop"}><FontAwesomeIcon width={16} className={"mr-1"}
                                                                                   icon={faGithub}/> GitHub</a>

                    <a className={footerLink} rel={"noreferrer noopener _blank"}
                       href={"https://www.linkedin.com/in/tigo-middelkoop-92067a15b/"}><FontAwesomeIcon width={16}
                                                                                                        className={"mr-1"}
                                                                                                        icon={faLinkedin}/> LinkedIn</a>
                    <a className={footerLink} rel={"noreferrer noopener _blank"}
                       href={"https://twitter.com/__Tigo__"}><FontAwesomeIcon width={16}
                                                                              className={"mr-1"}
                                                                              icon={faTwitter}/> Twitter</a>
                </div>
            </div>

            <div className={styles.categoryContainer}>
                <div className={"mb-2"}>
                    <p className={styles.categoryTitle}>Kubernetes info</p>
                    <div className={"flex items-center justify-center"}>
                        <p className={"mr-1"}>Served from node: </p>
                        <Pill color={"info"} className={"jetbrains"}>{nodeName}</Pill>
                    </div>
                    <div className={"flex items-center justify-center"}>
                        <p className={"mr-1"}>Served from container: </p>
                        <Pill color={"info"} className={"jetbrains"}>{container}</Pill>
                    </div>
                </div>
                <div>
                    <p className={styles.footerCategoryTitle}>Site Info</p>
                    <div className={"flex items-center justify-center"}>
                        <p className={"mr-1"}>Build Id:</p>
                        <Pill className={"jetbrains"}>{buildId}</Pill>
                    </div>
                </div>
            </div>
        </div>
        <p className={"text-xs font-light"}>All the pictures on this site are made by Tigo and are of the code of this
            site and the
            servers it is hosted on, the site might also contain pictures of projects he has done.</p>
        <p className={"text-xs font-light"}>(I'm trying to not use any stock images, those are no fun to use. I want to
            make them myself)</p>
    </footer>

}