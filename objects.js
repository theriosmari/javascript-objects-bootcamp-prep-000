var playlist = {Rihanna: "Same Ol' Mistakes", Stereolab: "Lo Boob Oscillator"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName, songTitle) {
  delete playlist.artistName
  return playlist
}
