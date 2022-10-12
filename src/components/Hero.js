import Lottie from 'lottie-react';
import loveAnimation from '../love-hearts.json'

function Hero(){

  var endDate = new Date("Dec 22, 2022 00:00:00").getTime();
  // Update the count down every 1 second
  var x = setInterval(function() {
    // Get todays date and time
    var now = new Date().getTime();
    // Find the distance between now an the count down date
    var distance = endDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Output the result in elements with id="cdHour/cdMin/cdSec"
    document.getElementById("daysNum").innerHTML = ("0" + days).slice(-2);  
    document.getElementById("hoursNum").innerHTML = ("0" + hours).slice(-2);
    document.getElementById("minsNum").innerHTML = ("0" + minutes).slice(-2);
    document.getElementById("secsNum").innerHTML = ("0" + seconds).slice(-2);
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countContainer").innerHTML = "EXPIRED";
    }
  }, 1000);

  

  

  return(

    <div className='mb-4'>
      <div className='lottieContainer mt-1'>
          <Lottie animationData={loveAnimation} loop={true} />
      </div>
      <h1 className="text-center countdown-text mt-0">Countdown to our <br></br>4 years anniversay</h1>
      <div className="d-flex justify-content-center mt-2">
        <div className="container-timer">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-12 countdown-card-wrap">
              <div id="daysNum" className="countdown-card m-auto">
                
              </div>
              <div className="countdown-stat">
                Day(s)
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 countdown-card-wrap">
              <div id="hoursNum" className="countdown-card m-auto">
                
              </div>
              <div className="countdown-stat">
                hours
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 countdown-card-wrap">
              <div  id="minsNum" className="countdown-card m-auto">
                
              </div>
              <div className="countdown-stat">
                minutes
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 countdown-card-wrap">
              <div id="secsNum" className="countdown-card m-auto">
                
              </div>
              <div className="countdown-stat">
                seconds
              </div>
            </div>
          </div>
        </div>

      </div>
      
      

    </div>
  )
}

export default Hero