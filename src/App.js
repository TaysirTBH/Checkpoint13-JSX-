import mySrcImage from "./images/imageInSrc.jpg"
import './style.css';

function App() {
  return (
    <div className="App">
        <div style={{border: 'solid 1px black', maxWidth: '100vw' ,margin:'20px 50px 20px 50px'}}>
          <h1 className="title red">Taysir BEN HAFSIA</h1>
          <br />
          <img src={mySrcImage} alt ='myImage' />
          <br />
          <img width={250} height={255} src="/imageInPublic.jpg" alt ='myImage2' />
        </div>
        <iframe width={320} height={240} 
           src="https://www.youtube.com/embed/olJOZp57FWM" 
           title="YouTube video player" frameBorder={0} 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
           allowFullScreen />
    </div>
  );
}

export default App;
