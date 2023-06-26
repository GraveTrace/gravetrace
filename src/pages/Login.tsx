import logo from "../assets/gravetracelogo.svg"
import { Link } from "react-router-dom";
import LoginField from "../components/LoginField";


export default function Login() {
    return (
        <div className="login">
            <div className="navbar">
                <div className="navbar__logo">
                    <Link to="/"><img src={logo} alt="GraveTrace" /></Link>
                </div>
            </div>
            <div className="login__form">
                <LoginField />
            </div>
        </div>
    );
}