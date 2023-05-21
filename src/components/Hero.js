import Lottie from 'lottie-react';
import loveAnimation from '../love-hearts.json'
import CountdownComponent from './CountdownComponent'

function Hero(){

  return(

    <div className='mb-4'>
      <div className='lottieContainer mt-1'>
          <Lottie animationData={loveAnimation} loop={true} />
      </div>
      <h1 className="text-center countdown-text mt-0">Countdown to our <br></br>5 years anniversay</h1>
      <CountdownComponent />
      
    </div>
  )
}

export default Hero