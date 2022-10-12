import song from '../music/song.mp3';
function Header(){
  return(
    <div className='header '>
      <div className=" container d-flex justify-content-between align-items-center">
      <h1 className='header-title mb-0'>Aaron x Anne</h1>
      <div className='d-flex align-items-center'>
        <span className='press-heart d-none d-sm-block'>Press the heart to play <i className='bi bi-arrow-right-short'></i></span>
        <audio className='audio-player' autoPlay controls>
          <source src={song} type="audio/mpeg"></source>
        Your browser does not support the audio element.
        </audio>
      </div>
      </div>
    </div>
  )
}

export default Header