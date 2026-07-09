import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';

const ContactUs = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            "service_1oczk7l",
            "template_u2004la",
            form.current,
            "PWfvOQ_d7C9Gc-ktI"
        )
        .then(
            (result) => {
                console.log(result.text);
                alert("Message sent successfully!");
            },
            (error) => {
                console.log(error.text);
                alert("Failed to send message");
            }
        );
    };

    return (
        <div className="form-contact">
            <div className="contact-title">
                <span className="contact-title-icon">
                    <Send size={22} />
                </span>
                <div>
                    <h3>Send a Message</h3>
                    <p>Tell me what you want to build.</p>
                </div>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                
                <label>Name</label> <br />
                <input type="text" name="name" required placeholder='Enter your Name'/> <br />

                <label>Email</label> <br />
                <input type="email" name="email" required placeholder='Enter your Email' /> <br />

                <label>Message</label> <br />
                <textarea name="message" required placeholder='About Project' /> <br />

                <button id='submit-btn' type="submit">Send</button>

            </form>
        </div>
    )
}

export default ContactUs
