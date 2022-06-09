import React, {useEffect, useState} from "react";
import Clock from "./Clock";
import Stats from "./Stats";
import FriendBar from "./FriendBar";
import { getUser } from "../server/players";

const Main = () => {

    const [user, setUser] = useState({profile: {avatar: '', name: ''}});
    useEffect(() => {
            getUser()
            .then((response) =>{
                setUser(response.data)
            })
            .catch(() =>{});
        }, []);

    return(
        <div>
            <div className="container">
               <p>Hello, {user.profile.name} </p>
            </div>
            <div className="clockSite">
                <Clock/>
            </div>
            <div className="stats">
                <Stats/>
            </div>
            <div className="friends">
                <FriendBar/>
            </div>
        </div>
    )
}

export default Main;