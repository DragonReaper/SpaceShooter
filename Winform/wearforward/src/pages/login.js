import { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import Header from "../components/header";
import * as ROUTES from "../constants/routes";
import wf from "../assets/images/wf.png"
import dressmaker from "../assets/images/woman.png"

export default function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setEmailAddress("");
      setPassword("");
      setError(error.message);
    }
  };

  useEffect(() => {
    document.title = "Login - Wear Forward";
  }, []);

  return (
    <div className="max-h-full max-w-full m-0 bg-white-dirty gradient-to-br from-pink-base to-pink-primary h-110">
      <div className="container flex mx-auto max-w-screen-md ml-56 items-center h-screen">
      <img src= {dressmaker} className="space-x-44 pl-24"/>
      <div className="flex h-2 w-3/5">
      </div>
      <div className="flex flex-col w-3/5">
        <div className="flex flex-col items-center bg-white-clean ml-72 p-12 border border-gray-primary mb-4 rounded">
          <h1 className="flex justify-center w-full">
            <img src={wf} className="mt-2 w-6/12" />
          </h1>

          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

          <form onSubmit={handleLogin} method="POST">
            <input
              aria-label="Enter your email address"
              type="text"
              placeholder="Email address"
              className="text-sm text-gray-base w-full mr-3 py-5 px-9 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            />
            <input
              aria-label="Enter your password"
              type="password"
              placeholder="Password"
              className="text-sm text-gray-base w-full mr-3 py-5 px-9 h-2 border item-center border-gray-primary rounded mb-2"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-medium text-white w-full rounded px-24 h-2/5 p-4 font-bold
            ${isInvalid && "opacity-50"}`}
            >
              Login
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col ml-72  w-full bg-white-clean p-2 rounded border border-gray-primary">
          <p className="text-sm">
            Don't have an account?{` `}
            <Link to={ROUTES.SIGN_UP} className="font-bold text-blue-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}