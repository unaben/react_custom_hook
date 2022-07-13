import React from "react";
import { useState } from "react";
import useValidate from "../hooks/useValidate";
const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isValidate = useValidate({ email, password });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isValidate);
    // console.log('e', email, 'p', password);
    setEmail("");
    setPassword("");
  };

  return (
    <div
      className="mt-4 border rounded shadow"
      style={{ width: "40%", height: "40%", margin: "auto" }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="mt-2" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="mt-3 btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
