import { useQuery } from "@tanstack/react-query";
import logo from "../assets/gravetracelogo.svg"
import axios from "axios";
import avatar from "../assets/avatar.png";
import { Link } from "react-router-dom";

export default function UserProfile() {

    async function getUserProfile() {
        const user = await axios
            .get(import.meta.env.VITE_API_URL_USER_PROFILE);
        return user.data;
    }

    async function getUserObservators() {
        const observators = await axios
            .get(import.meta.env.VITE_API_URL_USER_OBSERVATORS);
        return observators.data;
    }

    const { data: user, isLoading: loadUser } = useQuery({
        queryKey: ["users"],
        queryFn: () => getUserProfile()
    });

    const { data: observators, isLoading: loadObservators } = useQuery({
        queryKey: ["observators"],
        queryFn: () => getUserObservators()
    });



    if (loadUser || loadObservators) return "Loading...";

    console.log(observators)
    console.log(user)

    return (
        <div className="login">
            <div className="navbar">
                <div className="navbar__logo">
                    <Link to="/"><img src={logo} alt="GraveTrace" /></Link>
                </div>
            </div>
            <div className="profilemain">
                <div className="profiledata">
                    <div className="userpanel">
                        <div className="userphoto"><img src={avatar} /></div>
                        <div className="userpanel__text">
                            <div className="username">{user.username}</div>
                            <div className="lastname">{user.lastname}</div>
                        </div>
                    </div>
                    <div className="buriedpanel">
                        <div className="buriedpanel__title">Twoi bliscy</div>
                        <div className="buriedpanel__content">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="observatorpanel">
                    <div className="observatorpanel__title">Obserwowani</div>
                    <div className="observatorpanel__content">
                        <Link to="/buried/40" className="observatorpanel__content__link">
                            <div className="observatorpanel__content__row">
                                <div className="observatorphoto"><img src={avatar} /></div>
                                <div className="firstname">{observators[0].firstName}</div>
                                <div className="lastname">{observators[0].lastName}</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}