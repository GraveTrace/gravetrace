import logo from "../assets/gravetracelogo.svg"
import { Link } from "react-router-dom";
import LoginField from "../components/LoginField";


export default function Login() {
    return (
        <div>
            <div className="navbar__logo">
                    <img src={logo} alt="GraveTrace" />
                </div>
            <div>Panel rejestracji</div>
            <LoginField />
            <div>Nie masz konta? <Link to="/register">Zarejestruj się</Link></div>
        </div>
        );
}