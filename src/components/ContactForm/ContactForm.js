const ContactForm = () => {
  return (
    <form className="form">
      <label className="label">
        Prénom
        <input className="input" type="text" name="name" />
      </label>
      <label className="label">
        Nom
        <input className="input" type="text" name="name" />
      </label>
      <label className="label">
        Courriel
        <input className="input" type="email" name="number" />
      </label>
      <label className="label">
        Message
        <textarea className="input" rows="10" cols="60" />
      </label>
      <button className="button" type="submit">
        Envoyer
      </button>
    </form>
  );
}

export default ContactForm;
