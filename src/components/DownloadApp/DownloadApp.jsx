import  './DownloadApp.css'
import { assets } from '../../assets/assets'

const DownloadApp = () => {
  return (
    <div className="download-app" id='download'>
        <p>for better experiense download <br />Tomato App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>

  )
}

export default DownloadApp