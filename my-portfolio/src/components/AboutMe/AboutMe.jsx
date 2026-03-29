import "./AboutMe.css";
import Image from "../../assets/code.jpeg";

function AboutMe() {
  return (
    <section className='about' id='aboutMe'>
      <div className='about-container'>
        <div className='about-text'>
          <h2>About Me</h2>

          <p>
            I’m a full-stack developer with a strong focus on JavaScript and
            TypeScript. I’m currently in my final term at IT-Högskolan, where
            I’ve been building a solid foundation in modern web development.
          </p>

          <p>
            Alongside my studies, I’m completing my second internship (LIA) at
            Volvo Group, where I’m gaining hands-on experience working in a real
            development environment. During my internship, I’ve been involved in
            frontend development for a new internal developer portal,
            contributing to features and improvements that support internal
            teams.
          </p>

          <p>
            I’ve also been working with Customer Journey Analytics (CJA),
            implementing page views and interaction tracking events to help
            collect meaningful usage data and improve the overall user
            experience.
          </p>

          <p>
            Through my studies and internships, I’ve developed practical
            experience with modern frontend technologies, collaborative
            workflows, and real production code. I enjoy solving problems,
            improving user experiences, and continuously learning as a
            developer.
          </p>
        </div>

        <div className='about-highlights'>
          <img src={Image} alt='About Me' loading='lazy' decoding='async' />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
