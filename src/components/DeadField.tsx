import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function DeadField() {
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            description: '',
            dateofbirth: '',
            dateofdeath: ''
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required('Wprowadź imię'),
            lastname: Yup.string().required('Wprowadź nazwisko'),
            description: Yup.string(),
            dateofbirth: Yup.date().required('Niepoprawna data'),
            dateofdeath: Yup.date().required('Niepoprawna data')
        }),
        onSubmit: values => {
            axios.post(import.meta.env.VITE_API_URL_DIED_POST, {
                "firstName": values.firstname,
                "lastName": values.lastname,
                "description": values.description,
                "bornDate": values.dateofbirth,
                "diedDate": values.dateofdeath,
                "candleCount": 0
            }).catch((error) => console.log(error.response.data))
            // redirect to new user created
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="login__form__title">Dodaj zmarłego</div>
            <div className="form__elem">
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
            <div className="form__elem">
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

            <div className="form__elem">
                <label htmlFor="description">Opis</label>
                <input
                    id="description"
                    name="description"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                />
                {formik.touched.description && formik.errors.description ? (
                    <div className="formik-error">{formik.errors.description}</div>
                ) : null}
            </div>
            <div className="form__elem">
                <label htmlFor="dateofbirth">Data urodzenia</label>
                <input
                    id="dateofbirth"
                    name="dateofbirth"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.dateofbirth}
                />
                {formik.touched.dateofbirth && formik.errors.dateofbirth ? (
                    <div className="formik-error">{formik.errors.dateofbirth}</div>
                ) : null}
            </div>
            <div className="form__elem">
                <label htmlFor="dateofdeath">Data śmierci</label>
                <input
                    id="dateofdeath"
                    name="dateofdeath"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.dateofdeath}
                />
                {formik.touched.dateofdeath && formik.errors.dateofdeath ? (
                    <div className="formik-error">{formik.errors.dateofdeath}</div>
                ) : null}
            </div>
            <div className="form__submit">
                <button type="submit">utwórz profil zmarłego</button>
            </div>
        </form>
    );
}