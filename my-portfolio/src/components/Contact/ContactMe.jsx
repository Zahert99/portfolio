import "./ContactMe.css";

export default function ContactMe() {
  const ContactDetails = {
    email: "Zaher.t99@gmail.com",
    phone: "+46 760 277 606",
    linkedin: "https://www.linkedin.com/in/zaher-taeiara-568282158/",
    github: "https://github.com/Zahert99",
  };

  const emailSubject = "Portfolio Contact";
  const mailtoLink = `mailto:${ContactDetails.email}?subject=${encodeURIComponent(emailSubject)}`;

  return (
    <section className='contact' id='contact'>
      <div className='contact-container'>
        <h2 className='contact-title'>Contact Me</h2>
        <p className='contact-subtitle'>
          Open for internships, junior frontend roles, and collaboration.
        </p>

        <div className='contact-card'>
          <p className='contact-row'>
            <span className='contact-label'>Email</span>
            <a className='contact-link' href={mailtoLink}>
              {ContactDetails.email}
            </a>
          </p>

          <p className='contact-row'>
            <span className='contact-label'>Phone</span>
            <a
              className='contact-link'
              href={`tel:${ContactDetails.phone.replace(/\s+/g, "")}`}
            >
              {ContactDetails.phone}
            </a>
          </p>

          <p className='contact-row'>
            <span className='contact-label'>LinkedIn</span>
            <a
              className='contact-link'
              href={ContactDetails.linkedin}
              target='_blank'
              rel='noreferrer'
            >
              Visit Profile
            </a>
          </p>

          <p className='contact-row'>
            <span className='contact-label'>GitHub</span>
            <a
              className='contact-link'
              href={ContactDetails.github}
              target='_blank'
              rel='noreferrer'
            >
              Visit Profile
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
