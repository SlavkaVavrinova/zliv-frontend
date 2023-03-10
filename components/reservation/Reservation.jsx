import Head from 'next/head';
import Link from "next/link";
import ReservationForm from "./ReservationForm";
import {useEffect, useState} from "react";


const Reservation = () => {

    const [terms, setTerms] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const nacistData = async () => {
            try {
                const resp = await fetch("http://localhost/zlivDoctrine/www/api/");
                switch (resp.status) {
                    case 200:
                        const data = await resp.json();
                        setTerms(data);
                        break;
                    case 500:
                        alert("Server vrátil neočekávanou chybu.");
                        break;
                    case 503:
                        alert("Server je přetížen.");
                        break;
                }
            } catch (error) {
                console.error("Chyba komunikace se serverem:", error.message);
                alert("Chyba komunikace se serverem. Jste připojeni k internetu?");
            } finally {
                setLoading(false)
            }
        };
        nacistData();
    }, []);

    const termsString = JSON.stringify(terms);
    return (
            <main className="content">
                <h1>Rezervace</h1>
                <p>Máte zájem o ubytování v naší chatě? Pro výběr vhodného termínu nám zanechte zprávu nebo nám pošlete
                    email na adresu <Link href="mailto:chata.ruzenka@seznam.cz">chata.ruzenka@seznam.cz</Link>. Náš objekt je k dispozici k pronájmu od soboty
                    do soboty. Pro kratší pobyty než týden, v mimo sezónním období, nás neváhejte kontaktovat kvůli
                    individuálnímu jednání. Děkujeme Vám za projevený zájem.</p>
                <ReservationForm terms={terms} loading={loading}/>

                {loading ? (
                    <div className="loading">Načítám data
                        <div className="spinner"></div>
                    </div>
                ) : (
                    <>
                        {terms.map(term => (
                            <div key={term.id} className={`background background${term.status}`}>{term.term}</div>
                        ))}
                    </>
                )}
            </main>

    );
};

export default Reservation;
