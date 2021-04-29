import { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";
import { doesUsernameExist } from "../services/firebase";

import wf from "../assets/images/wf.png"
import wave from "../assets/images/wave.png"

export default function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const handleSignUp = async (event) => {
    event.preventDefault();

    const usernameExists = await doesUsernameExist(username);
    if (!usernameExists.length) {
      try {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password);

        // authentication
        // -> emailAddress & password & username (displayName)
        await createdUserResult.user.updateProfile({
          displayName: username,
        });

        // firebase user collection (create a document)
        await firebase
          .firestore()
          .collection("users")
          .add({
            userId: createdUserResult.user.uid,
            username: username.toLowerCase(),
            fullName,
            emailAddress: emailAddress.toLowerCase(),
            following: ["2"],
            followers: [],
            dateCreated: Date.now(),
          });

        history.push(ROUTES.DASHBOARD);
      } catch (error) {
        setFullName("");
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      }
    } else {
      setUsername("");
      setError("That username is already taken, please try another.");
    }
  };

  useEffect(() => {
    document.title = "Sign Up - Wear Forward";
  }, []);

  return (
    <div className="bg-white-dirty">
    <div className="container flex mx-auto  max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white-clean p-4 border border-gray-primary mb-4 rounded">
          <h1 className="flex justify-center -mt-44 -mb-52">
            <img src= {wf} className="item-center p-60"/>
          </h1>

          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

          <form onSubmit={handleSignUp} method="POST">
            <input
              aria-label="Enter your username"
              type="text"
              placeholder="Username"
              className="text-sm text-black-light w-full pl-1 -mt-10 ml-52 py-5 pr-44 w-3/7 mr-50 h-2 border border-gray-primary rounded mb-4"
              onChange={({ target }) => setUsername(target.value)}
              value={username}
            />
            <input
              aria-label="Enter your full name"
              type="text"
              placeholder="Full name"
              className="text-sm text-black-light w-full pl-1 -mt-10 ml-52 py-5 pr-44 w-3/7  mr-50 h-2 border border-gray-primary rounded mb-4"
              onChange={({ target }) => setFullName(target.value)}
              value={fullName}
            />
            <input
              aria-label="Enter your email address"
              type="text"
              placeholder="Email address"
              className="text-sm text-black-light w-full pl-1 -mt-10 ml-52 py-5 pr-44 w-3/7  mr-50 h-2 border border-gray-primary rounded mb-4"
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            />
            <input
              aria-label="Enter your password"
              type="password"
              placeholder="Password"
              className="text-sm text-black-light pl-1 w-full -mt-10 ml-52 py-5 w-3/7  mr-50 h-2 border border-gray-primary rounded mb-4"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-white-clean text-white w-full rounded px-24 ml-60 h-2/5 p-4 font-bold
            ${isInvalid && "opacity-50 "}`}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="flex justify-center bg-white-clean items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
          <p className="text-sm">
            Have an account?{` `}
            <Link to={ROUTES.LOGIN} className="font-bold text-blue-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
