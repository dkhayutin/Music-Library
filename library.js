var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

  var printPlaylists = function () {
    for(id in library.playlists) {
      console.log(id + ': ' + library.playlists[id]['name'] + ' - ' + library.playlists[id]['tracks'].length + ' tracks')
    }

  }

// printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (id in library.tracks) {
    console.log(id + ': ' + library.tracks[id]['name'] + ' by ' + library.tracks[id]['artist'] + ' (' + library.tracks[id]['album'] + ')')
  }
}

// printTracks()


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

  var printPlaylist = function (playlistId) {
    var playList = library.playlists[playlistId]
    console.log(playlistId + ": " + playList.name + " - " + playList.tracks.length + " tracks");
    for(var i = 0; i < playList.tracks.length; i++ ) {
      printTrack(playList.tracks[i])
    }

  }

  var printTrack = function (trackId) {
    console.log(trackId + ': ' + library.tracks[trackId].name + ' by ' + library.tracks[trackId].artist + '(' + library.tracks[trackId].album + ')')
  }

//  printPlaylist('p01')


// adds an existing track to an existing playlist
//
var addTrackToPlaylist = function (trackId, playlistId) {
var trackItems = library.playlists[playlistId].tracks
trackItems.push(trackId)
console.log(trackItems)
}
// addTrackToPlaylist('t03', 'p01')
//

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

}


// adds a track to the library
//
var addTrack = function (name, artist, album) {
  uniqueId = {id: uid(),
    name: name,
    artist: artist,
    album: album,
  };
  library.tracks[uniqueId.id] = uniqueId;
  console.log(library.tracks)
}

addTrack('CodingVibes', 'LilDeezy', 'Hot cHUnees')


// adds a playlist to the library

  var addPlaylist = function (name) {
    newId = {id: uid(),
      name: name,
      tracks: ['t01', 't02']
    }
    library.playlists[newId.id] = newId
    console.log(newId)

  }
  // addPlaylist('Summer vibes')
  //

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}
