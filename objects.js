var playlist = {Rihanna: "Same Ol' Mistakes", Stereolab: "Lo Boob Oscillator"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function rremoveFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return playlist
}
