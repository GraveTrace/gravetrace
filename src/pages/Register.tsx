import RegisterField from "../components/RegisterField";
import logo from "../assets/gravetracelogo.svg"



export default function Register() {
    return (
        <div className="login">
            <div className="navbar">
                    <div className="navbar__logo">
                        <img src={logo} alt="GraveTrace" />
                    </div>
            </div>
            <div className="login__form">
                <RegisterField />
            </div>
        </div>
        );
}