import Head from 'next/head'
import Card from "../components/card";
import CardTitle from "../components/cardtitle";
import * as fs from "fs";
import CardBody from "../components/cardbody";
import {useEffect, useState} from "react";

export default function Home({infra}) {
    const [theme, setTheme] = useState("");

    const handleStorage = (event: StorageEvent) => {

        const newTheme = window.localStorage.theme
        setTheme(newTheme);
    }

    useEffect(() => {
        let theme;

        if ((!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) || window.localStorage.theme == "dark") {
            theme = "dark"
        } else {
            theme = "light"
        }
        setTheme(theme);

    }, []);

    useEffect(() => {
        window.addEventListener("storage", handleStorage)
        return () => {
            window.removeEventListener("storage", handleStorage)
        }
    }, [])


    function getImage(image) {

        if (typeof image == "object") return image[theme];

        return image

    }


    return (
        <div>
            <Head>
                <title>Tigo Middelkoop - Infrastructure</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className={"text-center dark:text-white mb-4"}>

                <p className={"jetbrains mb-0.5"}>I share this info because I want to share what technology i'm using to
                    host all of my things</p>
                <p className={"jetbrains text-xs mb-0.5"}>This also might show what software i'm experienced with that I
                    did not mention on my portfolio</p>
                <p className={"jetbrains text-xs font-light "}>It also might seem weird that I have different sites to
                    show all this but I really wanted to have this on infra.tigo.tech</p>

            </div>

            <div className={"flex flex-col lg:flex-row mb-4 justify-center 2xl:mx-72"}>
                {infra.map(data => {
                    return <div className={"rounded-lg w-96 mb-4 md:mx-1"}>
                        <Card>
                            <CardTitle>{data.title}</CardTitle>
                            <CardBody>
                                {data.entries.map(entry =>
                                    <div className={"flex flex-col py-2 items-center justify-center"}>
                                        {entry.image !== undefined ? <img style={{height: 64}} className={"mb-1"}
                                                                          src={getImage(entry.image)}/> : ""}
                                        {entry.name !== undefined ? <p className={"jetbrains"}>{entry.name}</p> : ""}
                                    </div>
                                )}
                            </CardBody>
                        </Card>

                    </div>
                })}

            </div>

        </div>
    )
}

export function getStaticProps() {

    const folder = process.cwd() + "/data/";
    const infraFiles = fs.readdirSync(folder)

    const details = infraFiles.map(filename => {

        const file = fs.readFileSync(folder + filename, {encoding: "utf8"});
        return JSON.parse(file);

    })

    return ({props: {infra: details}})
}
