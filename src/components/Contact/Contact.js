import "../../utils/Section.css";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact-section" className="contact-container section">
      <div className="contact-content">
        <div className="contact-content--form">
          <h1>I would be glad to hear your feedback..</h1>
          <p>Would you like me to work in your company?</p>
          <form className="contact-form">
            <div className="form-element--input">
              <label htmlFor="full-name">Full Name</label>
              <br />
              <input
                className="form-input"
                id="full-name"
                type="text"
                placeholder="Full name"
                required
              />
            </div>
            <div className="form-element--input">
              <label htmlFor="email">Email</label>
              <br />
              <input
                className="form-input"
                id="email"
                type="email"
                placeholder="Your email"
                required
              />
            </div>
            <div className="form-element--text">
              <label htmlFor="message">Message</label>
              <br />
              <textarea
                className="form-textarea"
                id="message"
                cols="40"
                rows="3"
                placeholder="Write something here..."
                required
              ></textarea>
            </div>
            <div className="form-element--button">
              <button className="form-button" type="submit">
                Send
              </button>
            </div>
          </form>
          <div className="form-contacts">
            <i className="uil uil-phone"> +351 920409213</i>
            <i className="uil uil-envelope"> acharya.utsav.15@gmail.com</i>
          </div>
        </div>
        <img
          className="contact-image"
          src="https://mediaslide-europe.storage.googleapis.com/evolvemodel/pictures/100/232/profile-1606734036-6530255f895f23cfa0c729a03f1e420c.jpg"
          alt="Form"
        />
      </div>
    </div>
  );
};

export default Contact;
