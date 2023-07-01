import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios  from "axios";

export default function DeadProfile() {
    const params = useParams();
    const deadId = params.deadId;
    async function getDeadPerson(deadId: string | undefined) {
        const response = await fetch(
            import.meta.env.VITE_API_URL_DIED + deadId
        );
        return response.json();
    }

    async function getDeadPersonPosts() {
        const posts = await axios
            .get(import.meta.env.VITE_API_URL_DIED_GETPOSTS + deadId + "/posts");
        return posts.data;
    }

    const { data: dead, isLoading: loadDead, isError } = useQuery({
        queryKey: ["users", deadId],
        queryFn: () => getDeadPerson(deadId)
    });

    const { data: posts, isLoading: loadPosts} = useQuery({
        queryKey: ["posts"],
        queryFn: () => getDeadPersonPosts()
    });
    console.log(posts)
    if (loadDead || loadPosts) return 'Loading...';
    if (isError) { isError }

    return (
        <>
            <div>
                <div>{dead.firstName}</div>
                <div>{dead.lastName}</div>
            </div>
            <div>
                <div>{dead.bornDate}</div>
                <div>{dead.diedDate}</div>
            </div>
            <div>
                <div>{dead.candleCount}</div>
            </div>
            <div>
                <div>Opis</div>
                <div>{dead.description}</div>
            </div>
        </>)
}