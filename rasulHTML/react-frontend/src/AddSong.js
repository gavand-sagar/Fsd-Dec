import React, { useState } from 'react'

export default function AddSong() {
    const [songName, setSongName] = useState('');
    const [artist, setArtist] = useState('');
    const [rating, setRating] = useState('');


    function addSongClick() {
        let data = {
            songName: songName,
            artist: artist,
            rating: rating
        }


        //lets send this to server

        fetch('http://localhost:3001/songs', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(response => {
                alert('Added')
            })



    }


    return (
        <div>
            <fieldset>
                <div>
                    <input type="text" placeholder='Song Name' value={songName} onChange={e => setSongName(e.target.value)}></input>
                </div>
                <div>
                    <input type="text" placeholder='Artist' value={artist} onChange={e => setArtist(e.target.value)}></input>
                </div>
                <div>
                    <input type="number" placeholder='Rating' value={rating} onChange={e => setRating(e.target.value)}></input>
                </div>
                <button onClick={addSongClick}>Add</button>
            </fieldset>
        </div>
    )
}
