import songs from "../assets/songs/*.mp3";

Object.keys(songs);

const map = { };

let aux = 1;
for (var key of Object.keys(songs)) {
    // Asociar map[`.item-${aux}`] con la canción songs[key]
}

// Crear objeto Player y pasar el objeto map