import React from 'react';
import styles from './css/SearchResults.module.css';

function SearchResults({track, onClickHandler}){

    /*async function onClickHandler(data){
        await fetch('https://api.spotify.com/v1/albums/' + data.id +'/tracks', searchParameters)
        .then(response => response.json())
        .then(tracks => {setTrack(tracks)});
    }*/



    return (
        <div className={styles.container}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" 
            integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" 
            crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <ul>
                {track.map((data, i) => {
                    return(
                        <>
                        <li>{data.name}<i id={i} className="fa-solid fa-plus" onClick={onClickHandler}></i><br/>
                        <span>{data.artists[0].name}</span></li>
                        <hr/>
                        </>
                    )
                })}
            </ul>
        </div>
    );
}

export default SearchResults;