import { React, useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import useAuthListener from "../../hooks/use-auth-listener";
import { getUserByUsername } from "../../services/firebase";
export default function PopUp() {
  const { username } = useParams();
  let userIdString;
  async function getUserId() {
    const [user] = await getUserByUsername(username);

    userIdString = user;
  }
  console.log(userIdString);
  return (
    <Popup trigger={<button> Add Item</button>} position="right center">
      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <form>
                <p className="h4 text-center mb-4">Upload a new item</p>
                <label className="grey-text">Caption</label>
                <input type="text" id="caption" className="form-control" />
                <br />
                <label
                  htmlFor="defaultFormLoginPasswordEx"
                  className="grey-text"
                >
                  {String(userIdString)}
                </label>
                <input
                  type="password"
                  id="defaultFormLoginPasswordEx"
                  className="form-control"
                />
                <div className="text-center mt-4">
                  <MDBBtn color="indigo" type="submit">
                    Login
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </Popup>
  );
}
