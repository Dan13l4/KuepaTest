import React, {useEffect, useState} from "react";
import {getUser} from "../server/players.js"
import logo from "../assets/img/logo.png"
import MenuItem from "./MenuItem.js";

function NavBar(props) {

    const [user, setUser] = useState({profile: {avatar: '', name: ''}});
    const [inactive, setInactive] = useState(false);
    
    const menuItems = [
      {name: "Home", to:"/"},
      {name: "Tasks", to:"/tasks"}
    ]

    useEffect(() => {
    props.onCollapse(inactive)
		getUser()
		.then((response) =>{
            setUser(response.data)
		})
		.catch(() =>{});
	}, []);

  return (
    <div className= {`Sidebar ${inactive ? "inactive" : ""}`}>
      <div className="top-section">

        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="backArrow">
          <button className="displayBtn"  onClick={() => setInactive(!inactive)}>
            {inactive ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
            </svg>: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
          </svg>}
      
          </button>
        </div>

        <div className="search">
          <button className="searchButton">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
          </button>
          <input type="text" placeholder="search" />
        </div>
      </div>

      <div className="divider"></div>


      <div className="main-menu">
          <MenuItem name={menuItems[0].name} to={menuItems[0].to} onClick=""/>
      </div>

      <div className="sideMenuFooter">

            <div className="avatar">
              <img src={user.profile.avatar} alt="userImg" />
            </div>
            <div className="user-info">
                <h5>Username: {user.profile.name} </h5>
            </div>

      </div>

    </div>
  );
}

export default NavBar;