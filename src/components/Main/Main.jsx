import { Link } from 'react-router-dom';
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
        </div>
      </div>
    </div>
  )
}
