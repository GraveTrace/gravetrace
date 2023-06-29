import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"

export default function DeadProfile() {
    const params = useParams();
    const deadId = params.deadId;
    async function getDeadPerson(deadId: string | undefined) {
        const response = await fetch(
            import.meta.env.VITE_API_URL_DIED + deadId
        );
        return response.json();
    }

    const { data: dead, isLoading, isError } = useQuery({
        queryKey: ["users", deadId],
        queryFn: () => getDeadPerson(deadId)
    });

    if (isLoading) return 'Loading...';
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