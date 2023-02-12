import Head from 'next/head';
import Link from "next/link";
import Reservation from "../components/reservation/Reservation";


const Rezervace = () => {
    return (
        <>
            <Head>
                <title>Rezervace Chata Růženka</title>
                <meta name="description" content=" ..."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

           <Reservation/>
        </>
    );
};

export default Rezervace;
