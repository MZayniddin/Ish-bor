import './Header-Bottom.scss';
import moneyImg from '../../assets/images/headerBottom-money-img.svg';
import desktopImg from '../../assets/images/headerBottom-desktop-img.svg';
import morterboardImg from '../../assets/images/headerBottom-morterboard-img.svg';

export default function HeaderBottom() {
  return (
    <div className='headerBottom'>
      <div className="container">
        <div className="headerBottom-category">
          <div className="headerBottom-category-item">
            <img src={moneyImg} alt="error" />
            <span>Maoshni tanlang</span>
          </div>
          <div className="headerBottom-category-item">
            <img src={desktopImg} alt="error" />
            <span>Holatni tanlang</span>
          </div>
          <div className="headerBottom-category-item">
            <img src={morterboardImg} alt="error" />
            <span>Sohani tanlang</span>
          </div>
        </div>
        <div className='headerBottom-newCummer'>
          <span>Yangi qo'shilganlar</span>
        </div>
      </div>
    </div>
  )
}
