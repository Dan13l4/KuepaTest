import React, {useEffect, useState} from "react";
import {getProPlayers} from "../server/players.js"

const FriendBar = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getProPlayers()
        .then((response) =>{
            for(let i = 0; response && (i < response.length || i < 5); i++) {
                console.log(response.data[i])
                setUsers(response.data[i].avatar)
            }
        })
        .catch(() =>{});
        }, []);

    return(
        <div className="friendContainer">
            <div className="allFriends">
                <img src={users} alt="" />
            </div>
        </div>
    )
}

export default FriendBar;