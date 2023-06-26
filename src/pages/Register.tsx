import RegisterField from "../components/RegisterField";
import logo from "../assets/gravetracelogo.svg"
import { Link } from "react-router-dom";


export default function Register() {
    return (
        <div className="login">
            <div className="navbar">
                <div className="navbar__logo">
                    <Link to="/"><img src={logo} alt="GraveTrace" /></Link>
                </div>
            </div>
            <div className="login__form">
                <RegisterField />
            </div>
        </div>
    );
}