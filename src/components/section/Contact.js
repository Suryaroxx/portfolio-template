import React from "react";
import { contact, section5Title, social } from "../../profile";

const Contact = () => {
  return (
    <div className="parallax">
      <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
        <>
          <div className="git-head-div text-center mx-auto">
            <h1 id="Contact" className="git-head">
              {section5Title}
            </h1>
          </div>
        </>
        <div className="container">
          <div className="git-cont row">
            <div className="col-12 col-sm-6 half">
              <form
                action={
                  contact.contactUrl
                    ? contact.contactUrl
                    : "https://formspree.io"
                }
                method={contact.contactUrl ? "POST" : "GET"}
              >
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name"
                  required
                ></input>
                <input
                  type="mail"
                  id="mailid"
                  name="Email"
                  placeholder="Email Address"
                  required
                ></input>
                <input
                  type="text"
                  id="sub"
                  name="Subject"
                  placeholder="Subject"
                  required
                ></input>
                <textarea
                  id="msg"
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
                <button style={{ cursor: "pointer" }} type="submit">
                  Send Message
                </button>
              </form>
            </div>
            <div className="col-12 col-sm-6 half">
              <p className="lead">I'D LOVE TO HEAR FROM YOU</p>
              <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="iconsss">
                  {social.linkedin && (
                    <a
                      title="Visit Linkedin profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.linkedin}
                    >
                      <i
                        class="fab fa-linkedin"
                        style={{ color: "#e96224" }}
                      ></i>
                    </a>
                  )}
                  {social.facebook && (
                    <a
                      title="Email"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="mailto: suryauma28.11@gmail.com"
                    >
                      <i
                        class="fas fa-envelope"
                        style={{ color: "#e96224" }}
                      ></i>
                    </a>
                  )}
                  {social.twitter && (
                    <a
                      title="Contact Number"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="tel:+91-8667761784"
                    >
                      <i class="fas fa-mobile" style={{ color: "#e96224" }}></i>
                    </a>
                  )}

                  {social.github && (
                    <a
                      title="Visit Github profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.github}
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  <br />
                </div>
                {social.resume && (
                  <a title="Download Resume" href={social.resume} download>
                    <i className="fas fa-download"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <p id="not-dark" className="Copy">2020 © Copyright <strong>{contact.copyright}</strong>. All Rights Reserved</p> */}
    </div>
  );
};

export default Contact;
