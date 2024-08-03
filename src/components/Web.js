import React from 'react';
import { FaFirefox, FaSearch } from 'react-icons/fa';
import './Web.css';
import image1 from './OIP (4).jpeg'
import image2 from './R (5).jpeg'
import image3 from './Raja-Ampat-Islands-KB6592-e1535543078560.webp'
import image4 from './Jakarta_city_S.jpg'

const VerticalProgressBar = ({ progress }) => {
    return (
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ height: `${progress}%` }}
        ></div>
      </div>
    );
  };
 
 const Web = () => {
  return (
    <div>
        <nav className='Nav'>
            <div className='fox'>      
            <FaFirefox  size={50} color="#FF7139" style={{ margin: '10px' }} />
            <h1>Foxico</h1>
            </div>
            <div className='anchor'>
            <a className='a'>News</a>
            <a className='a'>Destination</a>
            <a className='a'>Blog</a>
            <a className='a'>Contact</a>
            </div>
            <div className='input'>
                <FaSearch className='searchicon'/>
            </div>
            <div className='p'>          
                  <p>Hello, Anney!</p>
            </div>
        </nav>


        <div className='body'>
            <div>
        <VerticalProgressBar progress={60} />
        </div>
            <div className='words'>
            <h1>INDONESIA</h1>
            <p>
            Indonesia is a stunning archipelago known for its diverse landscapes and rich culture. From Bali's beautiful beaches to Sumatra's lush jungles and Yogyakarta's ancient temples, each destination offers unique experiences. Visitors can explore vibrant markets, savor local cuisine, and engage with friendly locals. With over 17,000 islands, Indonesia promises unforgettable
             adventures for nature lovers and history buffs alike.            </p>
            <button>Explore</button>
            </div>

            <div className='img'>
            <p className='places'>Broken beach,</p>
                <img src={image1}></img>
            </div>
            <div className='img'>
                <p  className='places'>Famous Hindu Temple,</p>
                 <img src={image2}></img>
            </div>

            <div className='img'>
            <p  className='places'>The Indonesia Mountains,</p>
                  <img src={image3}></img>
            </div>
            <div className='img'>
            <p  className='places'>Jakarta City,</p>

                <img src={image4}></img>
            </div>

        </div>
    </div>
  );
};

export default Web;
