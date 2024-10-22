import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  function handleclick() {
    localStorage.setItem(
      "userdata",
      JSON.stringify({ userName: name, userEmail: email, userMessage: text })
    );
    setName("");
    setEmail("");
    setText("");
  }

  return (
    <section className="contact">
      <h1>CONTACT US</h1>
      <p>
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.{" "}
      </p>
      <div className="form-section">
        <div className="form-input">
          <div className="form-input-btn">
            <div>
              <button>VIA SUPPORT CHAT</button>
              <button>VIA CALL</button>
            </div>
            <button>VIA EMAIL FORM</button>
          </div>
          <div className="form-intup-form">
            <label htmlFor="name">Name</label>
            <input
              onChange={(e) => {
                setName((n) => e.target.value);
              }}
              value={name}
              id="name"
              type="text"
            />
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => {
                setEmail((email) => e.target.value);
              }}
              value={email}
              id="email"
              type="text"
            />
            <label htmlFor="text">Text</label>
            <textarea
              onChange={(e) => {
                setText((t) => e.target.value);
              }}
              value={text}
              name=""
              id="text"
              rows={5}
            ></textarea>
            <input onClick={handleclick} type="submit" />
          </div>
        </div>
        <div className="form-image">
          <img src="./images/back.svg" alt="background for form section" />
        </div>
      </div>
    </section>
  );
}
export default Contact;
