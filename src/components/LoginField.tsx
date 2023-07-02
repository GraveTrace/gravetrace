import axios, { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useSignIn } from 'react-auth-kit';
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';

interface LoginValues {
    email: string;
    password: string;
}

export default function LoginField() {
    const signIn = useSignIn();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Wprowadź adres e-mail'),
            password: Yup.string().required('Wprowadź hasło')
        }),
        onSubmit: async (values: LoginValues) => {
            console.log(values);

            try {
                const response = await axios.post(
                    "http://projekt.kolodynsky.babia-gora.pl/authentication_token",
                    values
                );
                console.log(response.data.token);
                signIn({
                    token: response.data.token,
                    expiresIn: 3600,
                    tokenType: "Bearer",
                    authState: { email: values.email }
                })
                navigate('/profile');



            } catch (error) {
                if (error && error instanceof AxiosError)
                    setError(error.response?.data.message);

                console.log("Error: " + error)
            }
            // redirect to user profile
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="login__form__title">Panel logowania</div>
            <div className="form__elem">
                <label htmlFor="email">Login</label>
                <input
                    id="email"
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className="formik-error">{formik.errors.email}</div>
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
                <button type="submit">Zaloguj się</button>
                <div>Nie masz konta? <Link to="/register" className="link">Zarejestruj się</Link></div>
            </div>
        </form>
    );
}