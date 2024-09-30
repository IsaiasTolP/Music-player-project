import songs from "../assets/songs/*.m4a";

Object.keys(songs);

const map = { }; // Diccionario clave-valor

let aux = 1;
for (var key of Object.keys(songs)) {
    // Asociar map[`.item-${aux}`] con la canción songs[key]
    map[`.item-${aux}`] = songs[key];
    aux++;
}

// Crear objeto Player y pasar el objeto map

function Player(songs){
    this.songs = songs;
}