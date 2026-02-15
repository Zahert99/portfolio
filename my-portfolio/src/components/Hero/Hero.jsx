import "./Hero.css";
import Image from "../../assets/me.jpeg";

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-content'>
        <h1 className='hero-title'>Hi, I'm Zaher Taeiara</h1>
        <p className='hero-subtitle'>A passionate fullstack developer</p>
        <a href='#projects' className='hero-button'>
          View My Work
        </a>
      </div>
      <div className='hero-image'>
        <img src={Image} alt='Zaher Taeiara' />
      </div>
    </div>
  );
}

export default Hero;
