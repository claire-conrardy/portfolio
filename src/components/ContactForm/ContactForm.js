import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {

const form = useRef();
const [formSubmitted, setFormSubmitted] = useState(false);

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_ncza1gs', 'contact_form_cc', form.current,'P4-mp6WvQmW1U4s4w')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

  setFormSubmitted(true);
};

  return (
    <div className="contact-form" id="contact-form">
      <h2>On reste en contact ?</h2>
      {formSubmitted ? (
        <div className="confirmation-msg">
          <h3>Merci pour votre message !</h3>
          <p>Je vous répondrai dès que possible 😊</p>
        </div>
      ) : (
      <form ref={form} onSubmit={sendEmail}>
        <label className="label">Prénom</label>
        <input className="input" type="text" name="contact_firstname" required/>

        <label className="label">Nom</label>
        <input className="input" type="text" name="contact_lastname" required/>

        <label className="label">Courriel</label>
        <input className="input" type="email" name="contact_email" required/>

        <label className="label">Message</label>
        <textarea className="input" rows="10" cols="50" name="message" required />

        <input className="send-button" type="submit" value="Envoyer" />
      </form>)}
    </div>
  );
}

export default ContactForm;
