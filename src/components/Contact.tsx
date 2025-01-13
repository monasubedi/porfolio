import { FormEvent, useRef } from "react";
import {
  FaAddressBook,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "b22c1cae-fdb6-4c0d-8107-f552456a6490");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("Form Submitted Successfully");
      if (formRef.current) {
        formRef.current.reset();
      }
    } else {
      console.log("Error", data);
      alert(data.message);
    }
  };
  return (
    <section id="contact" className="contact">
      <h1 className="gettouch">Get in touch</h1>
      <div className="flex gap-16 xs:flex-col md:flex-row">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-info">
            <FaEnvelope size={27} />
            <p>monasubedi9@gmail.com</p>
          </div>
          <div className="contact-info">
            <FaPhone size={27} />
            <p>+1 (641) 233 9048</p>
          </div>
          <div className="contact-info">
            <FaAddressBook size={27} />
            <p>IA, United States</p>
          </div>
          <div className="contact-info">
            <a
              href="https://github.com/monasubedi"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaGithub size={27} />
            </a>
            <a
              href="https://linkedin.com/in/mona-sbd"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={27} />
            </a>
          </div>
        </div>
        <div className="contact-right">
          <form ref={formRef} onSubmit={onSubmit}>
            <div className="form-field">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
              />
            </div>
            <div className="form-field">
              <label>Your Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="form-field">
              <label>Write your message here</label>
              <textarea
                rows={7}
                name="message"
                required
                placeholder="Enter your message"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
