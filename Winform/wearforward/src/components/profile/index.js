import { useReducer, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import PropTypes from "prop-types";
import Header from "./header";
import Photos from "./photos";
import { getUserPhotosByUsername } from "../../services/firebase";
import React from "react";
import { useState } from "react";
import fb from "firebase";
import { firebase } from "../../lib/firebase";
export default function UserProfile({ user }) {
  const db = firebase.firestore();
  const storage = firebase.storage();

  const reducer = (state, newState) => ({ ...state, ...newState });
  const initialState = {
    profile: {},
    photosCollection: [],
    followerCount: 0,
  };

  const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const rand = Math.random();
  const getUserId = () => {
    return user.userId;
  };
  const [file, setFile] = useState(null);
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const onUpload = async () => {
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    db.collection("photos").add({
      userId: getUserId(),
      photoId: { rand },
      likes: [],
      imageSrc: await fileRef.getDownloadURL(),
      comments: [],
      dateCreated: Date.now(),
    });
  };

  useEffect(() => {
    async function getProfileInfoAndPhotos() {
      const photos = await getUserPhotosByUsername(user.username);
      dispatch({
        profile: user,
        photosCollection: photos,
        followerCount: user.followers.length,
      });
    }
    getProfileInfoAndPhotos();
  }, [user.username]);

  return (
    <>
      <Header
        photosCount={photosCollection ? photosCollection.length : 0}
        profile={profile}
        followerCount={followerCount}
        setFollowerCount={dispatch}
      />
      <Popup trigger={<button> Add Item</button>} position="right center">
        <div>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6">
                <p className="h4 text-center mb-4">Upload a new item</p>
                <label className="grey-text">Caption</label>
                <input type="text" id="caption" className="form-control" />
                <br />
                <div className="text-center mt-4">
                  <input type="file" onChange={onFileChange} />
                  <MDBBtn color="indigo" onClick={onUpload}>
                    Add item
                  </MDBBtn>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </Popup>
      <Photos photos={photosCollection} />
    </>
  );
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    dateCreated: PropTypes.number,
    emailAddress: PropTypes.string,
    followers: PropTypes.array,
    following: PropTypes.array,
    fullName: PropTypes.string,
    userId: PropTypes.string,
    username: PropTypes.string,
  }),
};
