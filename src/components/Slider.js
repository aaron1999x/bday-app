import la from '../images/lasvegas.jpg'
import grad from '../images/grad.jpg'
import strawberry from '../images/strawberry.jpg'
import gingerbread from '../images/gingerbread.jpg'
import anni from '../images/anni.jpg'


function Slider(){
  return(
    <div className='mt-4'>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={la} className="d-block slider-img" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>11 May 2021</h5>
              <p>Lunch at Hell's Kitchen at Las Vegas</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={grad} className="d-block slider-img slider-img" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>9 July 2021</h5>
              <p>Our graduation photoshoot</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={strawberry} className="d-block slider-img" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>3 Apr 2021</h5>
              <p>Our first time picking strawberry at Mrs. Heather's strawberry farm</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={gingerbread} className="d-block slider-img" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>26 Nov 2020</h5>
              <p>Our first time building a gingerbread house together</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={anni} className="d-block slider-img" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>28 Dec 2020</h5>
              <p className='text-black'>Anniversay celebration, charcuterie and lots of cardio</p>
            </div>
          </div>
        </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
      </div>
    </div>
  )
}

export default Slider