import img from '../src/assets/images.jpg';
import video from '../src/assets/video.mp4';
import './App.css';

function App() {
  return (
    <div class='container'>
      <div class="imgContainẻ">
        <img src={img} />
      </div>
      <div class="videoContainer">
        <img src={video} />
      </div>
    </div>
  );
}

export default App;
