import { Link } from 'react-router-dom';
import heroImg from '../../assets/images/hero-image.jpg';
import uiux from '../../assets/images/uiux-category.svg';
import motion from '../../assets/images/motion-animation-category.svg';
import frontend from '../../assets/images/frontend-category.svg';
import backend from '../../assets/images/backend-category.svg';
import uillustrator from '../../assets/images/uiux-category.svg';
import grafigdizayn from '../../assets/images/grafigdizayn-category.svg';
import './Main.scss';

export default function Main() {
  return (
    <div className='main'>
      <div className="main__hero">
        <div className="container">
          <div className="main__hero__main">
            <h1>Assalomu Alaykum</h1>
            <p>Siz bu yerda ish berishingiz va ish olishingiz mumkun</p>
            <Link to="/">Ko'proq bilish</Link>
          </div>
          <div className="main__hero__img-wrapper">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="main__category">
          <h2>Kategoriyalar</h2>
          <div className='main__category-items'>
            <article className='main__category-item'>
              <img src={uiux} alt="" />
              <h1>Ux/ Ui dizayner</h1>
            </article>
          </div>

        </div>
      </div>
    </div>
  )
}
