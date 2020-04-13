import React from "react";
import "./style.css";

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: "", email: "", message: "" };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });


    render() {
        const { name, email, message } = this.state;
        return (
            <section className="container col-10">
            <div className="contact-me">
                <h5>Contact Me!</h5>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label>
                        Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
                        </label>
                        <label>
                        Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                            <textarea name="message" value={message} onChange={this.handleChange}/>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                    </form>
            </div>
        </section>
          
        );
    }
}
export default ContactForm;