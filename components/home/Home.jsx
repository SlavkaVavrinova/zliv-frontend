import Image from 'next/image'
import Link from 'next/link';

import chataRuzenka from "./img/chataRuzenka.png";
import rybolov from "./img/rybolov.png";
import relax from "./img/relax.png";
import room from "./img/room.png";

const Home = () => {
    return (<>
        <main>
            <section className="hero">
                <Image src={chataRuzenka} alt="Chata Růženka" height={250}/>
                <div><h1>Chata Růženka</h1>
                    <p>Vítejte v kouzelném světě chaty Růženka! </p>

                    <button className="btn">Rezervovat</button>
                </div>
            </section>

            <section className="content">

                <p>Chata se nechází na břehu Mydlovarského rybníka v blízkosti měst Zliv, Hluboké nad Vltavou a
                    Českých Budějovic.
                    U nás si můžete dokonale odpočinout. </p>
                <p>Stanete součástí přírody a zároveň si užijete nezapomenutelných zážitků při sportovním
                    rybolovu.</p>
                <p>Chata nabízí komfortní prostory včetně koupelny, praktické kuchyně s jídelnou, pohodlného
                    obývacího pokoje a dvou samostatných neprůchozích ložnic se čtyřmi lůžky. V chatě je k dispozici
                    pouze užitková voda.</p>


            <div className="important center">
                <h2>Rezervace a dotazy:</h2>
                <ul className="important__items">
                    <li>+ 420&nbsp;775 959 988</li>
                    <li>+ 420&nbsp;732 923 027</li>
                    <li>chata.ruzenka@seznam.cz</li>
                </ul>
            </div>

            <div className="flex">
                <div className="center">
                    <Image src={room} alt="Chata Růženka ubytování" width={174}/>
                </div>
                <div>
                    <h2>Vybavení chaty:</h2>

                    <ul>
                        <li>Kuchyň s jídelnou (el. varná deska, trouba, lednice, mikrovlnná trouba a varná konvice)</li>
                        <li>Obývací pokoj s televizorem&nbsp;</li>
                        <li>Dvě samostatné dvojlůžkové ložnice</li>
                        <li>Koupelna se sprchovacím koutem a WC</li>
                        <li>Topení na tuhá paliva</li>
                        <li>Volné prostranství, ohniště s posezením, zahradní nábytek, slunečník</li>
                        <li>Parkování u objektu</li>
                        <li>Břeh rybníka přímo za okny</li>
                        <li>Loď</li>
                    </ul>
                </div>
            </div>

            <div className="flex">
                <div className="center">
                    <Image src={rybolov} alt="Chata Růženka rybolov" width={174}/>
                </div>
                <div>
                    <h2>Rybolov</h2>
                    <p>
                        Pokud toužíte po dokonalém rybolovu, navštivte náš rybník Mydlovarský a získejte všechny
                        potřebné informace ZDE. </p>
                    <p>Vydejte se s námi na cestu plnou dobrodružství a nezapomenutelných zážitků. Těšíme se na Vaši
                        návštěvu!
                    </p>
                </div>
            </div>

            <div className="flex">
                <div className="center">
                    <Image className="img" src={relax} alt="Chata Růženka posezení" width={174}/>
                </div>
                <div>
                    <h2>Okolí chaty</h2>
                    <ul>
                        <li><Link href="https://www.mydlak.cz/" target="_blank" rel="noreferrer noopener">Kemp Mydlák s
                            pláží</Link></li>
                        <li>Zliv s cyklostezkou</li>
                        <li>Rybník Bezdrev</li>
                        <li><Link href="https://www.zamek-hluboka.cz/cs" target="_blank" rel="noreferrer noopener">Zámek
                            Hluboká nad Vltavou</Link></li>
                        <li><Link
                            href="https://www.kudyznudy.cz/aktivity/karluv-hradek-u-purkarce?gclid=Cj0KCQiAh4j-BRCsARIsAGeV12AOPQCjm4kbvjn_xaLVW-tr4mYwdEbK9cUF9DWdiNSso38Z4uA2aQYaAvxuEALw_wcB"
                            target="_blank" rel="noreferrer noopener">Karlův hrádek u Purkarce</Link></li>
                        <li><Link href="https://www.c-budejovice.cz/" target="_blank"
                                  rel="noreferrer noopener">České Budějovice</Link></li>
                        <li>A mnoho dalšího</li>
                    </ul>
                </div>
            </div>

            </section>

        </main>
    </>);
};

export default Home;
