import logo from './logo.svg';
import './css/App.css';
import React, {useState} from 'react';
import SearchResults from './SearchResults.js';
import SearchBar from './SearchBar.js';
import styles from './css/App.module.css';
import Playlist from './Playlist.js';


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
