import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import "./user.css";
import { setProfilThunk, setUsernameThunk } from "../../thunkActionsCreator";

function User() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user.user);
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const [edit, setEdit] = useState(false);
  const userName = useRef();

  const setProfilResult = dispatch(setProfilThunk(token));

  if (token === null) {
    return <Navigate to="../404/" replace={true} />;
  }

  function userChange() {
    edit === true ? setEdit(false) : setEdit(true);
  }

  function saveName(evt) {
    evt.preventDefault();
    const finalUserName = userName.current.value + " ";
    if (userName.current.value !== "") {
      const setUsernameResult = dispatch(
        setUsernameThunk(finalUserName, token)
      );
      userChange();
    }
  }

  /*async function putName(postData) {
    await fetch("http://localhost:3001/api/V1/user/profile", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(postData),
    });
    dispatch(userSlice.actions.setUser(postData.userName));
    userChange();
  }*/

  return (
    <main className="main bg-dark">
      <div className="header">
        {edit === true ? (
          <p></p>
        ) : (
          <div>
            <h1>
              Welcome back
              <br />
              {user}!
            </h1>
            <button className="edit-button" onClick={userChange}>
              Edit Name
            </button>
            <br></br>
            <br></br>
          </div>
        )}

        {edit === true ? (
          <div>
            <form>
              <h1>Edit user info</h1>
              <div className="edit">
                <p className="text">User name : </p>
                <input
                  className="inputBox"
                  ref={userName}
                  type="text"
                  id="username"
                />
              </div>
              <br></br>
              <div className="edit">
                <p className="text">First name : </p>
                <input
                  className="inputBox"
                  disabled
                  value={firstName}
                  type="text"
                  id="username"
                />
              </div>
              <br></br>
              <div className="edit">
                <p className="text">Last name : </p>
                <input
                  className="inputBox"
                  disabled
                  value={lastName}
                  type="text"
                  id="username"
                />
              </div>
              <br></br>
              <button
                className="edit-button nameButton"
                onClick={(evt) => saveName(evt)}
              >
                Save
              </button>
              <button className="edit-button nameButton" onClick={userChange}>
                Cancel
              </button>
            </form>
          </div>
        ) : (
          <p></p>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default User;
