import React, {useEffect, useState} from 'react';
import styles from './css/SearchBar.module.css'


function SearchBar({searchInput, setSearchInput, accessToken, setAccessToken, setTrack}){
    

    function handleOnChange(event){
        const searchData = event.target.value;
        setSearchInput(searchData);
    }

    useEffect(()=>{
        const fetchApi = async () =>{

            let authParameters = {
                method: 'POST',
                headers:{
                    'content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
            }
    
            try{
                const response = await fetch('https://accounts.spotify.com/api/token', authParameters);
                if(response.ok){
                    const jsonResponse = await response.json();
                    setAccessToken(jsonResponse.access_token);
                }
            }
            catch(error){
                console.log(error);
            }
        }

        fetchApi();
    }, []);

    const search = async (event) =>{
        event.preventDefault();

        let searchParameters = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        }

       
            let artistId = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=track&market=US&limit=9', searchParameters)
            .then(response => response.json())
            .then(data => {setTrack(data.tracks.items)});
      

            /*let albums = await fetch('https://api.spotify.com/v1/artists/' + artistId + '/albums' + '?include_groups=album&market=US&limit=50', searchParameters)
            .then(response => response.json())
            .then(data => {setAlbum(data.items)});*/

            /*album.map(data => {
                setAlbumId(prev => [...prev, data.id]);
            })*/
        
    }

    return(
        <form action='#' className={styles.container} onSubmit={search} >
            <input type="text" placeholder="Search..." onChange={handleOnChange} />
            <input type="submit" value="Search" />
        </form>
    );
}

export default SearchBar;
