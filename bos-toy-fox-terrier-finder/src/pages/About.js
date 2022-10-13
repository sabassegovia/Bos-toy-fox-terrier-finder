import aboutPhoto from '../images/aboutphoto.png';

const About = () => {
  return (
    <div className="about">
      <h1>About <span className="theguy">The Guy</span></h1>
      <img src={aboutPhoto} alt="about"/>
      <p>Hi! I'm the guy! Come back later! Heck!</p>
      <p>Unless you have snacks, then you can stay!</p>
    </div>
  )
}
export default About;