import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function LoginField() {
    const formik = useFormik({
        initialValues: {
            login: '',
            password: ''
        },
        validationSchema: Yup.object({
            login: Yup.string().required('Wprowadź adres e-mail'),
            password: Yup.string().required('Wprowadź hasło')
        }),
        onSubmit: values => {
            console.log(values);
            // redirect to user profile
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
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
                    <div>{formik.errors.login}</div>
                ) : null}
            </div>

            <div>
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
                    <div>{formik.errors.password}</div>
                ) : null}
            </div>

            <button type="submit">Zaloguj się</button>
        </form>
    );
}