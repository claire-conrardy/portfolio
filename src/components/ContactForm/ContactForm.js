import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-form" id="contact-form">
      <h2>On reste en contact ?</h2>
      <form>
        <label className="label">Prénom</label>
        <input className="input" type="text" name="name" required/>

        <label className="label">Nom</label>
        <input className="input" type="text" name="name" required/>

        <label className="label">Courriel</label>
        <input className="input" type="email" name="number" required/>

        <label className="label">Message</label>
        <textarea className="input" rows="10" cols="50" required />

        <button className="send-button" type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default ContactForm;
