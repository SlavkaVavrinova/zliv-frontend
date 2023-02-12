import Head from 'next/head';
import Link from "next/link";
import ReservationForm from "./ReservationForm";


const Reservation = () => {
    return (
        <>


            <main className="content">
                <h1>Rezervace</h1>
                <p>Máte zájem o ubytování v naší chatě? Pro výběr vhodného termínu nám zanechte zprávu nebo nám pošlete
                    email na adresu <Link href="mailto:chata.ruzenka@seznam.cz">chata.ruzenka@seznam.cz</Link>. Náš objekt je k dispozici k pronájmu od soboty
                    do soboty. Pro kratší pobyty než týden, v mimo sezónním období, nás neváhejte kontaktovat kvůli
                    individuálnímu jednání. Děkujeme Vám za projevený zájem.</p>

                <ReservationForm/>
            </main>
        </>
    );
};

export default Reservation;
