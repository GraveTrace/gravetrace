import { Link } from "react-router-dom";
import logo from "../assets/gravetracelogo.svg"
import DeadField from "../components/DeadField";

export default function CreateDeadProfile() {
    return (
        <div className="login">
            <div className="navbar">
                <div className="navbar__logo">
                    <Link to="/"><img src={logo} alt="GraveTrace" /></Link>
                </div>
            </div>
            <div className="login__form">
                <DeadField />
            </div>
        </div>
    );
}