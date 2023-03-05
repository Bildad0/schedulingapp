import Head from 'next/head'

export default function Header () {
    return (<>
        <Head>
            <title>My Scheduler</title>
            <meta name="description" content="A web app used to book appointments and schedule activities." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="calendar.png" />
        </Head>
    </>
    );
}