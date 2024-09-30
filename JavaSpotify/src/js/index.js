import songs from "../assets/songs/*.m4a";
import Player from "./player.js";

Object.keys(songs);

const map = { }; // Diccionario clave-valor

let aux = 1;
for (var key of Object.keys(songs)) {
    // Asociar map[`.item-${aux}`] con la canción songs[key]
    map[`.item-${aux}`] = songs[key];
    aux++;
}

// Instanciar Player y pasar el objeto map

let player1 = Player(songs);