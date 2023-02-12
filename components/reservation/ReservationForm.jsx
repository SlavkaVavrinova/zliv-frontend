import {useEffect, useState} from "react";


const ReservationForm = () => {

    const [terms, setTerms] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       const nacistData = async () => {
            try {
                const resp = await fetch("http://localhost/zliv/www/api/");
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
       <form id="reservationForm" className="form">
           {loading ? (
               <div className="loading">Načítám data
                   <div className="spinner"></div>
               </div>
           ) : (
               <p className="class">{termsString}</p>
           )}


           <div className="form__field">
               <label className="form__label" htmlFor="name">
                   Jméno a příjmení <span className="required">*</span></label
               >
               <input
                   className="form__input"
                   type="text"
                   name="jmeno"
                   id="name"
                   required
               />
           </div>

           <div className="form__field">
               <label className="form__label" htmlFor="email">
                   E-mail <span className="required">*</span></label
               >
               <input
                   className="form__input"
                   type="email"
                   name="email"
                   id="email"
                   required
                   value="@"
               />
           </div>

           <div className="form__field">
               <label className="form__label" htmlFor="tel"> Telefon </label>
               <input
                   className="form__input"
                   type="tel"
                   name="tel"
                   id="tel"
                   value="+420"
               />
           </div>

           <p>V případě zájmu o kratší termín či dva týdny, vyberte přibližný týden a vyplňte upřesnění níže. Ostatní
               termíny jsou bohužel obsazeny.</p>

           <div className="form__field">
               <label className="form__label" htmlFor="date">Termín rezervace</label>
               <select className="form__select" name="date" id="date">
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>

               </select>
           </div>

           <div className="form__field">
               <label className="form__label" htmlFor="message"
               >Chcete něco dalšího sdělit
               </label>
               <textarea
                   className="form__textarea"
                   name="zprava"
                   id="message"
                   rows="5"
                   cols="20"
                   maxLength="2000"
               ></textarea>
           </div>
           <p className="text-right small">
               <span className="required">*</span> Požadované údaje
           </p>

           <div className="error-message" id="error-message"></div>

           <div className="form__button">
               <button className="btn" type="submit" name="send" id="send">
                   Odeslat poptávku
               </button>
           </div>
       </form>
   );
};

export default ReservationForm;
