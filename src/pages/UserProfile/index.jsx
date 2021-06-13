import React from "react";
import { useSelector } from "react-redux";
import avatar from "./img/Ellipse 14.png";
import doc from "./img/file_copy_24px.png";
import sub from "./img/Subscriptions.png";
import "./UserProfile.less";
import set from "./img/setting.png";
import { SettingBody } from "./SettingBody";
export const UserProfile = () => {
  const state = useSelector((state) => state);
  return (
    <div className="container">
      <div className="navbar">
        {/* {
                state.localUsers.map((el,id) => {
                    return <div key={id}>
                        {el.userName} <br />
                        {el.userEmail} <br />
                        {el.userPassword}
                    </div>
                })
            } */}
        <div className="user">
          <img
            style={{ width: "100px", height: "100px" }}
            src={avatar}
            alt=""
          />
          <p>Albert C.</p>
        </div>
        <div className="side-bar">
          <img src={doc} alt="" />
          <p>Documents</p>
        </div>
        <div className="side-bar">
          <img src={sub} alt="" />
          <p>Subscriptions</p>
        </div>
        <div className="side-bar">
          <img src={set} alt="" />
          <p>Settings</p>
        </div>
        {/* settings */}
        <SettingBody />
      </div>
    </div>
  );
};
