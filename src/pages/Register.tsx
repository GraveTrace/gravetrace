import RegisterField from "../components/RegisterField";
import logo from "../assets/gravetracelogo.svg"
import { Link } from "react-router-dom";


export default function Register() {
    return (
        <div>
            <div className="navbar__logo">
                    <img src={logo} alt="GraveTrace" />
                </div>
            <div>Panel rejestracji</div>
            <RegisterField />
            <div>Masz już konto? <Link to="/login">Zaloguj się</Link></div>
        </div>
        );
}