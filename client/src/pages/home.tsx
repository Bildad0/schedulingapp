import { NextPage } from "next";
import Link from "next/link";
import Header from "../components/Header/header";

const HomePage: NextPage = () => {
    return (
    <>
            <Header />
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                </ul>
            </nav>
            <main>
                <p>Hi</p>
            </main>
    </>
    )
}

export default HomePage;