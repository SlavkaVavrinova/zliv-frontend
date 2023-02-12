import Link from "next/link";
import Image from "next/image";
import chataRuzenka from "../home/img/chataRuzenka.png";


const Contact = () => {
    return (
        <>

                  <main className="content">
                <h1>Kontakt</h1>
                <h2>Chata Růženka</h2>
                <ul className="noDot">
                    <li>Zliv č.e. 53</li>
                    <li>Zliv 373 44</li>
                    <li><Link href="mailto:chata.ruzenka@seznam.cz">E-mail: chata.ruzenka@seznam.cz</Link></li>
                </ul>
                    {/*<li><Link>Mobil: +420 775 959 988, </Link><Link>+420 732 923 027</Link></li>
                    <li><Link>chataruzenka.cz</Link></li>
                    <li><Link>GPS: 49.0794931N, 14.3610150E</Link></li>*/}
                      <div className="mapBox center">
                          <iframe className="map"
                                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.377202084105!2d14.358836215715472!3d49.079471979309794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4773558b6f6464bf%3A0x2815c54421d2a1b6!2zQ2hhdGEgUsWvxb5lbmth!5e0!3m2!1scs!2scz!4v1676135262915!5m2!1scs!2scz"
                                  width="400" height="280"  allowFullScreen="" loading="lazy"
                                  referrerPolicy="no-referrer-when-downgrade"></iframe>
                          <iframe className="map" src="https://en.frame.mapy.cz/s/cuzufukade" width="400" height="280"
                                  frameBorder="0"></iframe>
                      </div>

                    <h2>Majitel</h2>
                      <ul className="noDot">
                        <li><strong>Martin Vavřina</strong></li>
                        <li>Vítězslava Nováka 1594/10</li>
                        <li>370 07 České Budějovice 7</li>
                        <li>IČ:    74918923</li>
                    </ul>






            </main>
        </>
    );
};

export default Contact;
