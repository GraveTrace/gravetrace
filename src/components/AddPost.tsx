import { useFormik } from 'formik';

export default function AddPost() {
    const formik = useFormik({
        initialValues: {
            content: '',
        },
        onSubmit: values => {
            console.log(values);
            // redirect to new user created
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
        <div className="createpost">
            <div>
                <textarea 
                 id="content" 
                 className="postcontent"
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 value={formik.values.content}
                />
            </div>
            <div className="buttoncontainer">
                <button className="addpost">wyślij</button>
            </div>
        </div>
        </form>
    )
}