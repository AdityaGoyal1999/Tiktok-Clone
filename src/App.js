import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">

        <div className="app__videos">
          <Video 
            channel="iamadityagoyal"
            description="This works"
            song="Peaches"
            likes="1001"
            shares="100"
            messages="100"
          />
          <Video />
          <Video />
          <Video />
          <Video />
        </div>

        

        {/* app container */}
          {/* video */}
          {/* video */}
          {/* video */}
          {/* video */}
          {/* video */}

    </div>
  );
}

export default App;
