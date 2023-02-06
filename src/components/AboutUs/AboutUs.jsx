import "./About.scss";
import heroImg from '../../assets/images/hero-image.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from "react-router-dom";


export default function AboutUs() {

  return (
    <div className="about">
      <div className="container">
        <div className="about-urlBox">
          <span>Bosh sahifa</span>
          <MdOutlineKeyboardArrowRight className="about-urlBox-arrowIcon" />
          <span>Biz haqimizda</span>
        </div>
        <div className="about-us">
          <h1>Biz haqimizda</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as </p>
        </div>
        <div className="about-ourGoal">
          <div className="about-ourGoal-main">
            <h2>Bizning maqsadimiz</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            <Link to="/registration">Ro’yhatdan o’tish</Link>
          </div>
          <div className="about-ourGoal-img-wrapper">
            <img src={heroImg} alt="error" />
          </div>
        </div>
      </div>
    </div >
  )
}
