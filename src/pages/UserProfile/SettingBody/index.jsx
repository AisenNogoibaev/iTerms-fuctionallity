import React from "react";
import iconImg from "../img/iconPhoto.png";
import "./SettingBody.less";
import { TextField } from "../../../components/TextField";
import { CustomButton } from "../../../components/CustomButton";
import checkIcon from "../../../images/Done.png";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { edit_user } from "../../../store/actions";
import { Link } from "react-router-dom";
import ImageUploader from "react-images-upload";

export const SettingBody = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  const [lastName, setLastName] = useState(currentUser.lastName);
  const [firstName, setFirstName] = useState(currentUser.firstName);
  const [inputPhoto, setInputPhoto] = useState();
  return (
    <div className="settings-block ">
      <div>
        <h1>Settings</h1>
        <div className="setting-header">
          <div className="setting-img">
            <img src={iconImg} alt="" />
            {/* <input
              //   value={inputPhoto}
              onChange={(event) => {
                setInputPhoto("");
                console.log(event);
              }}
              type="file"
              name="photo"
              className="inputPhoto"
            /> */}
            <ImageUploader
              className="inputPhoto"
              withIcon={true}
              buttonText="Choose images"
              //   onChange={onDrop}
              imgExtension={[".jpg", ".gif", ".png", ".gif"]}
              maxFileSize={5242880}
            />
          </div>
          <div>
            <p>Choose File</p>
            <span>JPG, JPEG, PNG max file size 5MB</span>
          </div>
        </div>
        <p className="browse">
          {" "}
          <a href="#">Browse</a>
        </p>
      </div>
      {/* inputs */}
      {/* inp stoke-1 */}
      <div className="inputs">
        <div className="inpStoke-1 ">
          <div className="TextField">
            <div className="alert__parent">
              <TextField
                label="First Name"
                placeholder={firstName}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value.trim())}
                type="text"
              />
              {!!!firstName && (
                <div className="alert__danger">
                  <div className="alert__danger__text">
                    Enter the First Name
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="alert__parent">
            <TextField
              label="Last Name"
              onChange={(e) => setLastName(e.target.value.trim())}
              placeholder={lastName}
              value={lastName}
            />
            {!!!lastName && (
              <div className="alert__danger">
                <div className="alert__danger__text">Enter the Last Name</div>
              </div>
            )}
          </div>
        </div>
        {/* inp stoke-2 */}
        <div className="inpStroke-2">
          <TextField
            label="Languege"
            placeholder="English - United States "
            type="text"
          />
        </div>
        {/* inp stoke-3 */}
        <div className="inpStroke-3">
          <TextField label="Email" type="text" value={currentUser.userEmail} />
          {/* <img src={checkIcon} alt="checkIcon" /> */}
          <div className="link">
            <Link to="/changePassword">
              <a href="#">Change Password</a>
            </Link>
          </div>
        </div>
        {/* inp last-stoke-4 */}
        <div className="inpLastStroke">
          <div>
            <Link to="/edit_password">
              <a href="#">Delete my Account</a>
            </Link>
          </div>
          <div>
            <CustomButton
              primary
              className="CustomButton"
              onClick={() => {
                dispatch(
                  edit_user({
                    lastName,
                    firstName,
                    userEmail: currentUser.userEmail,
                    userPassword: currentUser.userPassword,
                    id: currentUser.id,
                    photo: "",
                  })
                );
              }}
            >
              Save
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};
