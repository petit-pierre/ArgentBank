import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useState, useRef } from "react";

function User() {
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  const [edit, setEdit] = useState(false);
  const userName = useRef();

  if (token === null) {
    return <Navigate to="../404/" replace={true} />;
  }

  function userChange() {
    edit === true ? setEdit(false) : setEdit(true);
  }

  function saveName(evt) {
    evt.preventDefault();
    if (userName.current.value !== "") {
      const postData = { userName: userName.current.value };
      putName(postData);
    }
  }

  async function putName(postData) {
    const post = await fetch("http://localhost:3001/api/V1/user/profile", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(postData),
    });
    let result = await post.json();
    console.log(result);

    /*if (result.message === "Error: User not found!") {
      setError(true);
    } else {
      dispatch(setToken(result.body.token));
      dispatch(setUser(postData.email));
      navigate("/User/" + postData.email);
    }*/
  }

  async function test() {
    const post = await fetch("http://localhost:3001/api/V1/user/profile", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json;charset=utf-8",
      },
      //body: JSON.stringify(),
    });
    let result = await post.json();
    console.log(result);

    /*if (result.message === "Error: User not found!") {
      setError(true);
    } else {
      dispatch(setToken(result.body.token));
      dispatch(setUser(postData.email));
      navigate("/User/" + postData.email);
    }*/
  }

  test();

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {user}!
        </h1>

        {edit === true ? (
          <div>
            <button className="edit-button" onClick={userChange}>
              Edit Name
            </button>
            <br></br>
            <br></br>
            <form>
              <label htmlFor="username">Type new username :</label>
              <br></br>
              <br></br>
              <input ref={userName} type="text" id="username" />
              <br></br>
              <br></br>
              <button className="edit-button" onClick={(evt) => saveName(evt)}>
                Save new username
              </button>
            </form>
          </div>
        ) : (
          <button className="edit-button" onClick={userChange}>
            Edit Name
          </button>
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
