import Image from 'next/image'
import Link from 'next/link';

import first from "./img/0.jpg";
import first1 from "./img/1.jpg";
import first2 from "./img/2.jpg";
import first3 from "./img/3.jpg";
import first4 from "./img/4.jpg";
import first5 from "./img/5.jpg";
import first6 from "./img/6.jpg";
import first7 from "./img/7.jpg";
import first8 from "./img/8.jpg";
import first9 from "./img/9.jpg";
import first10 from "./img/10.jpg";
import first11 from "./img/11.jpg";
import first12 from "./img/12.jpg";
import first13 from "./img/13.jpg";
import first14 from "./img/14.jpg";
import first15 from "./img/15.jpg";
import first16 from "./img/16.jpg";

const Photogalerie = () => {
    //todo zmensit obrazky, nazvy, alty
    return (<>
        <main className="container">
            <section className="content">
                <h1>Fotogalerie</h1>

                    <Image className="gallery__img" src={first} alt="Chata Růženka ubytování" width={400}/>
                    <Image className="gallery__img" src={first1} alt="Chata Růženka ubytování" width={400}/>
                    <Image className="gallery__img" src={first2} alt="Chata Růženka ubytování" width={400}/>
                    <Image className="gallery__img" src={first3} alt="Chata Růženka ubytování" width={400}/>
                    <Image className="gallery__img" src={first4} alt="Chata Růženka ubytování" width={400}/>
                    <Image className="gallery__img" src={first5} alt="Chata Růženka ubytování" width={400}/>
                    <Image className="gallery__img" src={first6} alt="Chata Růženka ubytování" width={400}/>
                    <Image className="gallery__img" src={first7} alt="Chata Růženka ubytování" width={400}/>
                    <Image className="gallery__img" src={first8} alt="Chata Růženka ubytování" width={400}/>
                    <Image className="gallery__img" src={first9} alt="Chata Růženka ubytování" width={400}/>
                    <Image className="gallery__img" src={first10} alt="Chata Růženka ubytování" width={400}/>
                    <Image className="gallery__img" src={first11} alt="Chata Růženka ubytování" width={400}/>
                    <Image className="gallery__img" src={first12} alt="Chata Růženka ubytování" width={400}/>
                    <Image className="gallery__img" src={first13} alt="Chata Růženka ubytování" width={400}/>
                    <Image className="gallery__img" src={first14} alt="Chata Růženka ubytování" width={400}/>
                    <Image className="gallery__img" src={first15} alt="Chata Růženka ubytování" width={400}/>
                    <Image className="gallery__img" src={first16} alt="Chata Růženka ubytování" width={400}/>

            </section>
        </main>
        </>);
};

export default Photogalerie;
