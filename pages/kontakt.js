import Head from 'next/head';
import Link from "next/link";
import Contact from "../components/contact/contact";


const Kontakt = () => {
    return (
        <>
            <Head>
                <title>Kontakt Chata Růženka</title>
                <meta name="description" content=" ..."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

          <Contact/>
        </>
    );
};

export default Kontakt;
