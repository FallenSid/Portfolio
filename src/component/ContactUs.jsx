import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './contactus.css'

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
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="white" stroke=" rgb(0, 40, 216)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-icon lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>
                <h3>Send a Message</h3>
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