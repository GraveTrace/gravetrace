import { dehydrate, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import logo from "../assets/gravetracelogo.svg";
import candle from "../assets/candle.svg";
import heart from "../assets/heart.svg";
import { Link } from "react-router-dom";
import AddPost from "../components/AddPost.tsx"
import { useState } from "react";

export default function DeadProfile() {
    const [postShown,setPostShown] = useState(false);

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
    
    function ConvertDate(date: string){
        const formateddate = date.split("T")[0].split("-")
        const day = formateddate[2]
        const month = formateddate[1]
        const year = formateddate[0]
        return day+"/"+month+"/"+year
    }

    function clickAddPost(){
        setPostShown(current => !current)
        console.log(postShown)
    }

    return (       
        <>
        <div className="buried-background">
            <div className="navbar">
                <div className="navbar__logo">
                    <Link to="/"><img src={logo} alt="GraveTrace" /></Link>
                </div>
            </div>
            <div className="main">
                <div className="buriedpanel">
                    <div className="buriedpanel__buriedinfo">
                            <div className="buriedpanel__buriedinfo__names">
                                <div className="firstname">{dead.firstName}</div>
                                <div className="lastname">{dead.lastName}</div>
                            </div>
                            <div className="buriedpanel__buriedinfo__dates">
                                <div className="borndate">{ConvertDate(dead.bornDate)}</div>
                                <div>-</div>
                                <div className="dieddate">{ConvertDate(dead.diedDate)}</div>
                            </div>
                            <div className="buriedpanel__buriedinfo__icons">
                                <div className="candlecount"><img src={candle}></img>{dead.candleCount}</div>
                                <div className="followers"><img src={heart}></img>5</div>
                            </div>
                    </div>
                    <div className="buriedpanel__buriedinfo__buttons">
                            <button className="addcandle deadbtn">zostaw świeczkę</button>
                            <button className="follow deadbtn">obserwuj</button>
                    </div>
                </div>
                <div className="scrollablecontent">
                    <div className="description">
                        <div className="title">Opis</div>
                        <div className="desc">{dead.description}</div>
                        <hr className="break"></hr>
                        <div className="buttoncontainer">
                            <button className="addpost" onClick={clickAddPost}>dodaj post</button>
                        </div>
                    </div>
                    {postShown && <AddPost/>}
                </div>
            </div>
        </div>
        </>)
}