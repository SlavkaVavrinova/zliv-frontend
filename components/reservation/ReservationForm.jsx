import { useFormik } from 'formik';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const ReservationForm = ({ terms, loading }) => {


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: 'Vyber ',
            info: '',
        },
        onSubmit: async (values) => {
            const url = 'http://localhost/zliv/www/api/request';
            const data = {
                name: values.name,
                email: values.email,
                phone: values.phone,
                date: values.date,
                info: values.message,
            };

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    console.log('Formulář úspěšně odeslán.');
                } else {
                    console.error('Chyba při odesílání formuláře.');
                }
            } catch (error) {
                console.error(error);
            }
        },
    });

    return (
        <Formik
            initialValues={{ name: '', email: '', phone: '', date: '' , info:''}}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                    <div className="form__field">

                    <label className="form__label" htmlFor="name">
                        Jméno a příjmení <span className="required">*</span>
                    </label>
                    <input
                        className="form__input"
                        type="text"
                        name="name"
                        id="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        required
                    />
                    </div>

                    <div className="form__field">
                        <label className="form__label" htmlFor="email">
                            E-mail <span className="required">*</span>
                        </label>
                        <input
                            className="form__input"
                            type="email"
                            name="email"
                            id="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            required
                        />
                    </div>

                    {errors.email && touched.email && errors.email}

                    <div className="form__field">
                        <label className="form__label" htmlFor="phone">
                            Telefon
                        </label>
                        <input
                            className="form__input"
                            type="tel"
                            name="phone"
                            id="phone"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone}                        />
                    </div>

                    <p>
                        V případě zájmu o kratší termín či dva týdny, vyberte přibližný týden a
                        vyplňte upřesnění níže. Ostatní termíny jsou bohužel obsazeny.
                    </p>

                    <div className="form__field">
                        <label className="form__label" htmlFor="date">
                            Termín rezervace
                        </label>
                        <Field name="date" as="select"
                               className="form__select"

                               id="date"
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.date}
                        >
                            <option value="">Vyber
                            </option>
                            {loading ? (
                                    <span className="spinner"></span>
                            ) : (
                                <>
                                    {terms.map((term) => {
                                        if (term.status === 1) {
                                            return (
                                                <option key={term.id} value={term.term}>
                                                    {term.term}
                                                </option>
                                            );
                                        }
                                        return null;
                                    })}
                                </>
                            )}
                        </Field>

                    </div>

                    <div className="form__field">
                        <label className="form__label" htmlFor="info">
                            Chcete něco dalšího sdělit
                        </label>
                        <textarea
                            className="form__textarea"
                            name="info"
                            id="info"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.info}
                            rows="5"
                            cols="20"
                            maxLength="2000"
                        ></textarea>
                    </div>
                    <p className="text-right small">
                        <span className="required">*</span> Požadované údaje
                    </p>

                    <div className="form__button">
                        <button className="btn" type="submit" name="send" id="send" disabled={isSubmitting}>
                            Odeslat poptávku
                        </button>
                    </div>


                </form>
            )}
        </Formik>

    );
};

export default ReservationForm;