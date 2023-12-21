import React from 'react';
import "./index.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function Home() {

  return (
    <>
      <div className="home-container">
        <div className="intro-section">
          <h2 className='text-black text-center'>Welcome to Our Product Store</h2>
        </div>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div style={{ height: "400px" }} className="carousel-item active" data-bs-interval="10000">
              <img id='img-1'
                src="https://media.licdn.com/dms/image/D4D12AQHtf40YrSqGSQ/article-cover_image-shrink_720_1280/0/1694726220695?e=2147483647&v=beta&t=lN6fRC09nQAjDTWoqVEzZ7upeu6sYwJ1qCu_4BWQ2w8"
                className="d-block w-50 rounded-5"
                alt="..."
              />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div>
          <h5 id='prod-stor-desc' className='text-center'>
            Discover a wide range of high-quality products that cater to your needs.
            From electronics to fashion, find the latest trends and best deals right here.
            Explore our collection and elevate your shopping experience.
          </h5>
        </div>
      </div>
    </>
  );
}

export default Home;
