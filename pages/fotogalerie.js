import Head from 'next/head';

import Photogalerie from "../components/Photogalerie/Photogalerie";


const Fotogalerie = () => {
    return (
        <>
            <Head>
                <title>Fotogalerie Chata Růženka</title>
                <meta name="description" content=" ..."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

           <Photogalerie/>
        </>
    );
};

export default Fotogalerie;
