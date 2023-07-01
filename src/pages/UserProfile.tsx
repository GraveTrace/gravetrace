import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import avatar from "../assets/avatar.png";

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
        <div>
            <div>
                <div>zdjęcie</div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div>Twoi bliscy</div>
                <div>
                    <div>{user.username}</div>
                    <div>{user.lastname}</div>
                </div>
            </div>
            <div>
                <div>Obserwowani</div>
                <div>
                    <div><img src={avatar} /></div>
                    <div>{observators[0].firstName}</div>
                    <div>{observators[0].lastName}</div>
                </div>
            </div>

        </div>
    )
}