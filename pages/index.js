import Head from 'next/head';
import Home from "../components/home/Home";

const Index = () => {
    return (
        <>
            <Head>
                <title>Chata Růženka</title>
                <meta
                    name="description"
                    content=""
                />
            </Head>
            <Home/>
        </>

    );
};

export default Index;
