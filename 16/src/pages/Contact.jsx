import { useState } from "react";
import "../App.css";
import Footer from "../components/Footer";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !number || !email) {
      return alert("Fill the all fields.");
    }

    const respopnse = await fetch(
      "https://ecom-app-4e9ce-default-rtdb.firebaseio.com/users.json",
      {
        method: "POST",
        body: JSON.stringify({ name, email, number }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await respopnse.json();
    console.log(data);
    setName("");
    setEmail("");
    setNumber("");
  };
  return (
    <>
      <div className="header">The Generics</div>
      <div className="music">ABOUT</div>
      <div className="about">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form_input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="form_input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="form_input">
            <label htmlFor="number">Mobile Number</label>
            <input
              type="text"
              name="number"
              className="input"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            ></input>
          </div>
          <div className="btn_holder">
            <button type="submit" className="tour_btn">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};
export default Contact;