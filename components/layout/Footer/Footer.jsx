
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__top">

                <p >Chata Růženka, Zliv č.e. 53, Zliv 373 44</p>


                <p >Mobil: +420 775 959 988, +420 732 923 027, Email:
                    chata.ruzenka@seznam.cz</p>


            </div>


                <div className="footer__bottom">
                    &copy; Chata Růženka 2022 Made with ️&hearts; <Link className="footer__link" href="https://slavkavav.cz/"
                                                                        target="_blank">SlávkaVav</Link>
                </div>


        </footer>
    )
};

export default Footer;
