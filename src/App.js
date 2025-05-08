import logo from './logo.svg';
import './css/App.css';
import React, {useState} from 'react';
import SearchResults from './SearchResults.js';
import SearchBar from './SearchBar.js';
import styles from './css/App.module.css';
import Playlist from './Playlist.js';

const CLIENT_ID = '202c6b42b7d84461b19d637d8abb2264';
const CLIENT_SECRET = 'a1b1d8230a7f4d3790d920de9ec1fcef';

function App() {

  const [searchInput, setSearchInput] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [track, setTrack] = useState([]);
  const [currentTrack, setCurrentTrack] = useState([]);
  
  
  const onClickHandler = ({target}) =>{
    let trackId = 0;
    trackId = target.id;
    setCurrentTrack(prev => [...prev, track[trackId]]);
  }
  
  return (
    <div className="App">
      <header className={styles.header}>
        <h1>Jamming</h1>
      </header>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput}
      accessToken={accessToken} setAccessToken={setAccessToken} setTrack={setTrack} />
      <div className={styles.modules}>
        <SearchResults track={track} onClickHandler={onClickHandler} />
        <Playlist accessToken={accessToken} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack} />
      </div>
    </div>
  );
}

export default App;
