function Contact() {
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
            <input id="name" type="text" />
            <label htmlFor="email">Email</label>
            <input id="email" type="text" />
            <label htmlFor="text">Text</label>
            <textarea name="" id="text" rows={5}></textarea>
            <input type="submit" />
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
