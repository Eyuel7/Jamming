import React, {useState} from 'react';
import styles from './css/Playlist.module.css';

const userId = '31tx4rzlczhz62dq4i77v43kiokq';

function Playlist({accessToken, currentTrack, setCurrentTrack}){

    const saveToPlaylist = async () => {

        let searchParameters = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': accessToken
            },
            body:{
                name: 'Playlist',
                public: false,
                collaborative: false,
                description: 'My playlist'
            }
        }

        try{
            const response = await fetch('https://api.spotify.com/v1/users/'+userId+'/playlists', searchParameters);
            
            if(response.ok){
                console.log(response.json());
            }
        }
        catch(error){
            console.log(error);
        }
    }

    const handleOnClick = ({target}) => {
        const id = target.id;
        
        setCurrentTrack(prev => {
            return prev.filter((_, index) => index != id)
        });
    }

    const getTrack = () =>{

        return(
            currentTrack.map((data, i) => {
                return (
                    <>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" 
                        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" 
                        crossOrigin="anonymous" referrerPolicy="no-referrer" />
                        
                    <li id={i}>{data.name}<i className="fa-solid fa-minus" style={{color: "#c92c2c"}} onClick={handleOnClick}></i><br/>
                    <span>{data.artists[0].name}</span></li>
                    <hr/>
                    </>
                )
            })
            
        );
    }

    return(
        <form className={styles.container}>
            <input type='text' name='playlistName' />
            <ul>
            {getTrack()}
            </ul>
            <input type='submit' value='SAVE TO SPOTIFY' />
        </form>
    );
}

export default Playlist;