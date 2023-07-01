import { useFormik } from "formik";
import * as Yup from 'yup';
import { Link } from "react-router-dom";

export default function RegisterField() {
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            login: '',
            password: ''
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required('Wprowadź imię'),
            lastname: Yup.string().required('Wprowadź nazwisko'),
            login: Yup.string().required('Wprowadź adres e-mail'),
            password: Yup.string().required('Wprowadź hasło')
        }),
        onSubmit: values => {
            console.log(values);
            // redirect to login page with state "Teraz możesz się zalogować"
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="login__form__title">Panel rejestracji</div>
            <div className="form__names">
                <div className="form__elem__short">
                    <label htmlFor="firstname">Imię</label>
                    <input
                        id="firstname"
                        name="firstname"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstname}
                    />
                    {formik.touched.firstname && formik.errors.firstname ? (
                        <div className="formik-error">{formik.errors.firstname}</div>
                    ) : null}
                </div>
                <div className="form__elem__short">
                    <label htmlFor="lastname">Nazwisko</label>
                    <input
                        id="lastname"
                        name="lastname"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastname}
                    />
                    {formik.touched.lastname && formik.errors.lastname ? (
                        <div className="formik-error">{formik.errors.lastname}</div>
                    ) : null}
                </div>
            </div>
            <div className="form__elem">
                <label htmlFor="login">Login</label>
                <input
                    id="login"
                    name="login"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.login}
                />
                {formik.touched.login && formik.errors.login ? (
                    <div className="formik-error">{formik.errors.login}</div>
                ) : null}
            </div>

            <div className="form__elem">
                <label htmlFor="password">Hasło</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div className="formik-error">{formik.errors.password}</div>
                ) : null}
            </div>
            <div className="form__submit">        
                <button type="submit">Zarejestruj się</button>
                <div>Masz już konto? <Link to="/login" className="link">Zaloguj się</Link></div>
            </div>
        </form>
    );
}