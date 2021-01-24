import Head from 'next/head'
import Card from "../components/card";
import CardTitle from "../components/cardtitle";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Tigo Middelkoop - Infrastructure</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>


            <div className={"flex flex-col lg:flex-row mb-4 justify-center 2xl:mx-72"}>

                <div className={"rounded-lg w-96 mb-4 md:mx-1"}>
                    <Card>
                        <CardTitle>Hosting</CardTitle>
                    </Card>
                </div>
                <div className={"rounded-lg w-96 mb-4 md:mx-1"}>
                    <Card>
                        <p>Hosting</p>
                    </Card>
                </div>
                <div className={"rounded-lg w-96 mb-4 md:mx-1"}>
                    <Card>
                        <p>Hosting</p>
                    </Card>
                </div>
                <div className={"rounded-lg w-96 mb-4 md:mx-1"}>
                    <Card>
                        <p>Frameworks</p>
                    </Card>
                </div>
            </div>

        </div>
    )
}
