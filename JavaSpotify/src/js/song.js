export default class Song {
    constructor(k_song, v_song, c_song) {
        this.element = document.querySelector(k_song);
        this.audio = new Audio(v_song);
        this.album = document.querySelector(c_song);
    }
}

export function play_song(song) {
    const vinyl = song.element.querySelector(".vinyl");
    song.album.onclick = () => {
        if(song.audio.paused){
            song.audio.play();
            vinyl.classList.remove("close");
            vinyl.classList.add("open");
        }
        else{
            song.audio.pause();
            vinyl.classList.add("close");
            vinyl.classList.remove("open");
        }
    }
}