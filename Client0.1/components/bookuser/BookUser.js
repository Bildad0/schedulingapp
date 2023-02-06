import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../bookuser/bookuser.css";

const BookUser = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { user } = useParams();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, fullName, message);
    setFullName("");
    setMessage("");
  };

  return (
    <div className="bookContainer">
      <h2 className="bookTittle"> Book a Session with {user}</h2>
      <div className=" formContent">
        {" "}
        <form className="bookingForm" onSubmit={onSubmit}>
          <label htmlFor="fullName"> Full Name :</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="textinput"
          />
          <label htmlFor="email">Email address :</label>
          <input
            id="email"
            name="email"
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="textinput"
          />
          <label htmlFor="message">Any important note? (optional)</label>
          <textarea
            rows={9}
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="textinput"
          />

          {/* will add the select session dropdown */}
          <label htmlFor="session" className="session">
            {" "}
            Sellect your prefered session
          </label>

          <button className="bookingBtn">SEND</button>
        </form>
      </div>
    </div>
  );
};

export default BookUser;