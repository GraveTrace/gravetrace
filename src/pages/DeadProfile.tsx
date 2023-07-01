import axios  from "axios";
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
    //const [candleCount,setCandleCount] = useState(0);

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
    //console.log(dead.candleCount)
    /*async function incrementCandleCount(){
        //setCandleCount(candleCount+1);
        const candles = await axios
            .patch(import.meta.env.VITE_API_URL_DIED_CANDLECOUNT, dead.id);
        return candles.data;
    }*/

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
                            <button className="addcandle deadbtn" /*</div>onClick={incrementCandleCount}*/>zostaw świeczkę</button>
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
                    <div className="postslist">
                        <div className="post">
                            <div className="posttitle">
                                <div>{posts[0].username}</div>
                                <div className="postlastname">{posts[0].lastname}</div>
                            </div>
                            <div className="postcontent">
                                {posts[0].content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>)
}